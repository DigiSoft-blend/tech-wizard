<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Post;
use App\Http\Resources\PostResource;
use App\Http\Resources\User as  UserResource;
use App\Http\Requests\PostRequest;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function addPost(PostRequest $request){

        $title = $request->input('title');
        $editordata = $request->input('editordata');
       
      try{

        $post = new Post;
        $post->title = $title;
        $post->editordata = $editordata;
        $post->user_id = Auth::user()->id;
        $post->save();
        return Response()->json(['message' => 'Post added'],200);

      }catch(\Exception $exception){
         return response()->json(['message'=> $exception->getMessage()],400);
      }     
    }
 

     public function showAllPost(){
       try{
       $post = Post::with(['user','like'])->orderBy('created_at', 'desc');
       return PostResource::collection($post->paginate(20))->response();
       }catch(\Exception $exception){
        return response()->json(['message' => $exception->getMessage()],400);
      }
     }



    public function getAuthUserPost(){

    $user_id = Auth::user()->id;

    if(!is_null($user_id))
    {
      $Post = Post::where('user_id', $user_id)->with(['user'])->orderBy('created_at', 'desc');
        
        if (is_null($Post)) {
          return Response()->json(['message' => 'No result found'], 404);
        }
      
        return PostResource::collection($Post->paginate(10))->response();
      } 
    return Response()->json(['message' => 'User not found, make sure you are logged in with Techwizard'], 404);
  } 



  public function deleteUserPost($id){
       
   $Post = Post::find($id);

   if(is_null($Post)){
       return response()->json(['message'=> 'Post not found or does not exist'], 404);
   }
   
   $Post->delete();
   return response()->json(['message'=> 'Post deleted'], 200);
}

public function getPostWithId($id){

  $Post = Post::where('id', $id);
  
  if (is_null($Post)) {
    return Response()->json(['message' => 'No result found'], 404);
 }
 return PostResource::collection($Post->paginate(10))->response();
}

public function updatePostWithId(PostRequest $request){
  $postId = $request->input('postId');
  $title = $request->input('title');
  $editordata = $request->input('editordata');

    $post = Post::find($postId);
    $post->title = $title;
    $post->editordata = $editordata;
    $post->save();

    return Response()->json(['message'=> 'post updated'],200);
}
 
  
}
