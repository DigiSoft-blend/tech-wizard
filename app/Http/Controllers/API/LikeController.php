<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Like;
use App\LikesCount;
use DB;

class LikeController extends Controller
{
   

  public function likePost($id){

   $likeCheck = Like::where(['user_id' => Auth::id(), 'post_id' => $id])->first(); // check if exist
       
       if($likeCheck)//if true then delete like, unlike
       {
          Like::where(['user_id' => Auth::id(), 'post_id' => $id])->delete();

          $count = Like::where('post_id', $id)->count(); // get total like entries where post_id is the current post id
          
          $insert = LikesCount::where('post_id', $id)->update(['count' => $count, 'post_id' => $id]); // update likes counter when unlike

          return response()->json(['message' => 'unliked', 'count' => $count ],200); //return response

       }else{ // if false then create new Like

          $count = Like::where('post_id', $id)->count();

          $like = new Like;
          $like->user_id = Auth::id();
          $like->post_id = $id;
          $like->save();

         $likescount =  LikesCount::where(['post_id' => $id])->first(); //get likes count where post_id is current post_id
         
         if($likescount){ //check if not empty,true then update existing like count in db
            $insert = LikesCount::where('post_id', $id)->update(['count' => $count + 1, 'post_id' => $id]);
         }else{ //else false, insert, create new count where post id is given post id
            $insert = LikesCount::where('post_id', $id)->insert(['count' => $count + 1, 'post_id' => $id]);
         }

          $response = [
            'id' => $like->id,
            'message' => 'liked', 
            'count' => $count+1,
          ];
          
          return response()->json($response,200);
       }
  }



    public function getLikes(Request $request){ 
      $count = Like::where('post_id', $request->id)->count();
      return response()->json(['count'=> $count],200);
    }
}
