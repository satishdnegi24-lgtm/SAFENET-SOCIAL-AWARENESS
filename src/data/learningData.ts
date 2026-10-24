export interface AcademyLesson {
  id: string;
  title: string;
  duration: string;
  category: string;
  summary: string;
  objectives: string[];
  content: {
    heading: string;
    text: string;
    keyTakeaway?: string;
  }[];
  interactiveChecklist?: string[];
  reflectionPrompt: string;
}

export const ACADEMY_LESSONS: AcademyLesson[] = [
  {
    id: 'lesson-1',
    title: 'The Anatomy of a Digital Footprint',
    duration: '6 min read',
    category: 'Digital Footprint',
    summary: 'Discover how every click, like, photo, search query, and sensor permission forms an enduring digital trail.',
    objectives: [
      'Distinguish between active and passive digital footprints',
      'Understand how recruiters, colleges, and adversaries analyze online trails',
      'Identify hidden metadata embedded in uploads and app permissions',
    ],
    content: [
      {
        heading: '1. What Is a Digital Footprint?',
        text: 'A digital footprint is the cumulative trail of data you create while using the internet. It encompasses the content you deliberately publish as well as the passive telemetry collected behind the scenes by platforms, browsers, and advertisers.',
        keyTakeaway: 'Your digital footprint is not just what you say about yourself—it is also what your digital habits reveal about your routines, connections, and vulnerabilities.',
      },
      {
        heading: '2. Active vs. Passive Footprints',
        text: 'An Active Footprint consists of intentional actions: public Instagram posts, comments on YouTube, tweets on X, LinkedIn profiles, and blog replies. A Passive Footprint is collected without your direct input: IP addresses, device models, browsing history, GPS location tags embedded in unscrubbed EXIF camera metadata, and Wi-Fi network beacon logs.',
        keyTakeaway: 'Even if you never post a photo, your passive footprint can reveal where you sleep, work, and spend leisure time unless privacy controls are actively configured.',
      },
      {
        heading: '3. The Persistence Myth and Reality',
        text: 'While search engines and platforms offer content deletion options, third-party scrapers, web archives (like the Wayback Machine), re-shares, and screenshots mean that public posts can persist indefinitely beyond your control.',
        keyTakeaway: 'Treat any public post as if it were projected onto a billboard in your neighborhood school or workplace.',
      },
    ],
    interactiveChecklist: [
      'Google your full name in quotation marks (e.g. "Full Name") and review image results',
      'Check if your primary email appears in known public breaches using legitimate notification services',
      'Review your tagged photos on Instagram and Facebook and remove unwanted tags',
    ],
    reflectionPrompt: 'If a prospective college admissions officer or future employer reviewed your last 3 years of social media history today, what impression would they form?',
  },
  {
    id: 'lesson-2',
    title: 'The Pre-Post Checklist & 6-Second Pause',
    duration: '5 min read',
    category: 'Responsible Posting',
    summary: 'Master the cognitive brake that prevents emotional oversharing, unintended geotagging, and future reputational harm.',
    objectives: [
      'Apply the "6-Second Pause" framework before publishing content',
      'Spot background sensitive details in photos (boarding passes, IDs, addresses, uniform badges)',
      'Recognize how context collapse distorts personal jokes online',
    ],
    content: [
      {
        heading: '1. The Cognitive Brake: 6-Second Pause',
        text: 'Most harmful social media posts occur in moments of emotional impulse—anger, euphoria, boredom, or peer pressure. Pausing for just six seconds activates your prefrontal cortex, helping you ask: "Why am I sharing this, and who can see it?"',
        keyTakeaway: 'Never post when emotionally overwhelmed. Sleep on controversial takes or personal disputes.',
      },
      {
        heading: '2. Background Hazards in Photos',
        text: 'Casual selfies frequently leak high-risk data: room keys showing hotel names, vehicle license plates, school uniforms with insignia, courier packages showing delivery addresses, computer screens with visible documents, or airline boarding passes (whose barcodes encode your full name, passport number, and travel itinerary).',
        keyTakeaway: 'Always inspect the background, corners, and reflections of a photo before hitting share.',
      },
      {
        heading: '3. Understanding "Context Collapse"',
        text: 'In person, you communicate differently with your close friends than with your grandparents or professor. On social media, all these audiences collapse into one single public feed. A sarcastic inside joke between friends can easily be read as offensive or menacing by strangers or future employers.',
        keyTakeaway: 'Assume your audience includes your strictest teacher, your future boss, and a stranger with bad intentions.',
      },
    ],
    interactiveChecklist: [
      'Inspect photo backgrounds for mail, badges, keys, or visible screens',
      'Verify that location geotagging is turned off for standard casual camera uploads',
      'Ask: "Would I be comfortable seeing this headline on a national newspaper?"',
    ],
    reflectionPrompt: 'Have you ever regretted a comment or photo within 24 hours of posting it? What triggered that regret?',
  },
  {
    id: 'lesson-3',
    title: 'Account Fortification & Credential Hygiene',
    duration: '7 min read',
    category: 'Account Security',
    summary: 'Build impenetrable defenses around your social media accounts with passkeys, authenticators, and password managers.',
    objectives: [
      'Understand password credential stuffing and why password reuse is fatal',
      'Configure Time-Based One-Time Password (TOTP) apps instead of insecure SMS 2FA',
      'Secure email accounts as the master key to all your social identities',
    ],
    content: [
      {
        heading: '1. The Real Threat: Credential Stuffing',
        text: 'Cybercriminals rarely guess individual passwords by hand. Instead, they obtain billions of compromised email/password combos from breach dumps and use automated bots to test them across Instagram, Snapchat, Google, and WhatsApp. If you use the same password on even two platforms, one compromised site unlocks the other.',
        keyTakeaway: 'Every online account must possess a completely unique, strong password or passkey.',
      },
      {
        heading: '2. Multi-Factor Authentication: Authenticator vs. SMS',
        text: 'Two-Factor Authentication (2FA) adds a mandatory second barrier. However, SMS-based 2FA is susceptible to SIM-swapping attacks and interception. Hardware security keys or Authenticator Apps (like Google Authenticator, Aegis, or Bitwarden TOTP) generate local codes without telecom network vulnerabilities.',
        keyTakeaway: 'Switch your 2FA from SMS to an Authenticator App on Instagram, WhatsApp, and Google today.',
      },
      {
        heading: '3. Your Email Is Your Master Key',
        text: 'If an adversary gains access to your primary email address, they can request password reset links for every social media account connected to it. Therefore, your email inbox requires the highest level of security: a dedicated random password and physical/app 2FA.',
        keyTakeaway: 'Fortify your recovery email first. It is the vault holding all your digital keys.',
      },
    ],
    interactiveChecklist: [
      'Enable Authenticator App 2FA on Instagram and WhatsApp',
      'Generate backup recovery codes and store them in a secure offline location',
      'Check and remove old unrecognized devices in account login activity tabs',
    ],
    reflectionPrompt: 'How many different services share your primary social media password right now?',
  },
  {
    id: 'lesson-4',
    title: 'Spotting Social Engineering & Phishing Tactics',
    duration: '6 min read',
    category: 'Phishing and Scams',
    summary: 'Learn how scammers manipulate human psychology—fear, curiosity, greed, and urgency—to bypass security.',
    objectives: [
      'Recognize common social engineering hooks: blue-tick verification lures, copyright strikes, and friend impersonations',
      'Deconstruct malicious URLs, homoglyph domains, and suspicious redirects',
      'Establish verification protocols when a friend asks for urgent money or OTPs',
    ],
    content: [
      {
        heading: '1. The Anatomy of Social Engineering',
        text: 'Attackers know that human emotion is easier to hack than software encryption. They craft messages designed to induce panic ("Your account will be terminated in 24 hours due to copyright violation") or excitement ("You won an exclusive brand influencer prize!").',
        keyTakeaway: 'Whenever a message insists on immediate, urgent action under threat of penalty or loss, pause immediately.',
      },
      {
        heading: '2. Homoglyphs and Lookalike Domains',
        text: 'Scammers register domain names that look identical to genuine platform portals at a glance—substituting letters (e.g., using "rn" to mimic "m", or "í" instead of "i"). They create pixel-perfect replicas of Instagram login screens to harvest your credentials.',
        keyTakeaway: 'Never tap login links sent in direct messages or emails. Open the platform app directly to check alerts.',
      },
      {
        heading: '3. The "Help Me Recover My Account" Trap',
        text: 'A common Instagram scam involves a compromised friend\'s account asking: "I need you to receive a link/code for me so I can recover my account." In reality, the attacker initiated a password reset on YOUR account and is tricking you into sending them your own OTP.',
        keyTakeaway: 'Never forward any link or SMS code you receive to another person, no matter who appears to be asking.',
      },
    ],
    interactiveChecklist: [
      'Always examine domain URLs in your browser address bar before typing passwords',
      'Verify urgent requests from friends via a separate phone call or voice note',
      'Never share 6-digit WhatsApp registration codes or Instagram reset links',
    ],
    reflectionPrompt: 'If a close school or college friend DM\'d you asking for Rs. 2,000 urgently because their UPI was down, how would you verify it was really them before paying?',
  },
  {
    id: 'lesson-5',
    title: 'Synthetic Media & Deepfake Literacy',
    duration: '7 min read',
    category: 'Deepfake Awareness',
    summary: 'Understand generative AI video, voice cloning extortion, and how to verify questionable media responsibly.',
    objectives: [
      'Identify visual and acoustic artifacts in synthetic video and cloned audio',
      'Understand the 5-step media verification workflow',
      'Know the legal remedies and emergency takedown protocols in India',
    ],
    content: [
      {
        heading: '1. How Deepfakes and Voice Clones Operate',
        text: 'Deepfakes use neural networks to swap faces or generate realistic video from a few sample photos. Voice cloning algorithms require as little as 3 seconds of clean audio from a public reel or voice note to synthesize a person saying anything with matching vocal timbre.',
        keyTakeaway: 'Hearing or seeing a familiar face on a screen is no longer definitive legal proof of authenticity.',
      },
      {
        heading: '2. Clues, Artifacts, and Their Limitations',
        text: 'Common clues include unnatural blinking rates, blurry edges around ears and jawlines, lighting inconsistencies between the face and background, mismatched teeth textures, and mechanical cadence in audio. However, as generative models improve, automated AI detectors become prone to false positives and negatives.',
        keyTakeaway: 'Never rely on an AI detector score alone. Independent cross-verification through established news sources is essential.',
      },
      {
        heading: '3. The 5-Step Verification Protocol',
        text: '1. Find the primary source: Who published it first? 2. Perform a reverse image search on video keyframes. 3. Look for official statements from the depicted individual. 4. Check reputable fact-checking platforms. 5. Never forward or retweet suspected synthetic media.',
        keyTakeaway: 'Refusing to share unverified sensational videos breaks the viral transmission chain.',
      },
    ],
    interactiveChecklist: [
      'Establish a family secret safety word for emergency distress verification',
      'Report non-consensual deepfakes immediately via cybercrime.gov.in and platform channels',
      'Preserve original URLs and file headers without re-encoding media',
    ],
    reflectionPrompt: 'How can you discuss digital media skepticism with younger siblings or parents who frequently forward sensational WhatsApp clips?',
  },
];

export const DOS_AND_DONTS = {
  dos: [
    {
      title: 'Use Unique Passwords & A Password Manager',
      category: 'Security',
      why: 'Prevents credential stuffing when third-party websites suffer security breaches.',
      example: 'Use a 16-character passphrase generated by a secure password manager rather than variations of your pet name.',
    },
    {
      title: 'Enable Authenticator-Based 2FA',
      category: 'Security',
      why: 'Stops 99% of automated account takeover attempts even if your password is leaked.',
      example: 'Set up Google Authenticator or Microsoft Authenticator on your Instagram and Google accounts.',
    },
    {
      title: 'Review Privacy & Audience Settings Monthly',
      category: 'Privacy',
      why: 'Social platforms regularly update default audience policies and add new location-sharing features.',
      example: 'Switch account visibility to Private and restrict Story sharing to "Close Friends".',
    },
    {
      title: 'Audit App Permissions Regularly',
      category: 'Privacy',
      why: 'Old third-party quizzes, filters, and games often retain persistent access to your contacts and data.',
      example: 'Navigate to "Apps and Websites" in Instagram/Facebook and revoke access for inactive services.',
    },
    {
      title: 'Pause 6 Seconds Before Posting',
      category: 'Habits',
      why: 'Breaks emotional impulsiveness and helps you spot background identifiers like badges, mail, and boarding passes.',
      example: 'Zoom into your selfie background to ensure no street signs, room numbers, or work documents are visible.',
    },
    {
      title: 'Report Impersonation & Harassment Immediately',
      category: 'Action',
      why: 'Platforms can quickly deactivate fake profiles when reported with clear evidence, preventing scams in your name.',
      example: 'Use the official platform "Report Account -> Pretending to be me" feature and notify your close friends.',
    },
  ],
  donts: [
    {
      title: 'Never Share One-Time Passwords (OTPs) or Reset Links',
      category: 'Security',
      why: 'OTPs are your final defense. No legitimate platform or friend ever needs your verification code.',
      example: 'If a friend messages saying "I sent an Instagram code to your phone by mistake, give it to me", it is a scam attempt.',
    },
    {
      title: 'Do Not Post Real-Time Location Check-Ins Unnecessarily',
      category: 'Privacy',
      why: 'Broadcasting your real-time whereabouts signals when your residence is empty and aids physical stalking.',
      example: 'Post vacation photos after returning home rather than tagging your live airport departure gate.',
    },
    {
      title: 'Never Click Unverified Links in Direct Messages or SMS',
      category: 'Security',
      why: 'Shortened or disguised URLs lead to phishing clones designed to harvest your session tokens.',
      example: 'Ignore messages claiming "You won an iPhone" or "Review copyright strike against your profile".',
    },
    {
      title: 'Do Not Accept Friend Requests from People You Cannot Verify',
      category: 'Safety',
      why: 'Scammers create accounts with stolen photos to scrape your private posts and target your friends list.',
      example: 'If an account has 2 photos, 0 mutual friends, and sends a DM immediately, decline and block.',
    },
    {
      title: 'Never Forward Unverified Rumors, Leaks, or Synthetic Clips',
      category: 'Citizenship',
      why: 'Amplifies misinformation, victimizes targets of non-consensual deepfakes, and can violate Indian cyber law.',
      example: 'Instead of forwarding a sensational video to group chats, verify on reputable fact-check sites first.',
    },
    {
      title: 'Do Not Engage in Public Feuds with Cyberbullies or Trolls',
      category: 'Wellbeing',
      why: 'Public arguments feed trolls, increase post visibility, and escalate abusive retaliation.',
      example: 'Mute, block, take timestamped screenshots for documentation, and report through official moderation channels.',
    },
  ],
};
