<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [ 'title', 'editordata' ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function like(){
        return $this->hasMany(Like::class);
    }

    public function likecount(){
        return $this->hasMany(LikesCount::class);
    }
}
