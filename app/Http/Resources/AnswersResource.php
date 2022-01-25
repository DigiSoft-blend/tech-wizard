<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnswersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {   
        $question = $this->whenLoaded('question');
        $user = $this->whenLoaded('user');
        return [
            'id' => $this->id,
            'editordata' => $this->editordata,
            'created_at' =>  $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
            'question' => new QuestionsResource ($question),
            'ans_user' =>  $this->user,
            'user' => new User($user)
        ];
    }
}
