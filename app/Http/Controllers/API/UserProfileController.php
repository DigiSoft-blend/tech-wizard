<?php

/**
 * Dated : 22/21/2021
 * 
 * This is a User Profile Controller: not in use: serves as reference code for future projects
 *  
 * @author   Silas Udofia <Silas@Verixon.com>
 */

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Profile;
use App\User;
use App\Http\Requests\UserProfileRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserProfileResource;
use App\Http\Resources\User as UserResource;

class UserProfileController extends Controller
{
    
    public function updateProfile(UserProfileRequest $request){
        
       $nickName = $request->input('nickname');
       $sex = $request->input('sex');
       $mobile = $request->input('mobile');
       $languageorFramework = $request->input('languageorframework');
       $workExperience = $request->input('workexperience');
       $country = $request->input('country');
      
       $authUserId = Auth::user()->id;

       $hasProfile = Auth::user()->profile;

       if(is_null($hasProfile)){

        $userProfile = new Profile;
        $userProfile->nickname = $nickName;
        $userProfile->sex = $sex;
        $userProfile->mobile = $mobile;
        $userProfile->country = $country;
        $userProfile->languageorframework = $languageorFramework;
        $userProfile->workexperience = $workExperience;
        $userProfile->user_id = $authUserId;
            
        $userProfile->save();

        $response = [
            'message'=>'profile created' //. Auth::user()->name,
        ];

       return response()->json( $response, 200);

       }else{

        $authUserProfileId = Auth::user()->profile->id;

        $userProfile = Profile::find($authUserProfileId);
        $userProfile->nickname = $nickName;
        $userProfile->sex = $sex;
        $userProfile->mobile = $mobile;
        $userProfile->country = $country;
        $userProfile->languageorframework = $languageorFramework;
        $userProfile->workexperience = $workExperience;
        $userProfile->user_id = $authUserId;
            
        $userProfile->save();

        $response = [
            'message'=>'profile created' //. Auth::user()->name,
        ];

       return response()->json( $response, 200);
       }

    }


    
    public function single($id){

        $Profile = Profile::where('id', $id)->with('user');
  
            if (is_null($Profile)) {
                return Response()->json(['message' => 'Profile or User does not exist'], 404);
            }

            return UserProfileResource::collection($Profile->paginate(1))->response();
    }



    public function authUserProfile(){
       $id = Auth::user()->id;
       $user = User::where('id' , $id)->with('profile','projects');
        if (is_null($user)) {
         return Response()->json(['message' => 'Profile or User does not exist'], 404);
        }
       return UserResource::collection($user->paginate(1))->response();
    }
}
