<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
     //

     protected $fillable = [
        'nickname',
        'sex',
        'mobile',
        'languageorframework',
        'workexperience',
        'country'
     ];
 
 
     public function user()
     {
         return $this->belongsTo(User::class);
     }

}
