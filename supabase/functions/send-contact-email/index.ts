import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    // Send notification email to portfolio owner
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["satyamnaik.dev@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
      }),
    });

    // Send confirmation email to the person who submitted the form
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Satyam Naik <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for reaching out!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">Thank You, ${name}!</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              I've received your message and appreciate you taking the time to reach out.
            </p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #6b7280; margin: 0;"><strong>Your message subject:</strong> ${subject}</p>
            </div>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Satyam Naik</strong>
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            <p style="color: #9ca3af; font-size: 12px;">
              This is an automated confirmation email. Please do not reply directly to this message.
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationRes.json();
    const confirmationData = await confirmationRes.json();
    
    console.log("Notification email response:", notificationData);
    console.log("Confirmation email response:", confirmationData);

    if (!notificationRes.ok) {
      throw new Error(notificationData.message || "Failed to send notification email");
    }

    if (!confirmationRes.ok) {
      console.warn("Failed to send confirmation email:", confirmationData.message);
    }

    return new Response(JSON.stringify({ success: true, notificationData, confirmationData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
