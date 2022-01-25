<?php

/**
 * Dated : 22/21/2021
 *
 * This is a User Controller: not in use: serves as reference code for future projects
 * 
 * @author   Silas Udofia <Silas@Verixon.com>
 */

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\User as UserResource;


class UserController extends Controller
{
    public function index()
    {   try{
         $Users = User::with(['profile','questions']);
         return  UserResource::collection($Users->paginate(40))->response();
        }catch(\Exception $exception){
          return response()->json(['message'=> $exception->getMessage()],400);
       }   
    }

    //'questions','projects'
    public function user($id){

       $user = User::where('id' , $id)->with('profile','questions','projects');
        if (is_null($user)) {
         return Response()->json(['message' => 'Profile or User does not exist'], 404);
        }
       return UserResource::collection($user->paginate(1))->response();

    }

    public function getAuthUser()
    {
        $auth_user = Auth::user();

        $response = [
          'name' => $auth_user->name,
          'email' => $auth_user->email
        ];
        return Response()->json($response, 200);
    }
}
