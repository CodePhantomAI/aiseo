import React, { useState, useEffect } from 'react';
import { Cookie, Settings, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // הצג באנר אחרי 2 שניות כדי לא להפריע לחוויית המשתמש
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setPreferences(allAccepted);
    saveCookieConsent(allAccepted);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setPreferences(onlyNecessary);
    saveCookieConsent(onlyNecessary);
    setShowBanner(false);
  };

  const saveCustomSettings = () => {
    saveCookieConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCookieConsent = (prefs: typeof preferences) => {
    const consent = {
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    
    // Apply the settings (in a real app, you'd enable/disable actual cookies here)
    if (prefs.analytics) {
      // Enable Google Analytics
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    }
  };

  const handleToggle = (type: string) => {
    if (type === 'necessary') return;
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-500 shadow-2xl" dir="rtl">
      <div className="max-w-7xl mx-auto p-4">
        {/* Basic Banner */}
        {!showSettings ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Cookie className="h-8 w-8 text-blue-600 ml-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  אנחנו משתמשים בקובצי Cookie
                </h3>
                <p className="text-sm text-gray-600">
                  האתר שלנו משתמש בקובצי Cookie כדי לשפר את חווית הגלישה ולמדוד ביצועים. 
                  <a href="#cookies" className="text-blue-600 hover:underline mr-1">
                    לפרטים נוספים
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Settings className="h-4 w-4 ml-1" />
                הגדרות
              </button>
              <button
                onClick={rejectAll}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                דחה הכל
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                קבל הכל
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Settings */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                הגדרות קובצי Cookie
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Necessary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">נדרשים</h4>
                  <div className="bg-green-500 w-10 h-5 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-5 transition-transform" />
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  נדרש לתפקוד האתר
                </p>
              </div>

              {/* Analytics */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">אנליטיקה</h4>
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-10 h-5 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-600">
                  Google Analytics
                </p>
              </div>

              {/* Marketing */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">שיווק</h4>
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-10 h-5 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-600">
                  מעקב קמפיינים
                </p>
              </div>

              {/* Preferences */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">העדפות</h4>
                  <button
                    onClick={() => handleToggle('preferences')}
                    className={`w-10 h-5 rounded-full relative transition-colors ${
                      preferences.preferences ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.preferences ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-600">
                  העדפות משתמש
                </p>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ביטול
              </button>
              <button
                onClick={saveCustomSettings}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                שמור העדפות
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;