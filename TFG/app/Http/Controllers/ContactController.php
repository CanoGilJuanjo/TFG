<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\NombreDelMailable;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function contactMail(Request $request)
    {
        /* REQUEST: MAIL, NAME, MENSAJE */
        
        $details = [
            'name' => $request -> name ,
            'mail' => $request -> mail,
            'mensaje' => $request -> mensaje

        ];
        Mail::to('jkp0001@alu.medac.es')->send(new Contactmail($details));
        
    }

}
