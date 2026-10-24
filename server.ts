import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Comprehensive verified local fallback answers for common cyber safety queries
const KNOWLEDGE_BASE_RESPONSES: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['fake account', 'impersonat', 'clone', 'fake profile'],
    answer:
      'If someone is impersonating you or a friend:\n1. Alert friends publicly on your genuine profile not to accept requests or send money.\n2. In-app report: Open the fake account -> tap the three dots (...) -> Report -> "It\'s pretending to be someone else" -> "Me".\n3. Evidence: Take an unedited screenshot of their profile URL and messages.\n4. If the fake account is extorting money or circulating non-consensual content, lodge a complaint at https://cybercrime.gov.in under the Identity Theft / Impersonation section.',
  },
  {
    keywords: ['hacked', 'compromised', 'cannot login', 'lost access'],
    answer:
      'If your account is compromised:\n1. If still logged in on one device, immediately change your password, choose "Log out of all other sessions", and check Accounts Center -> Contact Info to remove attacker emails/numbers.\n2. If locked out, visit the official recovery portal: for Instagram visit https://instagram.com/hacked, for Facebook visit https://facebook.com/hacked.\n3. Beware of secondary scammers on Telegram or X claiming they can "hack back" your account for a fee. 100% of these are fraud.',
  },
  {
    keywords: ['money', 'scam', 'fraud', '1930', 'upi', 'bank', 'stolen money', 'lost money'],
    answer:
      'For Financial Cyber Fraud in India:\n1. Dial 1930 immediately! Reporting within the "Golden Hour" (first 2 hours) enables the financial cell to freeze fraudulent transactions.\n2. Contact your bank\'s 24/7 fraud helpline to block debit cards and dispute the transaction with the 12-digit UTR number.\n3. File an official complaint on https://cybercrime.gov.in and download the acknowledgment receipt.',
  },
  {
    keywords: ['deepfake', 'synthetic', 'face swap', 'manipulated video', 'voice clone'],
    answer:
      'Handling Deepfakes & Synthetic Media:\n1. Do not forward or re-share the video, even to ask friends if it is real.\n2. Preserve the direct post URL and uncropped screenshots with uploader handles and timestamps.\n3. In India, file a complaint on https://cybercrime.gov.in under "Cyber Crime against Women and Children". Under IT Rules 2021, platforms must remove non-consensual synthetic media within 24-36 hours.\n4. For intimate media, submit anonymous hashes to https://stopncii.org to block automated re-uploads across major platforms.',
  },
  {
    keywords: ['bully', 'cyberbully', 'harass', 'threat', 'trolling'],
    answer:
      'Responding to Cyberbullying:\n1. Do not engage in public arguments; retaliation fuels algorithm reach and feeds trolls.\n2. Take clean screenshots with dates, handles, and URLs visible for evidence.\n3. Deploy protective tools: on Instagram, tap (...) on the profile -> "Restrict" to quietly hide their comments without notifying them.\n4. Report to your school or college student grievance committee. If there are threats of physical violence, contact local emergency services immediately via 112.',
  },
];

function getVettedFallback(message: string): string {
  const lower = message.toLowerCase();
  for (const item of KNOWLEDGE_BASE_RESPONSES) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer;
    }
  }
  return (
    'Welcome to SafeNet Cyber Tutor. Here are the core cyber safety rules:\n' +
    '1. Never share OTPs, passcodes, or reset links with anyone.\n' +
    '2. Use unique 16+ character passwords stored in a password manager and turn on Authenticator App 2FA.\n' +
    '3. For financial cyber fraud in India, dial 1930 immediately or visit https://cybercrime.gov.in.\n' +
    '4. For non-consensual deepfakes, report via in-app channels and cybercrime.gov.in.\n' +
    '5. What specific issue can I assist you with today (e.g. account recovery, suspicious link, harassment)?'
  );
}

// Server-side AI Safety Tutor endpoint
app.post('/api/tutor', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message text is required.' });
    }

    const trimmed = message.trim();
    if (trimmed.length > 500) {
      return res.status(400).json({ error: 'Message exceeds maximum length of 500 characters.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      // Clean local verified guidance fallback
      const fallbackReply = getVettedFallback(trimmed);
      return res.json({
        reply: fallbackReply,
        isLiveModel: false,
        notice: 'Provided by SafeNet Cyber Safety Knowledge Base (Offline / Pre-configured Mode).',
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are SafeNet Cyber Tutor, an educational mentor for cyber safety, digital footprints, and privacy awareness in India.
User query: "${trimmed}"

Instructions:
- Provide concise, practical, victim-centered guidance (under 160 words).
- If relevant, reference official reporting portals (https://cybercrime.gov.in, helpline 1930 for financial cyber fraud, 112 for physical emergencies).
- Never impersonate law enforcement, never promise guaranteed money recovery, and never ask for passwords or personal details.
- Emphasize evidence preservation (unedited screenshots, URLs, timestamps).
- Use clear bullet points.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const reply = response.text || getVettedFallback(trimmed);

    return res.json({
      reply,
      isLiveModel: true,
      notice: 'Powered by Google Gemini 2.5 AI Tutor.',
    });
  } catch (err: unknown) {
    console.error('Error in /api/tutor:', err);
    const fallbackReply = getVettedFallback(req.body?.message || '');
    return res.json({
      reply: fallbackReply,
      isLiveModel: false,
      notice: 'Provided by SafeNet Cyber Safety Knowledge Base (Fallback Mode).',
    });
  }
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`SafeNet Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
