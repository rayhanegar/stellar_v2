<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Snap extends Model
{
    use HasFactory;
    protected $fillable = [
        'url','title'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
