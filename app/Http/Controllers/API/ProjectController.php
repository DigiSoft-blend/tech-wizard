<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\ProjectRequest;
use Illuminate\Support\Facades\Auth;
use App\Project;

class ProjectController extends Controller
{
    public function addProject(ProjectRequest $request){
     
        $editordata = $request->input('editordata');

    try{
        $Project = new Project;
        $Project->editordata = $editordata;
        $Project->user_id = Auth::user()->id;

        $Project->save();

        return response()->json(['message' => 'Project added'],200);

    }catch(\Exception $exception){
        return response()->json(['message'=> $exception->getMessage()],400);
    }  
    }

}
