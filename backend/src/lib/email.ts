import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'jawab.innn@gmail.com';

// Only initialize Resend if API key is provided
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface ContactEmailData {
  name: string;
  email: string;
  service: string;
  message: string;
}

/**
 * Send email notification for new contact form submission.
 * Silently fails if Resend is not configured — the contact is still saved to DB.
 */
export async function sendContactNotification(data: ContactEmailData): Promise<boolean> {
  if (!resend) {
    console.log('[Email] Resend not configured — skipping email notification');
    return false;
  }

  try {
    await resend.emails.send({
      from: 'JAWAB.IN <onboarding@resend.dev>', // Change to your verified domain later
      to: notificationEmail,
      subject: `📩 Pesan Baru dari ${data.name} — ${data.service}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid #1A1A1A; background: #FFF9EA;">
          <div style="background: #FFE500; padding: 24px; border-bottom: 4px solid #1A1A1A;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">
              📩 Pesan Baru — JAWAB.IN
            </h1>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 700; width: 120px; vertical-align: top;">Nama</td>
                <td style="padding: 8px 0;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 700; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 700; vertical-align: top;">Layanan</td>
                <td style="padding: 8px 0;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 700; vertical-align: top;">Pesan</td>
                <td style="padding: 8px 0; white-space: pre-wrap;">${data.message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #1A1A1A; color: white; padding: 16px 24px; text-align: center; font-weight: 700;">
            JAWAB.IN — Solusi Akademik & Digital Terpercaya
          </div>
        </div>
      `,
    });

    console.log(`[Email] Notification sent to ${notificationEmail}`);
    return true;
  } catch (error) {
    console.error('[Email] Failed to send notification:', error);
    return false;
  }
}
