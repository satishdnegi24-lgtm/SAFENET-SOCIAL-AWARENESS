/**
 * SafeNet — Think Before You Click
 * Domain Types & Models
 */

export type PageRoute =
  | 'home'
  | 'learn'
  | 'blog'
  | 'platforms'
  | 'footprint'
  | 'quiz'
  | 'scenarios'
  | 'deepfake'
  | 'cases'
  | 'report'
  | 'toolkit'
  | 'progress'
  | 'about';

export type ArticleCategory =
  | 'Social Media Safety'
  | 'Digital Footprint'
  | 'Privacy Settings'
  | 'Password Security'
  | 'Phishing and Scams'
  | 'Cyberbullying'
  | 'Deepfake Awareness'
  | 'Identity Impersonation'
  | 'Responsible Posting'
  | 'Reporting Harmful Content';

export interface BlogPost {
  id: string;
  title: string;
  category: ArticleCategory;
  summary: string;
  readTime: string;
  publishedDate: string;
  lastReviewed: string;
  author: string;
  body: string[];
  practicalExamples: string[];
  dos: string[];
  donts: string[];
  actionChecklist: string[];
  sources: { title: string; url: string }[];
}

export interface PlatformGuide {
  id: string;
  platform: 'Instagram' | 'Facebook' | 'Snapchat' | 'X (Twitter)' | 'X, formerly Twitter' | 'WhatsApp';
  icon: string;
  tagline: string;
  lastReviewed: string;
  officialHelpUrl: string;
  sections: {
    title: string;
    description: string;
    steps: string[];
    officialTip?: string;
  }[];
}

export interface FootprintQuestion {
  id: string;
  category: 'Privacy Settings' | 'Personal Data' | 'Location & Sharing' | 'Account Security' | 'Content History';
  question: string;
  subtitle?: string;
  options: {
    text: string;
    points: number; // 0 (risky), 5 (moderate), 10 (safe/proactive)
    riskDescription: string;
  }[];
}

export interface FootprintResult {
  score: number; // 0 - 100
  tier: 'High Risk' | 'Moderate Awareness' | 'Safety Conscious' | 'Cyber Champion';
  color: string;
  summary: string;
  categoryScores: {
    category: string;
    score: number;
    maxScore: number;
    percentage: number;
  }[];
  strengths: string[];
  improvementAreas: string[];
  actionPlan: { priority: 'High' | 'Medium' | 'Routine'; action: string; why: string }[];
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  recommendedTopicId: PageRoute;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  outcomeType: 'safe' | 'risky' | 'dangerous';
  feedback: string;
  actionableTips: string[];
  isRecommended: boolean;
}

export interface Scenario {
  id: string;
  code: string;
  title: string;
  situation: string;
  category: string;
  contextTag: string;
  choices: ScenarioChoice[];
  safeResolution: string;
  evidencePreservationGuide: string[];
  whoToContact: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  dateOrTimeline: string;
  topic: string;
  verifiedStatus: 'Verified by Law Enforcement / Government' | 'Investigative Fact-Check Confirmed';
  background: string;
  whatSourcesConfirm: string[];
  whatRemainsUncertain: string[];
  realWorldImpact: string;
  keySafetyLessons: string[];
  preventiveMeasures: string[];
  sources: { publisher: string; title: string; url: string }[];
}

export interface ReportingIssueGuide {
  id: string;
  name: string;
  iconName: string;
  shortDescription: string;
  immediateSafetySteps: string[];
  evidencePreservationChecklist: string[];
  platformReportingSteps: { platform: string; steps: string; link: string }[];
  formalComplaintRoute: {
    portalName: string;
    portalUrl: string;
    helpline?: string;
    applicableLegalCategory: string;
    importantDisclaimer: string;
  };
}

export interface ChecklistItem {
  id: string;
  task: string;
  detail: string;
  completed: boolean;
}

export interface ToolkitChecklist {
  id: string;
  title: string;
  category: string;
  description: string;
  items: ChecklistItem[];
}

export interface UserProgressState {
  completedLessons: string[]; // lesson IDs
  completedScenarios: string[]; // scenario IDs
  quizAttempts: {
    date: string;
    score: number; // percentage
    correctCount: number;
    totalQuestions: number;
  }[];
  bestQuizScore: number;
  footprintAssessmentCompleted: boolean;
  latestFootprintScore?: number;
  checklistProgress: Record<string, string[]>; // checklistId -> array of completed itemIds
  userName?: string;
}
