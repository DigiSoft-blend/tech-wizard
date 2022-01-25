<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

   Route::post('register', 'API\DevController@devSignUp');
   Route::post('login', 'API\DevController@devLogin');
   Route::delete('delete/{id}', 'API\DevController@deleteUser');
   Route::get('renderQuestions', 'API\QuestionsController@show');
   Route::get('singleQ/{id}',  'API\QuestionsController@single');
   Route::get('users', 'API\UserController@index');
   Route::get('user/{id}', 'API\UserController@user');
   Route::get('showProfile', 'API\UserProfileController@show');
   Route::get('single/{id}',  'API\UserProfileController@single');
   Route::get('allPost', 'API\PostController@showAllPost');

   Route::get('getAnswerWithId/{id}', 'API\AnswersController@getAnswerWithId');
   Route::post('updateAnswerWithId', 'API\AnswersController@updateAnswerWithId');
   Route::delete('deleteAnswer/{id}','API\AnswersController@deleteAnswer');
   Route::get('getAllUsers', 'API\DevController@getAllUsers');
   Route::post('Admin-Login', 'API\DevController@adminLogin');

   //  Route::post('forgot', 'API\ForgotPasswordController@forgot');
   //  Route::post('reset', 'API\ForgotPasswordController@reset');

    
    Route::middleware('auth:api')->group(function()
    {
      Route::get('user-profile', 'API\UserProfileController@authUserProfile');  
      Route::put('update-profile', 'API\UserProfileController@updateProfile');
      Route::post('add-project', 'API\ProjectController@addProject');
      Route::post('addPost', 'API\PostController@addPost');
      Route::post('ask', 'API\QuestionsController@ask');
      Route::post('ans', 'API\AnswersController@ans');
      Route::get('showAns', 'API\AnswersController@showAns');
      Route::get('getQuest', 'API\QuestionsController@getAuthUserQuest');
      Route::get('getPost', 'API\PostController@getAuthUserPost');
      Route::post('logout', 'API\DevController@logOutDev');
      Route::delete('deleteQuestion/{id}', 'API\QuestionsController@deleteUserQuestion');
      Route::delete('deletePost/{id}', 'API\PostController@deleteUserPost');
      Route::get('getPostWithId/{id}', 'API\PostController@getPostWithId');
      Route::post('updatePostWithId', 'API\PostController@updatePostWithId');
      Route::post('updateQuestionWithId', 'API\QuestionsController@updateQuestionWithId');
      Route::get('getAuthUser', 'API\UserController@getAuthUser');
      Route::get('likePost/{id}', 'API\LikeController@likePost');
      Route::post('getlikes', 'API\LikeController@getLikes');
    });
