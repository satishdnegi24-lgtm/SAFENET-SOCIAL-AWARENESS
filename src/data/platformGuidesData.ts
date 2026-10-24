import { PlatformGuide } from '../types';

export const PLATFORM_GUIDES: PlatformGuide[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    icon: 'Instagram',
    tagline: 'Lock down profile visibility, message controls, and story audience settings.',
    lastReviewed: 'October 2026',
    officialHelpUrl: 'https://help.instagram.com',
    sections: [
      {
        title: '1. Account Privacy & Profile Visibility',
        description: 'Ensure only approved followers can see your posts, stories, and followers list.',
        steps: [
          'Open Instagram and tap your Profile icon in the bottom right.',
          'Tap the Menu (three horizontal lines) in the top right -> Settings and privacy.',
          'Scroll down to "Who can see your content" and tap "Account privacy".',
          'Toggle "Private account" ON. (Business/Creator accounts must first switch back to Personal to enable private mode).',
        ],
        officialTip: 'Setting your account to Private does not affect existing followers. Audit your follower list to remove anyone unfamiliar.',
      },
      {
        title: '2. Location Sharing & Geotags',
        description: 'Prevent automatic background location tracking and avoid disclosing your exact whereabouts.',
        steps: [
          'On iOS: Settings -> Instagram -> Location -> Change to "Never" or "While Using the App" and toggle "Precise Location" OFF.',
          'On Android: Settings -> Apps -> Instagram -> Permissions -> Location -> Select "Don\'t allow" or "Ask every time".',
          'When creating a post or reel, avoid tapping "Add location" for private places (home, school, gym).',
        ],
        officialTip: 'If sharing travel photos, wait until you have left the venue or arrived back home before adding location tags.',
      },
      {
        title: '3. Message Requests & Interaction Controls',
        description: 'Filter out unsolicited DMs, offensive comments, and group chat invitations.',
        steps: [
          'Go to Settings and privacy -> Messages and story replies -> Message controls.',
          'Under "Potential connections" and "Others on Instagram", set requests to "Don\'t receive requests".',
          'Under "Who can add you to groups", select "Only people you follow on Instagram".',
          'Go to "Hidden Words" -> Toggle "Hide comments", "Advanced comment filtering", and "Hide message requests" ON.',
        ],
      },
      {
        title: '4. Blocking, Restricting & Reporting',
        description: 'Discreetly isolate abusive users or escalate malicious accounts to Meta moderators.',
        steps: [
          'To Restrict without them knowing: On their profile, tap the three dots (...) -> Restrict. Their comments will only be visible to them unless you approve them, and they cannot see when you are active or read their DMs.',
          'To Block: On their profile, tap (...) -> Block -> Select "Block [user] and other accounts they may have or create".',
          'To Report: Tap (...) -> Report -> Select specific reason (e.g. "It\'s spam", "Hate speech or symbols", or "Bullying or harassment").',
        ],
      },
      {
        title: '5. Impersonation & Fake Profile Takedown',
        description: 'How to report accounts using your name, photos, or likeness.',
        steps: [
          'Open the fake account profile -> tap the three dots (...) in top right -> Report.',
          'Select "Report Account" -> "It\'s pretending to be someone else" -> "Me" or "Someone I know".',
          'If the account is not taken down promptly, visit the official Meta Impersonation Form at help.instagram.com and submit government ID verification.',
        ],
      },
      {
        title: '6. Two-Factor Authentication & Login Activity',
        description: 'Safeguard your credentials against password breaches and credential stuffing.',
        steps: [
          'Go to Settings and privacy -> Accounts Center -> Password and security.',
          'Tap "Two-factor authentication" -> Select your Instagram account.',
          'Choose "Authentication App (recommended)" and connect Google Authenticator, Duo, or Microsoft Authenticator.',
          'Save your Backup Codes in a safe offline location.',
          'Review "Where you\'re logged in" to terminate any unrecognized desktop or mobile sessions.',
        ],
      },
      {
        title: '7. Hacked Account Recovery Procedure',
        description: 'Official recovery steps if you have been locked out of your account.',
        steps: [
          'On the login screen, tap "Get help logging in" (Android) or "Forgot password?" (iOS).',
          'Enter your username, email, or phone number -> Tap "Can\'t reset your password?".',
          'Follow the on-screen prompts to request a login link or submit a video selfie verification to prove your identity.',
          'Check your email inbox for official messages from security@mail.instagram.com.',
        ],
      },
    ],
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    icon: 'Facebook',
    tagline: 'Manage timeline tagging, search engine indexing, and past post audience limits.',
    lastReviewed: 'October 2026',
    officialHelpUrl: 'https://www.facebook.com/help',
    sections: [
      {
        title: '1. Privacy Checkup & Audience Selector',
        description: 'Ensure your personal posts and friend list are restricted from public viewers.',
        steps: [
          'Click your profile photo in top right -> Settings & privacy -> Privacy Checkup.',
          'Select "Who can see what you share" -> Review your email, birthday, hometown, and friends list visibility -> Set to "Friends" or "Only me".',
          'Set "Future posts" default audience to "Friends".',
          'Click "Limit Past Posts" to batch-convert all previous public posts to "Friends only" in one click.',
        ],
        officialTip: 'Limiting past posts cannot be undone in bulk. Individual posts must be manually re-opened if you later want them public.',
      },
      {
        title: '2. Search Engine Indexing & Profile Linking',
        description: 'Stop Google and Bing from displaying your Facebook profile in public web searches.',
        steps: [
          'Go to Settings & privacy -> Settings -> Audience and visibility -> How people find and contact you.',
          'Find "Do you want search engines outside of Facebook to link to your profile?".',
          'Click Edit and uncheck "Allow search engines outside of Facebook to link to your profile".',
          'Set "Who can look you up using the email address/phone number you provided" to "Only me".',
        ],
      },
      {
        title: '3. Profile Tagging & Review Mode',
        description: 'Stop others from tagging you in photos or posting on your timeline without your prior consent.',
        steps: [
          'Go to Settings -> Audience and visibility -> Profile and tagging.',
          'Set "Who can post on your profile?" to "Only me" or "Friends".',
          'Toggle "Review posts that you\'re tagged in before the post appears on your profile" to ON.',
          'Toggle "Review tags people add to your posts before the tags appear on Facebook" to ON.',
        ],
      },
      {
        title: '4. Two-Factor Authentication & Authorized Logins',
        description: 'Harden your account with cryptographic multi-factor protection.',
        steps: [
          'Go to Accounts Center -> Password and security -> Two-factor authentication.',
          'Select your Facebook account -> Choose Authenticator app.',
          'Scan the QR code with your authenticator app and enter the 6-digit verification code.',
          'Check "Authorized logins" and delete any devices you do not currently recognize.',
        ],
      },
      {
        title: '5. Reporting Impersonation & Recovering Compromised Accounts',
        description: 'Official recourse for fake profiles and account lockouts.',
        steps: [
          'To report a profile: Go to the profile -> Click (...) below cover photo -> Report profile -> Fake account / Pretending to be someone.',
          'If hacked: Visit the official Facebook recovery portal at facebook.com/hacked from a previously trusted browser or device.',
          'Follow the guided identity verification prompts using your phone number or trusted email.',
        ],
      },
    ],
  },
  {
    id: 'snapchat',
    platform: 'Snapchat',
    icon: 'Snapchat',
    tagline: 'Master Ghost Mode, Quick Add visibility, and ephemeral media privacy.',
    lastReviewed: 'October 2026',
    officialHelpUrl: 'https://support.snapchat.com',
    sections: [
      {
        title: '1. Ghost Mode on Snap Map',
        description: 'Prevent your precise real-time geographic location from broadcasting to contacts.',
        steps: [
          'Open Snapchat and swipe right to the Snap Map screen.',
          'Tap the Settings gear icon in the top right corner of the map.',
          'Toggle "Ghost Mode" to ON -> Select "Until Turned Off".',
          'Alternatively, select "Hide My Live Location" to stop continuous background GPS updates.',
        ],
        officialTip: 'Even with Ghost Mode on, Snaps submitted to Spotlight or Our Story may display general location tags if you chose to attach them.',
      },
      {
        title: '2. "Contact Me" and Story Audience Restrictions',
        description: 'Restrict who can send Snaps, chats, and view your Story.',
        steps: [
          'Tap your Bitmoji in the top left -> Settings gear icon in top right.',
          'Scroll down to "Privacy Controls".',
          'Tap "Contact Me" -> Select "Friends and Contacts" or "Friends".',
          'Tap "View My Story" -> Choose "Custom" or "My Friends" (never "Everyone").',
          'Tap "See Me in Quick Add" -> Toggle OFF to stop your account from being recommended to strangers in your area.',
        ],
      },
      {
        title: '3. Screenshot Notifications and Ephemeral Illusions',
        description: 'Why you should never treat disappearing Snaps as permanently deleted.',
        steps: [
          'Understand that while Snapchat notifies you if someone takes a screenshot, third-party screen recorders, external cameras, or second phones can record screens without notification.',
          'Never send sensitive images under the assumption that 10-second timers prevent permanent copies.',
          'Use "My Eyes Only" inside Memories to store personal photos behind a separate 4-digit passcode.',
        ],
      },
      {
        title: '4. Two-Factor Authentication & Blocking',
        description: 'Securing login sessions and removing intrusive contacts.',
        steps: [
          'Go to Settings -> Two-Factor Authentication -> Tap "Continue" -> Choose "Authenticator App".',
          'To block a user: Long press their name in your Chat feed -> Manage Friendship -> Block.',
          'To report content: Press and hold on the Snap or Story -> Tap the flag / Report icon -> Specify reason.',
        ],
      },
    ],
  },
  {
    id: 'twitter',
    platform: 'X, formerly Twitter',
    icon: 'Twitter',
    tagline: 'Protect your posts, filter low-quality interactions, and manage direct messages.',
    lastReviewed: 'October 2026',
    officialHelpUrl: 'https://help.twitter.com',
    sections: [
      {
        title: '1. Protect Your Posts (Private Account)',
        description: 'Make your posts and media visible only to approved followers.',
        steps: [
          'Click "More" in the side navigation (or tap your profile avatar on mobile) -> Settings and privacy.',
          'Select "Privacy and safety" -> "Audience, media and tagging".',
          'Check the box for "Protect your posts".',
          'Set "Photo tagging" to "Only people you follow can tag you" or "Off".',
        ],
        officialTip: 'When posts are protected, other users cannot retweet or quote your posts.',
      },
      {
        title: '2. Direct Message Controls & Safety Filters',
        description: 'Filter out spam messages and prevent unsolicited DMs from unverified accounts.',
        steps: [
          'Go to Settings and privacy -> Privacy and safety -> Direct messages.',
          'Under "Allow message requests from", select "No one" or "Only people you follow".',
          'Toggle "Filter low-quality messages" ON to hide automated spam in a separate folder.',
        ],
      },
      {
        title: '3. Location Sharing & Discoverability',
        description: 'Prevent tweet geotagging and contact book synchronization.',
        steps: [
          'Go to Settings and privacy -> Privacy and safety -> Location information.',
          'Uncheck "Add location information to your posts".',
          'Tap "Delete location data" to scrub geographic coordinates from all historical tweets.',
          'Go to "Discoverability and contacts" -> Uncheck "Let people who have your email / phone number find you on X".',
        ],
      },
      {
        title: '4. Two-Factor Authentication & Security Keys',
        description: 'Enable app or hardware-based multi-factor authentication.',
        steps: [
          'Go to Settings and privacy -> Security and account access -> Security -> Two-factor authentication.',
          'Select "Authentication app" or "Security key".',
          'Scan the QR code with your authenticator app and save backup codes.',
        ],
      },
      {
        title: '5. Reporting Hate Speech, Doxxing & Impersonation',
        description: 'Report accounts sharing private info or impersonating individuals.',
        steps: [
          'Tap the three dots (...) on the offending tweet or profile.',
          'Select "Report post" / "Report @handle" -> Choose "Privacy" (for sharing private information / doxxing) or "Abuse and harassment".',
          'Provide direct links to evidence and submit.',
        ],
      },
    ],
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    icon: 'WhatsApp',
    tagline: 'Secure end-to-end encrypted chats, group invitations, and privacy statuses.',
    lastReviewed: 'October 2026',
    officialHelpUrl: 'https://faq.whatsapp.com',
    sections: [
      {
        title: '1. Profile Info, About, and Last Seen Privacy',
        description: 'Stop strangers from inspecting your profile picture, online activity, and status.',
        steps: [
          'Open WhatsApp -> Settings (gear icon or three dots in top right) -> Privacy.',
          'Tap "Last Seen & Online" -> Set to "My Contacts" or "Nobody", and match online status to "Same as last seen".',
          'Tap "Profile Photo" -> Set to "My Contacts" or "My Contacts Except...".',
          'Tap "About" and "Status" -> Set to "My Contacts".',
        ],
        officialTip: 'Setting your Profile Photo to "My Contacts" prevents scammers from scraping your avatar to create impersonation clones.',
      },
      {
        title: '2. Group Privacy & Unknown Numbers',
        description: 'Prevent strangers and spammers from adding your number to scam broadcast groups.',
        steps: [
          'Go to Settings -> Privacy -> Groups.',
          'Change from "Everyone" to "My Contacts" or "My Contacts Except...".',
          'Under Privacy -> Advanced, toggle "Protect IP address in calls" ON (relays calls through WhatsApp servers to mask your IP from callers).',
          'Toggle "Silence unknown callers" ON to prevent unsolicited audio rings from unknown numbers.',
        ],
      },
      {
        title: '3. Two-Step Verification (PIN)',
        description: 'Prevent hackers from registering your WhatsApp number on another device with stolen SMS codes.',
        steps: [
          'Go to Settings -> Account -> Two-step verification.',
          'Tap "Turn on" and create a secure 6-digit PIN that you will remember.',
          'Add your email address as a recovery fallback in case you forget the PIN.',
          'WhatsApp will periodically prompt you for this PIN to ensure you remember it.',
        ],
      },
      {
        title: '4. Linked Devices Security & Web Sign-Out',
        description: 'Check for unauthorized desktop or browser sessions monitoring your messages.',
        steps: [
          'Go to Settings -> Linked Devices.',
          'Review all active sessions (e.g. "Windows", "Mac", "Google Chrome").',
          'If you see any device you do not actively use or recognize, tap it and select "Log Out" immediately.',
        ],
      },
      {
        title: '5. Chat Lock & Disappearing Messages',
        description: 'Protect sensitive conversations on shared or accessible devices.',
        steps: [
          'To lock an individual chat: Open chat -> Tap contact name at top -> Chat Lock -> Toggle ON with Face ID/Fingerprint.',
          'To set automatic message expiration: Tap contact name -> Disappearing Messages -> Select 24 hours, 7 days, or 90 days.',
        ],
      },
    ],
  },
];
