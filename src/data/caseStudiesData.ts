import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-rashmika-deepfake',
    title: 'The Rashmika Mandanna Synthetic Deepfake Case (2023–2024)',
    dateOrTimeline: 'November 2023 – January 2024',
    topic: 'Non-Consensual Synthetic Media & Legal Accountability',
    verifiedStatus: 'Verified by Law Enforcement / Government',
    background:
      'In early November 2023, a video surfaced and rapidly circulated across Instagram, X, and WhatsApp depicting actress Rashmika Mandanna entering an elevator in revealing clothing. The video triggered widespread public outrage, national debate on women\'s digital safety, and direct intervention from Indian authorities.',
    whatSourcesConfirm: [
      'Digital forensics and fact-checkers confirmed the original video was actually filmed and posted on Instagram by British-Indian fashion influencer Zara Patel in October 2023. An artificial intelligence face-swap model was used to superimpose the actress\'s face onto Patel\'s body.',
      'On November 10, 2023, the Delhi Police Intelligence Fusion and Strategic Operations (IFSO) unit registered a First Information Report (FIR) under Sections 465 (forgery) and 469 (forgery for purpose of harming reputation) of the Indian Penal Code, along with Sections 66C (identity theft) and 66E (violation of privacy) of the Information Technology Act, 2000.',
      'In January 2024, Delhi Police tracked and arrested the primary suspect, a 24-year-old engineering graduate from Guntur, Andhra Pradesh. Law enforcement reported that the suspect confessed to creating and distributing the deepfake video to artificially inflate followers on his personal social media fan page.',
      'The Ministry of Electronics and Information Technology (MeitY) issued multiple binding advisories under the IT Rules 2021, directing social media intermediaries to identify and remove non-consensual deepfakes within 24 to 36 hours of receipt of complaints, warning of loss of platform safe-harbor protections.',
    ],
    whatRemainsUncertain: [
      'The exact extent to which the deepfake model was distributed across underground peer-to-peer networks before the original post was deleted remains impossible to quantify.',
      'The effectiveness of automated platform AI filters in detecting slightly modified, re-compressed re-uploads of the video across encrypted group chats.',
    ],
    realWorldImpact:
      'The case served as a watershed moment in Indian cyber jurisprudence. It demonstrated that creating non-consensual synthetic media is a serious punishable criminal offense with real police arrests, rather than an anonymous online prank. It elevated public awareness regarding digital watermarks, consent, and platform accountability.',
    keySafetyLessons: [
      'Digital media can no longer be accepted as authentic based on visual appearance alone.',
      'Forwarding synthetic videos—even to ask friends "Is this real?"—multiplies victim trauma and violates Section 67 of the IT Act.',
      'Victims of synthetic defamation have immediate legal recourse through law enforcement cyber cells and designated platform grievance officers.',
    ],
    preventiveMeasures: [
      'Do not forward unverified viral clips depicting recognizable individuals in compromising situations.',
      'Conduct reverse image and keyframe searches using tools like Google Lens or InVID to trace source footage.',
      'Report synthetic imagery immediately to cybercrime.gov.in under the Cyber Crime against Women category and to platform integrity teams.',
    ],
    sources: [
      { publisher: 'Press Information Bureau (PIB), Government of India', title: 'MeitY Issues Strict Advisory to Social Media Platforms on Deepfakes and Misinformation', url: 'https://pib.gov.in' },
      { publisher: 'The Hindu', title: 'Delhi Police arrest key accused in Rashmika Mandanna deepfake case from Andhra Pradesh', url: 'https://www.thehindu.com' },
      { publisher: 'NDTV', title: 'How Cops Caught Mastermind Behind Rashmika Mandanna\'s Deepfake Video', url: 'https://www.ndtv.com' },
    ],
  },
  {
    id: 'case-voice-cloning-extortion',
    title: 'AI Voice Cloning & Simulated Emergency Kidnapping Scams',
    dateOrTimeline: '2023 – 2026 Ongoing Investigation',
    topic: 'Vocal Synthesis & Psychological Extortion',
    verifiedStatus: 'Verified by Law Enforcement / Government',
    background:
      'Cybercrime police departments across major Indian metropolises (including Hyderabad, Bengaluru, and Delhi) issued widespread public advisories regarding a novel wave of psychological extortion: scammers using generative AI voice cloning to impersonate distressed family members.',
    whatSourcesConfirm: [
      'Police case records confirm that criminals harvest 3 to 10 seconds of clear speech from public Instagram reels, YouTube videos, TikTok clips, or podcasts featuring college students and young adults.',
      'Using consumer-grade generative audio models, the perpetrators synthesize the individual\'s unique vocal tone, inflection, and cadence, making it appear that they are screaming or crying.',
      'The scammers place phone calls to parents, claiming their child has been arrested in a narcotics raid, involved in a fatal road collision, or kidnapped, demanding immediate UPI or crypto transfers within 15 minutes while forbidding parents from hanging up.',
      'Multiple victims across Indian states reported transferring sums between Rs. 50,000 to Rs. 5,00,000 out of intense parental panic before realizing their child was safely sitting in a college classroom.',
    ],
    whatRemainsUncertain: [
      'Whether the calling networks operate from localized call centers or offshore transnational cyber syndicates using spoofed VoIP gateways.',
      'The proportion of calls that use real-time AI voice generation versus pre-recorded generic audio clips combined with heavy background crying sounds.',
    ],
    realWorldImpact:
      'Highlights how generative artificial intelligence turns ordinary personal social media posts (like casual vocal reels) into attack intelligence for high-pressure social engineering.',
    keySafetyLessons: [
      'High-pressure urgency ("Do not hang up the call or your child will be hurt") is the universal hallmark of extortion fraud.',
      'Hearing a loved one\'s voice over an unknown phone number is no longer proof of their physical presence or safety.',
      'Emotional pause: Take a deep breath, disengage, and independently verify.',
    ],
    preventiveMeasures: [
      'Establish a "Family Emergency Code Word" known only to immediate family members that must be recited to authenticate distress.',
      'Always disconnect the call and immediately dial your family member on their known primary phone number.',
      'Call the child\'s school, college hostel warden, or classmate directly if their phone is switched off.',
      'Report the calling number immediately to the National Cyber Crime Helpline at 1930.',
    ],
    sources: [
      { publisher: 'Telangana Cyber Security Bureau (TGCSB)', title: 'Advisory on AI Voice Cloning Extortion and Digital Arrest Scams', url: 'https://tspolice.gov.in' },
      { publisher: 'Indian Express', title: 'How scammers use AI voice cloning to dupe families with fake distress calls', url: 'https://indianexpress.com' },
    ],
  },
  {
    id: 'case-telegram-task-fraud',
    title: 'The "Work-From-Home / YouTube Like & Earn" Social Media Fraud',
    dateOrTimeline: '2023 – 2026 Cross-State Enforcement',
    topic: 'Financial Cyber Fraud & Mule Account Networks',
    verifiedStatus: 'Verified by Law Enforcement / Government',
    background:
      'Tens of thousands of students and young adults across India were targeted by massive automated messaging campaigns on WhatsApp and Telegram, promising lucrative daily incomes of Rs. 2,000 to Rs. 5,000 simply by "liking" YouTube videos, reviewing hotels on Google Maps, or following Instagram influencers.',
    whatSourcesConfirm: [
      'Law enforcement investigations by the Indian Cyber Crime Coordination Centre (I4C) and state police units confirmed that scammers initially pay small legitimate amounts (e.g. Rs. 150 to Rs. 500) to victims\' UPI accounts to establish credibility and trust.',
      'Once trust is cemented, victims are added to private Telegram groups filled with dozens of "success stories" (actually operated by bots or syndicate accomplices).',
      'Victims are then pressured to participate in "Pre-paid Crypto Tasks" or "Merchant Orders", requiring them to deposit increasing sums of money with the promise of guaranteed 30% profits.',
      'When victims attempt to withdraw their supposed earnings, the platform claims their funds are "frozen due to a tax error" and demands further deposits, leading to catastrophic individual losses exceeding tens of lakhs.',
      'In coordinated operations, Indian police froze thousands of mule bank accounts and recovered portions of funds reported within the first two hours.',
    ],
    whatRemainsUncertain: [
      'The total monetary scale of funds routed abroad through illegal Hawala channels and cryptocurrency mixers before freezing orders could be served.',
    ],
    realWorldImpact:
      'Exposed how scammers exploit economic aspirations and financial vulnerability among college students, illustrating that apparent "easy money" on social platforms is nearly always a criminal trap.',
    keySafetyLessons: [
      'No legitimate corporation pays substantial wages for tapping "Like" on social media videos.',
      'Initial small payouts are calculated psychological investments by the scammer to lower your defenses.',
      'Any scheme requiring you to deposit money in order to withdraw your own earned money is 100% fraudulent.',
    ],
    preventiveMeasures: [
      'Never respond to unsolicited WhatsApp job offers from international numbers (+84, +62, +254, etc.).',
      'Never transfer money to participate in tasks, investment schemes, or freelance clearance fees.',
      'If you have transferred money, dial 1930 immediately within the first 2 hours to freeze the recipient bank accounts.',
    ],
    sources: [
      { publisher: 'Ministry of Home Affairs (MHA) / I4C', title: 'Advisory on Part-Time Job Scams and Illegal Digital Lending Apps', url: 'https://cybercrime.gov.in' },
      { publisher: 'Times of India', title: 'Cyber Cell uncovers multi-crore Telegram task scam ring, freezes hundreds of bank accounts', url: 'https://timesofindia.indiatimes.com' },
    ],
  },
  {
    id: 'case-matrimonial-photo-theft',
    title: 'Public Profile Photo Harvesting & Matrimonial Impersonation',
    dateOrTimeline: '2024 – 2026 Judicial & Police Records',
    topic: 'Identity Harvesting & Romance / Matrimonial Exploitation',
    verifiedStatus: 'Investigative Fact-Check Confirmed',
    background:
      'Investigative reports and cyber police charge-sheets across major urban centers revealed criminal rings harvesting full photo galleries, vacation pictures, and lifestyle snapshots from public Instagram and LinkedIn profiles of young professionals.',
    whatSourcesConfirm: [
      'Scammers use scraped high-resolution photographs to create fabricated identities on matrimonial and dating portals, posing as doctors, defense personnel, or NRIs working abroad.',
      'The impostors build intimate emotional relationships over weeks without ever agreeing to in-person video calls (claiming poor military connection or bereavement).',
      'Eventually, the scammer claims to have shipped expensive jewelry or luxury gifts that have been "detained by customs at Delhi/Mumbai airport", with an accomplice calling posing as a customs official demanding clearance duties.',
      'The real individuals whose photographs were stolen only discovered their images were being weaponized when contacted by devastated victims who had lost significant savings.',
    ],
    whatRemainsUncertain: [
      'The number of dormant public profiles currently being scraped by automated bots across social networks to populate fraudulent profiles.',
    ],
    realWorldImpact:
      'Highlights the double-edged danger of an unrestricted digital footprint: the innocent person whose photos are scraped suffers severe reputational distress and legal interrogation, while the targeted victim suffers massive financial and emotional trauma.',
    keySafetyLessons: [
      'Public photos are easily scraped, stored, and weaponized by third parties for criminal personas.',
      'Never send funds, custom clearance fees, or gifts to anyone you have only met online.',
      'Insist on live, verified video calls before establishing serious personal or matrimonial commitments.',
    ],
    preventiveMeasures: [
      'Set personal social media profiles to Private mode so your personal photos cannot be downloaded in bulk.',
      'Perform periodic reverse-image searches on your primary profile photos to check if your likeness is being mirrored.',
      'Verify prospective online suitors through independent background channels, official workplace directories, and in-person meetings.',
    ],
    sources: [
      { publisher: 'National Crime Records Bureau (NCRB)', title: 'Crime in India Report: Cyber Crimes Against Women and Financial Fraud Trends', url: 'https://ncrb.gov.in' },
      { publisher: 'The Quint', title: 'Stolen Faces: How Scammers Scrape Public Social Media Photos to Defraud Suitors', url: 'https://www.thequint.com' },
    ],
  },
];
