import React, { useState } from 'react';
import TermsOfService from './legal/TermsOfService';
import PrivacyPolicy from './legal/PrivacyPolicy';
import CookiePolicy from './legal/CookiePolicy';
import AccessibilityStatement from './legal/AccessibilityStatement';
import { Scale, Shield, Cookie, Accessibility, ArrowRight, Home } from 'lucide-react';

type LegalPage = 'terms' | 'privacy' | 'cookies' | 'accessibility' | null;

const LegalRouter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<LegalPage>(null);

  const legalPages = [
    {
      id: 'terms' as LegalPage,
      title: 'תנאי שימוש',
      description: 'התנאים המשפטיים לשימוש באתר ובשירותים',
      icon: Scale,
      color: 'blue'
    },
    {
      id: 'privacy' as LegalPage,
      title: 'מדיניות פרטיות',
      description: 'איך אנחנו מגינים על הפרטיות שלכם',
      icon: Shield,
      color: 'green'
    },
    {
      id: 'cookies' as LegalPage,
      title: 'מדיניות קובצי Cookie',
      description: 'מידע על השימוש בקובצי Cookie באתר',
      icon: Cookie,
      color: 'orange'
    },
    {
      id: 'accessibility' as LegalPage,
      title: 'הצהרת נגישות',
      description: 'המחויבות שלנו לנגישות דיגיטלית',
      icon: Accessibility,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-200' }
    };
    return colors[color] || colors.blue;
  };

  if (currentPage) {
    return (
      <div>
        {/* Navigation */}
        <div className="bg-white shadow-sm border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" dir="rtl">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-4 text-sm">
                <button 
                  onClick={() => setCurrentPage(null)}
                  className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Home className="h-4 w-4 ml-1" />
                  עמוד ראשי
                </button>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <button 
                  onClick={() => setCurrentPage(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  דפים משפטיים
                </button>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">
                  {legalPages.find(p => p.id === currentPage)?.title}
                </span>
              </nav>
              <button
                onClick={() => setCurrentPage(null)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                חזרה לרשימה
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        {currentPage === 'terms' && <TermsOfService />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'cookies' && <CookiePolicy />}
        {currentPage === 'accessibility' && <AccessibilityStatement />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            מידע משפטי ותנאים
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל המידע המשפטי, תנאי השימוש והמדיניות שלנו במקום אחד
          </p>
        </div>

        {/* Legal Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {legalPages.map((page) => {
            const colorClasses = getColorClasses(page.color);
            const Icon = page.icon;
            
            return (
              <div
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${colorClasses.hover}`}
              >
                <div className={`${colorClasses.bg} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${colorClasses.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {page.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {page.description}
                </p>
                
                <div className={`inline-flex items-center ${colorClasses.text} font-medium group-hover:translate-x-1 transition-transform`}>
                  <span>לחצו לקריאה</span>
                  <ArrowRight className="h-4 w-4 mr-2" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              מידע נוסף
            </h2>
            <p className="text-gray-600">
              לשאלות משפטיות או בקשות נוספות, אנא צרו קשר
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">יועץ משפטי</h3>
              <p className="text-sm text-gray-600">legal@eranfixer.com</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">הגנת הפרטיות</h3>
              <p className="text-sm text-gray-600">privacy@eranfixer.com</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">נגישות</h3>
              <p className="text-sm text-gray-600">accessibility@eranfixer.com</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              כל המסמכים עודכנו לאחרונה ב-15 ינואר 2025 ועומדים בדרישות החוק הישראלי
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalRouter;