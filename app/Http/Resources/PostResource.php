<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {  
        $user = $this->whenLoaded('user');
        return [
            'id' => $this->id,
            'title' => $this->title,
            'editordata' => $this->editordata,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
            'user'=> new User($user),
            'like' => $this->like,
            'likes_count' => $this->likecount
        ];
    }
}
