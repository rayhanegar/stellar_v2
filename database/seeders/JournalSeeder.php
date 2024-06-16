<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Journal;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class JournalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('email', 'shunsuke@email.com')->first();
        
        if (!$user) {
            throw new \Exception('User not found!');
        }

        Journal::factory()
            ->count(10)
            ->create([
                'user_id' => $user->id
        ]);
    }
}
