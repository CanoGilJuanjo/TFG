<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Message;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $mensaje;

    /**
     * Create a new message instance.
     */
    public function __construct($name, $email, $mensaje)
    {
        $this->name = $name;
        $this->email = $email;
        $this->mensaje = $mensaje;
    }

    public function build($name, $email, $mensaje){
        $this->name = $name;
        $this->email = $email;
        $this->mensaje = $mensaje;
        return view("mail.hello",["nombre"=>$name,"email"=>$email,"mensaje"=>$mensaje]);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'ContactMail',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
