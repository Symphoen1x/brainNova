<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsletterController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255|unique:newsletter_subscribers,email',
        ], [
            'email.unique' => 'Email ini sudah terdaftar.',
        ]);

        DB::table('newsletter_subscribers')->insert([
            'email' => $validated['email'],
            'subscribed_at' => now(),
            'created_at' => now(),
        ]);

        return back()->with('success', 'Berhasil subscribe!');
    }
}
