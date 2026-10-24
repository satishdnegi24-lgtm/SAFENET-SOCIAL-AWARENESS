import React, { useState, useEffect } from 'react';
import { PageRoute, UserProgressState } from './types';
import {
  loadProgressFromStorage,
  saveProgressToStorage,
  clearProgressStorage,
  INITIAL_PROGRESS,
} from './utils/cyberLogic';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AiSafetyTutorModal } from './components/AiSafetyTutorModal';
import { CertificateModal } from './components/CertificateModal';

import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { BlogPage } from './pages/BlogPage';
import { PlatformGuidesPage } from './pages/PlatformGuidesPage';
import { FootprintAssessmentPage } from './pages/FootprintAssessmentPage';
import { QuizPage } from './pages/QuizPage';
import { ScenariosPage } from './pages/ScenariosPage';
import { DeepfakeAwarenessPage } from './pages/DeepfakeAwarenessPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ReportHelpPage } from './pages/ReportHelpPage';
import { SafetyToolkitPage } from './pages/SafetyToolkitPage';
import { LearningProgressPage } from './pages/LearningProgressPage';
import { AboutPrivacySourcesPage } from './pages/AboutPrivacySourcesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [progress, setProgress] = useState<UserProgressState>(loadProgressFromStorage);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Synchronize route with URL hash or query param for direct navigation and refresh support
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'learn',
        'blog',
        'platforms',
        'footprint',
        'quiz',
        'scenarios',
        'deepfake',
        'cases',
        'report',
        'toolkit',
        'progress',
        'about',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    return () => window.removeEventListener('hashchange', handleUrlChange);
  }, []);

  // Save progress state to localStorage whenever it changes
  useEffect(() => {
    saveProgressToStorage(progress);
  }, [progress]);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  // Progress Handlers
  const handleToggleLesson = (lessonId: string) => {
    setProgress((prev) => {
      const isDone = prev.completedLessons.includes(lessonId);
      const updated = isDone
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return { ...prev, completedLessons: updated };
    });
  };

  const handleCompleteScenario = (scenarioId: string) => {
    setProgress((prev) => {
      if (prev.completedScenarios.includes(scenarioId)) return prev;
      return { ...prev, completedScenarios: [...prev.completedScenarios, scenarioId] };
    });
  };

  const handleCompleteFootprint = (score: number) => {
    setProgress((prev) => ({
      ...prev,
      footprintAssessmentCompleted: true,
      latestFootprintScore: score,
    }));
  };

  const handleQuizComplete = (scorePercentage: number, correctCount: number, total: number) => {
    setProgress((prev) => {
      const best = Math.max(prev.bestQuizScore || 0, scorePercentage);
      const attempt = {
        date: new Date().toISOString(),
        score: scorePercentage,
        correctCount,
        totalQuestions: total,
      };
      return {
        ...prev,
        bestQuizScore: best,
        quizAttempts: [...(prev.quizAttempts || []), attempt],
      };
    });
  };

  const handleToggleChecklistItem = (checklistId: string, itemId: string) => {
    setProgress((prev) => {
      const currentList = prev.checklistProgress[checklistId] || [];
      const isChecked = currentList.includes(itemId);
      const updatedList = isChecked
        ? currentList.filter((id) => id !== itemId)
        : [...currentList, itemId];

      return {
        ...prev,
        checklistProgress: {
          ...prev.checklistProgress,
          [checklistId]: updatedList,
        },
      };
    });
  };

  const handleResetChecklist = (checklistId: string) => {
    setProgress((prev) => {
      const updated = { ...prev.checklistProgress };
      delete updated[checklistId];
      return { ...prev, checklistProgress: updated };
    });
  };

  const handleResetAllProgress = () => {
    clearProgressStorage();
    setProgress(INITIAL_PROGRESS);
  };

  const handleUpdateUserName = (name: string) => {
    setProgress((prev) => ({ ...prev, userName: name }));
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            progress={progress}
            onOpenTutor={() => setIsTutorOpen(true)}
          />
        );
      case 'learn':
        return (
          <LearnPage
            onNavigate={navigateTo}
            progress={progress}
            onToggleLessonCompletion={handleToggleLesson}
          />
        );
      case 'blog':
        return <BlogPage />;
      case 'platforms':
        return <PlatformGuidesPage />;
      case 'footprint':
        return (
          <FootprintAssessmentPage
            onCompleteAssessment={handleCompleteFootprint}
            onNavigate={navigateTo}
            savedScore={progress.latestFootprintScore}
          />
        );
      case 'quiz':
        return (
          <QuizPage
            onQuizComplete={handleQuizComplete}
            onNavigate={navigateTo}
            bestScore={progress.bestQuizScore}
          />
        );
      case 'scenarios':
        return (
          <ScenariosPage
            onScenarioCompleted={handleCompleteScenario}
            progress={progress}
            onNavigate={navigateTo}
          />
        );
      case 'deepfake':
        return <DeepfakeAwarenessPage onNavigate={navigateTo} />;
      case 'cases':
        return <CaseStudiesPage onNavigate={navigateTo} />;
      case 'report':
        return <ReportHelpPage />;
      case 'toolkit':
        return (
          <SafetyToolkitPage
            completedItems={progress.checklistProgress}
            onToggleItem={handleToggleChecklistItem}
            onResetChecklist={handleResetChecklist}
            onNavigate={navigateTo}
          />
        );
      case 'progress':
        return (
          <LearningProgressPage
            progress={progress}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onResetProgress={handleResetAllProgress}
            onNavigate={navigateTo}
            onUpdateUserName={handleUpdateUserName}
          />
        );
      case 'about':
        return <AboutPrivacySourcesPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenTutor={() => setIsTutorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Modals */}
      <AiSafetyTutorModal
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        userName={progress.userName || 'Cyber Safety Scholar'}
        onUpdateUserName={handleUpdateUserName}
        quizScore={progress.bestQuizScore || 0}
        completedLessonsCount={progress.completedLessons.length}
      />
    </div>
  );
}
