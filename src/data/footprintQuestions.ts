import { FootprintQuestion } from '../types';

export const FOOTPRINT_QUESTIONS: FootprintQuestion[] = [
  {
    id: 'fp-1',
    category: 'Privacy Settings',
    question: 'How is your primary social media account (Instagram, Facebook, etc.) visibility configured?',
    subtitle: 'Public accounts allow anyone on the internet, including scrapers, to view your content.',
    options: [
      { text: 'Completely Public (Anyone can view my posts and followers)', points: 0, riskDescription: 'Public profile allows data aggregators and strangers to harvest your likeness and routines.' },
      { text: 'Semi-Private (Some accounts are private, others are public with personal posts)', points: 5, riskDescription: 'Inconsistent privacy creates leakage vectors where private details appear in public feeds.' },
      { text: 'Private / Closed (Only approved friends and family can view my content)', points: 10, riskDescription: 'Strong baseline protection restricting casual surveillance.' },
    ],
  },
  {
    id: 'fp-2',
    category: 'Personal Data',
    question: 'What personal identifiers are currently visible on your social media bios or public posts?',
    subtitle: 'Think about birth date, phone number, school/college name, vehicle plates, or workplace.',
    options: [
      { text: 'Multiple items visible (e.g. college/school name, birth year, hometown, phone or WhatsApp link)', points: 0, riskDescription: 'Public bio data provides identity thieves all the puzzle pieces required for password resets and impersonation.' },
      { text: 'Only broad details (e.g. general city, creative interests, but no direct contact or school ID)', points: 5, riskDescription: 'Moderate exposure; keep personal specifics strictly out of public search snippets.' },
      { text: 'Zero sensitive data (No school, birth date, phone number, or home address listed)', points: 10, riskDescription: 'Minimal bio exposure drastically reduces targeting risk.' },
    ],
  },
  {
    id: 'fp-3',
    category: 'Location & Sharing',
    question: 'How do you handle location geotags and check-ins when posting photos or stories?',
    subtitle: 'Real-time location tags signal when your home is unattended or reveal your daily routine routes.',
    options: [
      { text: 'I tag my live location immediately while at the restaurant, gym, or venue', points: 0, riskDescription: 'Real-time geotagging exposes your exact coordinates to stalkers and potential burglars.' },
      { text: 'I sometimes tag general cities or neighborhoods, but rarely specific venues while still there', points: 5, riskDescription: 'Better, but repeated posts in one neighborhood still create pattern-of-life maps.' },
      { text: 'I never share real-time location; I only tag venues retrospectively after leaving or keep geotags off', points: 10, riskDescription: 'Time-delayed sharing is the gold standard for personal physical security.' },
    ],
  },
  {
    id: 'fp-4',
    category: 'Privacy Settings',
    question: 'How often do you audit your followers and friend lists to remove unfamiliar accounts?',
    subtitle: 'Dormant or fake accounts on your friend list bypass your "Private Account" protections.',
    options: [
      { text: 'Never; I accept most incoming follow requests to grow my follower count', points: 0, riskDescription: 'Accepting unknown followers renders your private account settings largely meaningless.' },
      { text: 'Rarely (maybe once a year, or when I notice a weird profile)', points: 5, riskDescription: 'Unmonitored follower growth allows malicious sleeper accounts to persist.' },
      { text: 'Regularly (I only accept people I know in real life, and prune quarterly)', points: 10, riskDescription: 'Clean follower hygiene ensures your content remains restricted to trusted circles.' },
    ],
  },
  {
    id: 'fp-5',
    category: 'Account Security',
    question: 'How do you manage passwords across your social media and email accounts?',
    subtitle: 'Credential stuffing is the leading cause of unauthorized account takeovers.',
    options: [
      { text: 'I reuse the same 1 or 2 passwords across all my social apps and online accounts', points: 0, riskDescription: 'A single breach on any obscure forum instantly compromises all your primary social accounts.' },
      { text: 'I use variations of a favorite password (e.g., adding "!1" or the app name)', points: 4, riskDescription: 'Automated cracking dictionaries easily deduce predictable rule-based variations.' },
      { text: 'Every account has a unique, complex password stored in a password manager', points: 10, riskDescription: 'Zero password reuse insulates you against cascading breach damages.' },
    ],
  },
  {
    id: 'fp-6',
    category: 'Account Security',
    question: 'What form of Two-Factor Authentication (2FA) is active on your primary accounts?',
    subtitle: '2FA adds a secondary layer of cryptographic verification during logins.',
    options: [
      { text: 'None (I only log in with a password)', points: 0, riskDescription: 'Vulnerable to credential stuffing, keyloggers, and data breaches.' },
      { text: 'SMS Text Message OTP only', points: 6, riskDescription: 'SMS 2FA is better than nothing, but vulnerable to SIM-swap attacks and telecom interception.' },
      { text: 'Authenticator App (e.g. Google Authenticator, Duo) or Hardware Passkey', points: 10, riskDescription: 'Highest tier of consumer authentication security available.' },
    ],
  },
  {
    id: 'fp-7',
    category: 'Content History',
    question: 'Have you audited your old social media posts, tweets, or photos from 2+ years ago?',
    subtitle: 'Historical posts often contain outdated opinions, old friends, or accidental disclosures.',
    options: [
      { text: 'Never; all my past posts since high school or childhood are still public', points: 0, riskDescription: 'Past digital footprints frequently resurface to impact internships, scholarships, and hiring.' },
      { text: 'I used the "Limit Past Posts" tool or archived a few embarrassing photos', points: 6, riskDescription: 'Good initial cleanup; an annual manual sweep will catch lingering public tags.' },
      { text: 'Yes, I actively curate or archive historical content and restrict past visibility', points: 10, riskDescription: 'Active curation ensures your digital footprint accurately reflects your mature self.' },
    ],
  },
  {
    id: 'fp-8',
    category: 'Location & Sharing',
    question: 'What is your configuration for Snap Map (Snapchat) or Location Services on messaging apps?',
    subtitle: 'Background location beacons broadcast your real-time GPS coordinate changes.',
    options: [
      { text: 'My location is visible to "All Friends" or "Everyone" on Snap Map', points: 0, riskDescription: 'Continuous location broadcasts allow anyone to track your sleep times, travel, and home.' },
      { text: 'Visible only to a select few "Best Friends"', points: 5, riskDescription: 'Marginally safer, but phone compromise of a friend still exposes your live location.' },
      { text: 'Ghost Mode is permanently ON, or Location Services are set to "Never"', points: 10, riskDescription: 'Complete location autonomy and zero background location leakage.' },
    ],
  },
  {
    id: 'fp-9',
    category: 'Personal Data',
    question: 'When posting photos of celebrations, packages, or travels, what precaution do you take?',
    subtitle: 'Courier shipping slips, tickets, and keys contain scannable barcodes and addresses.',
    options: [
      { text: 'I post the full picture immediately without zooming in or editing', points: 0, riskDescription: 'Couriers, flight barcodes, and event badges contain encrypted passport and home data.' },
      { text: 'I sometimes blur my house number or face if I remember', points: 5, riskDescription: 'Partial redaction often misses high-resolution reflections or corner details.' },
      { text: 'I actively inspect background corners, redact barcodes/addresses, or avoid posting physical credentials', points: 10, riskDescription: 'Vigilant spatial awareness prevents unintentional data leaks.' },
    ],
  },
  {
    id: 'fp-10',
    category: 'Account Security',
    question: 'How do you respond when a known friend direct messages you asking for an urgent OTP or verification link?',
    subtitle: 'This is the signature hallmark of an account takeover scam.',
    options: [
      { text: 'I copy and paste the code/link to help them quickly', points: 0, riskDescription: 'You are surrendering access to your own account to a hacker who took over your friend\'s profile.' },
      { text: 'I hesitate, but if they insist it is an emergency, I might send it', points: 3, riskDescription: 'Hesitation without a strict "never send OTP" policy leaves you vulnerable to emotional pressure.' },
      { text: 'I NEVER share OTPs or reset links; I call them directly on their known phone number to verify', points: 10, riskDescription: 'Correct protocol. Zero exceptions for OTP transmission.' },
    ],
  },
  {
    id: 'fp-11',
    category: 'Privacy Settings',
    question: 'How often do you check and revoke permissions for third-party apps connected to your social accounts?',
    subtitle: 'Old quizzes, filters, games, and dating apps retain persistent API tokens.',
    options: [
      { text: 'I have never checked "Apps and Websites" in my settings', points: 0, riskDescription: 'Dozens of third-party companies may hold persistent read/write tokens to your profile data.' },
      { text: 'I check once in a while when an app causes trouble', points: 5, riskDescription: 'Residual OAuth tokens from years past remain active without your knowledge.' },
      { text: 'I regularly revoke access for apps I no longer actively use', points: 10, riskDescription: 'Principle of least privilege applied effectively to third-party integrations.' },
    ],
  },
  {
    id: 'fp-12',
    category: 'Personal Data',
    question: 'If you experienced identity impersonation or financial cyber fraud today, do you know the official reporting channel?',
    subtitle: 'Fast reporting drastically reduces financial and emotional harm.',
    options: [
      { text: 'No idea; I would probably just post a story on Instagram and hope it stops', points: 0, riskDescription: 'Lacks awareness of critical emergency mechanisms like helpline 1930 and cybercrime.gov.in.' },
      { text: 'I know I can report the account inside the app, but not sure about legal police reporting', points: 5, riskDescription: 'Platform reporting alone does not recover funds or trigger criminal investigations.' },
      { text: 'Yes: Platform in-app report for takedown, 1930 for financial cyber fraud, and cybercrime.gov.in for formal complaints', points: 10, riskDescription: 'Comprehensive incident response literacy across both platform and official legal routes.' },
    ],
  },
  {
    id: 'fp-13',
    category: 'Content History',
    question: 'How do you manage photo tagging by friends on Instagram and Facebook?',
    subtitle: 'Others can tag you in unflattering, compromising, or private situations.',
    options: [
      { text: 'Anyone can tag me, and tagged photos appear on my profile automatically', points: 0, riskDescription: 'Third parties control what appears on your primary public profile.' },
      { text: 'Only my friends can tag me, but it posts automatically', points: 5, riskDescription: 'Friends may post inappropriate or location-sensitive photos without your consent.' },
      { text: 'Manual Tag Review is enabled: I must personally approve any tag before it appears on my profile', points: 10, riskDescription: 'Total sovereignty over media linked to your digital identity.' },
    ],
  },
  {
    id: 'fp-14',
    category: 'Account Security',
    question: 'How is your account recovery information configured?',
    subtitle: 'Outdated recovery emails or lost phone numbers lead to permanent account loss.',
    options: [
      { text: 'My recovery email or phone number is outdated or tied to an old school email', points: 0, riskDescription: 'If locked out or attacked, you will have zero viable path to reclaim your identity.' },
      { text: 'Updated phone number, but haven\'t saved offline recovery backup codes', points: 5, riskDescription: 'Vulnerable if your physical phone is lost or SIM card is deactivated.' },
      { text: 'Current secure personal email, verified phone number, and printed backup codes stored safely', points: 10, riskDescription: 'Resilient recovery framework ensuring account restoration even during device loss.' },
    ],
  },
];
