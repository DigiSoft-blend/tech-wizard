<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Question; 
use App\Http\Resources\QuestionsResource;
use App\Http\Resources\User as  UserResource;
use App\Http\Requests\QuestionsRequest;
use Illuminate\Support\Facades\Auth;

class QuestionsController extends Controller
{
    public function ask(QuestionsRequest $request){

       $title = $request->input('title');
       $editordata = $request->input('editordata');

       if(is_null(Auth::user())){
         return Response()->json(['message' => 'Unauthorised User'], 400);
       }else{
        $Quest = new Question;
        $Quest->title = $title;
        $Quest->editordata = $editordata;
        $Quest->user_id = Auth::user()->id;
        $Quest->save();
 
        return Response()->json(['message' => 'Question posted'],200);
       }
    }

    public function show(){
      $Questions = Question::with(['user','answer'])->orderBy('created_at', 'desc');
      return QuestionsResource::collection($Questions->paginate(10))->response();
    }

    public function single($id){

      $Question = Question::where('id', $id)->with(['user','answer'])->orderBy('created_at', 'desc');
      
      if (is_null($Question)) {
        return Response()->json(['message' => 'No result found'], 404);
     }
     return QuestionsResource::collection($Question->paginate(10))->response();
    }


   public function getAuthUserQuest(){

       $user_id = Auth::user()->id;

      if(!is_null($user_id))
       {
         $Question = Question::where('user_id', $user_id)->with(['user','answer'])->orderBy('created_at', 'desc');
          
          if (is_null($Question)) {
            return Response()->json(['message' => 'No result found'], 404);
          }
        
           return QuestionsResource::collection($Question->paginate(10))->response();
        } 
       return Response()->json(['message' => 'User not found, make sure you are logged in with Techwizard'], 404);
   } 



 public function deleteUserQuestion($id)
   {
        
    $Question = Question::find($id);

    if(is_null($Question)){
        return response()->json(['message'=> 'Question not found or does not exist'], 404);
    }
    
    $Question->delete();
    return response()->json(['message'=> 'Question deleted'], 200);
  }


  public function updateQuestionWithId(QuestionsRequest $request){
    $questionId = $request->input('questionId');
    $title = $request->input('title');
    $editordata = $request->input('editordata');
  
      $question = Question::find($questionId);
      $question->title = $title;
      $question->editordata = $editordata;
      $question->save();
  
      return Response()->json(['message'=> 'post updated'],200);
  }


}
