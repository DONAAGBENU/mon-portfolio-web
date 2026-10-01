import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Le service d’envoi d’email n’est pas configuré' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    const result = await resend.emails.send({
      from: 'noreply@donatien-portfolio.com',
      to: 'donaagbenu2000@gmail.com',
      replyTo: email,
      subject: `Nouveau message de ${name}: ${subject || 'Sans sujet'}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c6bff; border-bottom: 2px solid #7c6bff; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ''}
          </div>

          <div style="margin: 1.5rem 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 1rem; border-left: 3px solid #7c6bff; border-radius: 4px;">
              ${message}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 2rem 0;">
          <p style="font-size: 0.85rem; color: #888; text-align: center;">
            Cet email a été envoyé via votre formulaire de contact du portfolio
          </p>
        </div>
      `,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
