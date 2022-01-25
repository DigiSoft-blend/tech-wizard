<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserProfileResource extends JsonResource
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
          'nickname' => $this->nickname,
          'sex' => $this->sex,
          'mobile' => $this->mobile,
          'languageorframework' => $this->languageorframework,
          'workexperience' => $this->workexperience,
          'country' => $this->country,
          'created_at' => $this->created_at->format('d/m/Y'),
          'updated_at' => $this->updated_at->format('d/m/Y'),
          'user'=> new User($user)
        ];
    }
}
