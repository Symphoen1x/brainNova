<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        // For now, just log it. You can set up Mailable later.
        logger()->info('Contact form submission', $validated);

        // TODO: Mail::to('hello@brainnova.id')->send(new ContactMessage($validated));

        return back()->with('success', 'Pesan berhasil dikirim!');
    }
}
