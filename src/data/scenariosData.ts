import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'scenario-a',
    code: 'SCN-01',
    title: 'The "Verified Creator / Prize Link" Direct Message',
    category: 'Phishing and Social Engineering',
    contextTag: 'Direct Message Phishing',
    situation:
      'You receive an Instagram DM from an account with the Instagram logo and handle "@meta_creators_badge_support". The message reads: "Congratulations! Your profile has been selected for the Official Verified Blue Checkmark Badge and a $500 Creator Grant. Click this link within 24 hours to claim: http://meta-creator-verify.io/claim or your eligibility will be cancelled."',
    choices: [
      {
        id: 'c1',
        text: 'Click the link immediately so you do not miss the 24-hour deadline, and enter your Instagram username and password on the page.',
        outcomeType: 'dangerous',
        feedback:
          'Critical Trap! The website is a malicious phishing replica designed to capture your login credentials. Entering your password hands full control of your account to attackers.',
        actionableTips: [
          'Meta never uses DMs to offer verification badges or grants.',
          'Notice the domain: "meta-creator-verify.io" is not an official instagram.com or meta.com address.',
          'Artificial urgency ("within 24 hours") is a psychological coercion technique.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Reply to the DM asking if they can send proof that they work for Meta, or send them a message on WhatsApp.',
        outcomeType: 'risky',
        feedback:
          'Engaging with scammers confirms that your account is active and receptive to communication. The attacker will simply produce fake badges or fabricated credentials to deceive you further.',
        actionableTips: [
          'Never negotiate or engage with suspicious accounts.',
          'Replying flags your profile as a responsive target for further spam.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Do not click the link. Take a screenshot for records, report the message as "Scam / Phishing" in-app, block the account, and verify official badge application paths inside the app settings.',
        outcomeType: 'safe',
        feedback:
          'Excellent decision! You recognized the artificial urgency and deceptive domain. By reporting without clicking, you protected your credentials and helped platform security flag the malicious domain.',
        actionableTips: [
          'Legitimate verification is applied for strictly through Settings -> Account type and tools -> Request verification.',
          'Reporting the DM helps block the phishing URL across the entire network.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Always treat direct messages offering free money, gifts, or verification as malicious phishing campaigns. Legitimate platforms communicate account matters through official notification centers, never through informal chat inboxes.',
    evidencePreservationGuide: [
      'Take a full uncropped screenshot of the chat showing the sender username and profile picture.',
      'Copy the link address without opening it in a browser, and report it to the platform.',
    ],
    whoToContact: [
      'Instagram In-App Report tool ("Report Account -> Scam or fraud")',
      'If you accidentally submitted credentials: Reset password immediately and visit instagram.com/hacked',
    ],
  },
  {
    id: 'scenario-b',
    code: 'SCN-02',
    title: 'The Charming Stranger Demanding Private Photos',
    category: 'Sextortion & Boundary Violations',
    contextTag: 'Private Contact Exploitation',
    situation:
      'A friendly profile with attractive photos follows you on Snapchat and strikes up an engaging conversation over three days. They share compliments and seem very relatable. Late on the fourth evening, they send a suggestive selfie and press you to send a private photo in return, saying: "Prove you trust me, it disappears in 5 seconds anyway."',
    choices: [
      {
        id: 'c1',
        text: 'Send a photo because Snapchat says snaps disappear, and you do not want to offend them or seem uncool.',
        outcomeType: 'dangerous',
        feedback:
          'Severe Risk! Disappearing media does not prevent permanent capture (via second phone cameras, external recording, or modified client software). This is the standard playbook for financial sextortion schemes.',
        actionableTips: [
          'Once a private image leaves your phone, you lose complete control over its distribution.',
          'Scammers frequently groom targets over days before demanding intimate material for blackmail.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Decline firmly, state your boundaries, but keep chatting about normal topics to stay friends.',
        outcomeType: 'risky',
        feedback:
          'While setting a boundary is positive, maintaining contact with someone who violates personal boundaries and asks for private images leaves you open to emotional manipulation and repeated coercion.',
        actionableTips: [
          'Predators will continue testing boundaries until they find an opening.',
          'True friends respect privacy without requiring compromising tests of trust.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Refuse immediately, capture evidence of the conversation handle, block the user, report the profile on Snapchat, and speak with a trusted adult or mentor.',
        outcomeType: 'safe',
        feedback:
          'Perfect response! You protected your personal integrity and dignity. By cutting off contact immediately, you stopped the grooming pipeline before extortion could begin.',
        actionableTips: [
          'Never allow anyone online to pressure you into sending compromising media.',
          'If threats or blackmail occur, never pay money; report to cybercrime.gov.in and seek trusted help immediately.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Digital intimacy with strangers online carries catastrophic extortion risks. Ephemeral apps do not guarantee privacy. Maintain strict boundaries and report coercive behavior immediately.',
    evidencePreservationGuide: [
      'Document the username, Snapcode, and timestamp of the conversation.',
      'If threats are made, preserve evidence before blocking.',
    ],
    whoToContact: [
      'Trusted parent, school counselor, or elder sibling',
      'National Cyber Crime Reporting Portal (cybercrime.gov.in - Women and Children cell)',
      'Childline 1098 (if a minor) or 1930 / local police',
    ],
  },
  {
    id: 'scenario-c',
    code: 'SCN-03',
    title: 'Targeted Cyberbullying & Coordinated Hostile Comments',
    category: 'Cyberbullying & Defamation',
    contextTag: 'Online Harassment',
    situation:
      'You post a video of your college dance performance. Several classmates and anonymous accounts begin flooding your comments with cruel remarks, mocking your appearance, and tagging others to join in. A group chat is formed where memes of your face are being circulated with defamatory captions.',
    choices: [
      {
        id: 'c1',
        text: 'Fire back in the comments with furious insults, tag the bullies\' parents, and post an angry video daring them to meet you in person.',
        outcomeType: 'dangerous',
        feedback:
          'Escalation Hazard! Retaliating with aggressive insults feeds the trolls, elevates the post\'s visibility in the algorithm, and creates recorded statements that could be used against you in school disciplinary proceedings.',
        actionableTips: [
          'Bullies seek an emotional reaction to sustain their harassment.',
          'Engaging in public brawls damages your own digital footprint.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Immediately delete your entire social media account and keep everything bottled up inside without telling anyone.',
        outcomeType: 'risky',
        feedback:
          'Isolation and silent suffering takes an immense emotional toll. Deleting your account also erases timestamped evidence of the harassment that would have held the perpetrators accountable.',
        actionableTips: [
          'You did nothing wrong; you do not deserve to be chased off platforms in secret.',
          'Always preserve evidence before altering account status.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Document unedited screenshots with timestamps and usernames, enable "Restrict" / filter hidden words, inform college authorities/counselor with evidence, and report offending profiles.',
        outcomeType: 'safe',
        feedback:
          'Outstanding and mature handling! You preserved the legal evidentiary chain while protecting your immediate mental peace with protective filtering tools.',
        actionableTips: [
          'Restrict mode hides their comments from public view without notifying them.',
          'Providing clean evidence to college disciplinary committees or internal grievance cells triggers concrete institutional protection.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Cyberbullying is an actionable offense. Never suffer in silence, and never stoop to reciprocal abuse. Document evidence, deploy platform protective shields, and escalate to authorities.',
    evidencePreservationGuide: [
      'Capture full screenshots displaying post URL, usernames, dates, and comment text.',
      'Export group chat logs showing who created the group and distributed memes.',
    ],
    whoToContact: [
      'College Anti-Ragging / Student Grievance Committee',
      'School principal or student counselor',
      'National Cyber Crime Reporting Portal (cybercrime.gov.in)',
    ],
  },
  {
    id: 'scenario-d',
    code: 'SCN-04',
    title: 'The Friend Impersonation / Fake Clone Profile',
    category: 'Identity Impersonation',
    contextTag: 'Profile Cloning Fraud',
    situation:
      'You notice a new account with your best friend\'s profile photo and bio, but with a slight variation in handle ("@rohit_sharma_01" instead of "@rohit_sharma"). The account sends you a DM saying: "Hey bro! My main account is temporarily blocked. Can you do me a quick favor and Google Pay Rs. 3,500 to this vendor? I will repay you tomorrow morning."',
    choices: [
      {
        id: 'c1',
        text: 'Transfer the Rs. 3,500 immediately because it\'s your best friend and you want to be supportive.',
        outcomeType: 'dangerous',
        feedback:
          'Financial Loss! The account is a cloned profile created by an impostor who scraped your friend\'s public photos and bio. Your money was sent directly to a scammer\'s disposable UPI wallet.',
        actionableTips: [
          'Scammers leverage emotional urgency between close friends to bypass skepticism.',
          'Never transfer money to a friend based on a new social media DM without calling them.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Ask the clone account to send you a selfie with today\'s newspaper to prove who they are.',
        outcomeType: 'risky',
        feedback:
          'Engaging in back-and-forth challenges wastes time while the impersonator continues messaging dozens of other mutual friends from your friend\'s follower list.',
        actionableTips: [
          'Verify through an independent, trusted channel (a phone call), not through the suspect channel.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Call your friend directly on their known phone number to alert them. Warn mutual friends on your story, report the fake account for impersonation, and submit its URL for takedown.',
        outcomeType: 'safe',
        feedback:
          'Exemplary action! By verifying out-of-band, you confirmed the fraud instantly. By alerting your friend and mutual contacts, you protected your entire community from financial harm.',
        actionableTips: [
          'The real friend can now submit a fast-track impersonation report with ID.',
          'A public warning story on your profile neutralizes the scammer\'s reach.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Cloned accounts rely on social trust to fleece friends and relatives. Always verify unusual financial requests by placing a direct voice call to the person\'s known number.',
    evidencePreservationGuide: [
      'Screenshot the fake profile, handle, bio, and the fraudulent payment QR/UPI handle.',
      'Copy the link to the cloned profile for reporting.',
    ],
    whoToContact: [
      'Your actual friend via standard phone call or in-person meeting',
      'Platform Impersonation Report form',
      'National Cyber Crime Helpline 1930 if anyone has transferred funds',
    ],
  },
  {
    id: 'scenario-e',
    code: 'SCN-05',
    title: 'Accidental Live Location Broadcast',
    category: 'Location Privacy & Geotagging',
    contextTag: 'Unintended Location Exposure',
    situation:
      'You are attending a private family wedding in another city. While posting a candid video of the celebrations on your public Instagram and Snapchat stories, you notice you left "Add Location" set to the exact resort address, and your Snap Map showed you arriving at the hotel room.',
    choices: [
      {
        id: 'c1',
        text: 'Leave the post up because everyone in your hometown already knows you are traveling, and deleting it looks silly.',
        outcomeType: 'dangerous',
        feedback:
          'High Risk! A public story broadcasting your exact hotel and event location tells local bad actors that your permanent residence back home is currently empty and pinpoints where you sleep tonight.',
        actionableTips: [
          'Burglars routinely monitor social media feeds for vacation announcements.',
          'Precise resort tags compromise the privacy of your entire family.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Just turn on airplane mode on your phone for an hour and assume the post will fade away.',
        outcomeType: 'risky',
        feedback:
          'Turning on airplane mode does not remove the already-published post from platform servers or followers\' cached feeds.',
        actionableTips: [
          'Active content remains visible to millions of users regardless of your phone\'s network status.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Immediately delete the public story with the geotag, turn on Ghost Mode in Snap Map, and repost celebration highlights only after returning home from the trip.',
        outcomeType: 'safe',
        feedback:
          'Superb remediation! You recognized the operational security lapse and eliminated the live signal immediately. Delayed posting is the most reliable travel safety habit.',
        actionableTips: [
          'Post-event sharing gives you the joy of documenting memories without live vulnerability.',
          'Ghost Mode ensures your map location stops broadcasting in the background.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Never broadcast live itineraries or current accommodation addresses publicly. Share travel memories retrospectively to safeguard both your temporary location and your empty home.',
    evidencePreservationGuide: [
      'Audit your current story viewers if any suspicious account inspected it before deletion.',
    ],
    whoToContact: [
      'Family members traveling with you to ensure they also practice delayed posting',
    ],
  },
  {
    id: 'scenario-f',
    code: 'SCN-06',
    title: 'The Unexpected File / "Is This You in This Video?"',
    category: 'Malware & Account Hijacking',
    contextTag: 'Malicious Attachment / Link',
    situation:
      'You receive a direct message from a classmate\'s account containing a download link labeled "exam_schedule_revised_final.apk" (or a link saying "omg is this you in this leaked video? look at this: http://bit.ly/tiktok-leak-2026"). You were not expecting this file from them.',
    choices: [
      {
        id: 'c1',
        text: 'Download and install the APK or tap the bit.ly link immediately because curiosity gets the better of you.',
        outcomeType: 'dangerous',
        feedback:
          'Device Compromise! An APK is an Android executable package; installing it can grant keylogger malware access to your SMS OTPs, camera, and stored passwords. The bit.ly link redirects to a credential harvester.',
        actionableTips: [
          'Legitimate exam schedules are distributed via official institution portals, not unsolicited APKs.',
          'The phrase "Is this you in this video?" is the oldest social media worm lure in existence.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Forward the message to five other study groups to ask them to open it and tell you if it works.',
        outcomeType: 'risky',
        feedback:
          'Harmful Amplification! Forwarding an unverified link or APK acts as an unwitting vector, infecting your friends and classmates with malware.',
        actionableTips: [
          'Never redistribute suspected malicious files to others.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Do not tap or install the file. Inform your classmate through another channel that their account is likely sending automated spam, report the message, and delete the thread.',
        outcomeType: 'safe',
        feedback:
          'Flawless vigilance! You identified the classic malware delivery pattern and prevented a catastrophic device takeover. Alerting your peer helps them remediate their hijacked session.',
        actionableTips: [
          'Never install APK files received via direct messaging.',
          'Reputable school notifications never require third-party APK downloads.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Unsolicited executables (APKs, .exe, macro-enabled files) and sensational curiosity hooks are primary vectors for spyware and ransomware. Verify directly with the sender before touching any attachment.',
    evidencePreservationGuide: [
      'Take a screenshot of the message containing the file name and URL.',
      'Do NOT run or execute the file.',
    ],
    whoToContact: [
      'Classmate via voice call or in-person alert',
      'Platform spam reporting mechanism',
    ],
  },
  {
    id: 'scenario-g',
    code: 'SCN-07',
    title: 'A Manipulated Deepfake Video Spreading in School / College',
    category: 'Deepfake Awareness & Harassment',
    contextTag: 'Synthetic Defamation',
    situation:
      'A synthetic video appears in your student batch WhatsApp groups showing a fellow student\'s face realistically swapped onto an illicit, compromising video clip. Some students are laughing and forwarding it rapidly across other college groups, while the targeted student is visibly in tears and devastated.',
    choices: [
      {
        id: 'c1',
        text: 'Forward it to your close friends group to ask "Do you think this is a deepfake or did she really do this?"',
        outcomeType: 'dangerous',
        feedback:
          'Complicity in Crime! Forwarding non-consensual synthetic imagery—even out of curiosity or doubt—perpetuates severe victim harm and constitutes an offense under Section 67/66E of the Information Technology Act.',
        actionableTips: [
          'Every forward multiplies the victim\'s psychological trauma.',
          'Indian cyber laws hold distributors of non-consensual intimate or synthetic content legally accountable.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Stay silent and ignore the messages completely because you do not want to get involved in student drama.',
        outcomeType: 'risky',
        feedback:
          'Passivity allows the viral defamation to spread unchecked. While avoiding forwarding is good, failing to support the victim or notify group admins allows severe harm to escalate.',
        actionableTips: [
          'Active digital citizenship requires speaking up against harassment and helping victims access reporting channels.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Do not forward the clip. Tell the group firmly that creating and distributing synthetic media is illegal. Reach out privately to support the student, preserve original links/numbers, and help them file a report with college authorities and cybercrime.gov.in.',
        outcomeType: 'safe',
        feedback:
          'Courageous, ethical, and legally sound! You broke the viral loop, supported a vulnerable peer, and directed the incident toward institutional and legal redress.',
        actionableTips: [
          'Group admins have a legal and moral responsibility to remove defamatory content and remove perpetrators.',
          'Prompt reporting to cybercrime.gov.in can trigger fast-track legal takedowns under Indian IT Rules.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'Synthetic intimate media causes acute psychological and reputational devastation. Never participate in viral spread. Stand up for the victim, preserve evidence, and direct the case to official cybercrime authorities.',
    evidencePreservationGuide: [
      'Record the phone numbers of accounts circulating the file in group chats.',
      'Save exact message timestamps and group export without redistributing the video itself.',
    ],
    whoToContact: [
      'Targeted student (with compassionate support and reporting guidance)',
      'College Internal Complaints Committee (ICC) / Principal',
      'National Cyber Crime Reporting Portal (cybercrime.gov.in) under Cyber Crime against Women',
    ],
  },
  {
    id: 'scenario-h',
    code: 'SCN-08',
    title: 'Suspecting Your Social Media Account Has Been Compromised',
    category: 'Account Takeover & Incident Response',
    contextTag: 'Active Breach Response',
    situation:
      'You open Instagram and notice that your bio has been changed to a strange cryptocurrency promotion link, and several of your friends message you on WhatsApp asking why you are sending them weird investment DMs at 3:00 AM. You still have access to the app on your phone right now.',
    choices: [
      {
        id: 'c1',
        text: 'Just change the bio back to your normal text and continue browsing as usual.',
        outcomeType: 'dangerous',
        feedback:
          'Ineffective! Merely editing the bio leaves the attacker\'s active session untouched. The attacker still holds your authentication tokens and will continue messaging your friends and lock you out permanently once they notice.',
        actionableTips: [
          'The attacker still has your password or an active session token.',
          'They can change your registered email address at any moment.',
        ],
        isRecommended: false,
      },
      {
        id: 'c2',
        text: 'Post an angry story shouting at the hacker to leave your account alone, then log out of your phone.',
        outcomeType: 'risky',
        feedback:
          'Logging out without resetting your credentials or terminating active sessions ensures you lose access to your own account while the hacker remains logged in.',
        actionableTips: [
          'Never surrender your only active session until security credentials have been updated.',
        ],
        isRecommended: false,
      },
      {
        id: 'c3',
        text: 'Immediately change your password, check and verify your recovery email/phone, select "Log out of all other devices", enable Authenticator App 2FA, and post a warning on your story.',
        outcomeType: 'safe',
        feedback:
          'Textbook Incident Response! Changing the password invalidates active session tokens, checking recovery info ensures the hacker cannot reset it back, and 2FA locks the door against re-entry.',
        actionableTips: [
          'Always verify Accounts Center -> Contact Info to make sure your email was not altered.',
          'Generating new 2FA backup codes seals your account.',
        ],
        isRecommended: true,
      },
    ],
    safeResolution:
      'In a suspected account takeover, act swiftly: change master credentials, verify recovery communication channels, terminate all concurrent sessions, and erect multi-factor authentication.',
    evidencePreservationGuide: [
      'Take a screenshot of the "Login Activity / Where you\'re logged in" list showing the unauthorized device model and IP/city before revoking it.',
    ],
    whoToContact: [
      'Platform Security Center (instagram.com/hacked or facebook.com/hacked)',
      'Alert mutual friends via an alternative channel (phone call or WhatsApp story)',
    ],
  },
];
