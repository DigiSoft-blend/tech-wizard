<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Answer; 
use App\Question;
use App\Http\Resources\AnswersResource;
use App\Http\Resources\User as  UserResource;
use App\Http\Requests\AnswersRequest;
use Illuminate\Support\Facades\Auth;

class AnswersController extends Controller
{
  public function ans(AnswersRequest $request){

    $editordata = $request->input('editordata');
    $question_id = $request->input('question_id');

      $answer = new Answer;
      $answer->editordata = $editordata;
      $answer->question_id =  $question_id;
      $answer->user_id = Auth::user()->id;
      $answer->save();

      return Response()->json(['message' => 'Answer posted'],200);
  }

  public function showAns(){
    $Answer = Answer::with(['question','user'])->orderBy('created_at', 'desc');
    return AnswersResource::collection($Answer->paginate(5))->response();
  }


  public function getAnswerWithId($id){

    $answer = Answer::where('id', $id);
    
    if (is_null($answer)) {
      return Response()->json(['message' => 'No result found'], 404);
    }
    return AnswersResource::collection($answer->paginate(10))->response();
  }
    
  public function updateAnswerWithId(AnswersRequest $request){
    $answerId = $request->input('answerId');
    $editordata = $request->input('editordata');
  
      $answer = Answer::find($answerId); 
      $answer->editordata = $editordata;
      $answer->save();
  
      return Response()->json(['message'=> 'Answer updated'],200);
  }
     
  public function deleteAnswer($id)
   {
        
    $answer = Answer::find($id);

    if(is_null($answer)){
        return response()->json(['message'=> 'Answer not found or does not exist'], 404);
    }
    
    $answer->delete();
    return response()->json(['message'=> 'Answer deleted'], 200);
  }  
 
}
