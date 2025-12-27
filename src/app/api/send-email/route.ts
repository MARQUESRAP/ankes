import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html, attachments, from_name } = await request.json();

    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: 'Champs requis manquants: to, subject, html' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `${from_name || 'Raphaël de Ankès'} <raphael@gralt.fr>`,
      to: [to],
      subject: subject,
      html: html,
      attachments: attachments || [],
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
