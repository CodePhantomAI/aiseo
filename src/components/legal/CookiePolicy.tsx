import React, { useState } from 'react';
import { Cookie, Settings, Check, X } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always enabled
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handleToggle = (type: string) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('העדפות נשמרו בהצלחה!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-orange-100 p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
              <Cookie className="h-12 w-12 text-orange-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מדיניות קובצי Cookie
            </h1>
            <p className="text-gray-600">
              איך אנחנו משתמשים בקובצי Cookie ואיך אתם יכולים לנהל אותם
            </p>
          </div>

          {/* Cookie Preferences Panel */}
          <div className="mb-12 bg-blue-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Settings className="h-6 w-6 ml-2 text-blue-600" />
                ניהול העדפות Cookie
              </h2>
              <button
                onClick={savePreferences}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                שמור העדפות
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Necessary Cookies */}
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Cookies נדרשים</h3>
                  <div className="bg-green-100 p-1 rounded">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  נדרשים לתפקוד בסיסי של האתר
                </p>
                <div className="text-xs text-gray-500">
                  תמיד פעיל - לא ניתן לכיבוי
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Cookies אנליטיים</h3>
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                        preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Google Analytics למדידת ביצועי האתר
                </p>
                <div className="text-xs text-gray-500">
                  מאפשר לנו לשפר את חוויית המשתמש
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Cookies שיווקיים</h3>
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                        preferences.marketing ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  מעקב אחר יעילות קמפיינים שיווקיים
                </p>
                <div className="text-xs text-gray-500">
                  מאפשר התאמה אישית של פרסומות
                </div>
              </div>

              {/* Preference Cookies */}
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Cookies העדפות</h3>
                  <button
                    onClick={() => handleToggle('preferences')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.preferences ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                        preferences.preferences ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  שמירת העדפות משתמש ושפה
                </p>
                <div className="text-xs text-gray-500">
                  מאפשר חוויה מותאמת אישית
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="prose prose-lg max-w-none text-right">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מה הם קובצי Cookie?</h2>
              <div className="space-y-3 text-gray-700">
                <p>קובצי Cookie הם קבצים קטנים שנשמרים במחשב או במכשיר הנייד שלכם כשאתם מבקרים באתר.</p>
                <p>הם מאפשרים לאתר לזכור את הפעילות והעדפות שלכם לביקורים הבאים.</p>
                <p>רוב האתרים באינטרנט משתמשים בקובצי Cookie לשיפור חוויית המשתמש.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">איך אנחנו משתמשים ב-Cookies?</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔧 Cookies נדרשים</h3>
                <div className="space-y-2 text-gray-700">
                  <p>נדרשים לתפקוד התקין של האתר:</p>
                  <ul className="list-disc mr-6 space-y-1">
                    <li>זכירת העדפות שפה</li>
                    <li>שמירה על המסגרת הטכנית של האתר</li>
                    <li>אבטחה ומניעת תקיפות</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Cookies אנליטיים</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Google Analytics עוזר לנו להבין איך משתמשים באתר:</p>
                  <ul className="list-disc mr-6 space-y-1">
                    <li>כמה מבקרים באים לאתר</li>
                    <li>באילו דפים הם מסתכלים</li>
                    <li>כמה זמן הם נשארים</li>
                    <li>מאיפה הם מגיעים (גוגל, רשתות חברתיות, וכו')</li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-3 rounded-lg">
                    <strong>הערה:</strong> המידע נאסף בצורה אנונימית ולא מזהה אתכם אישית
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Cookies שיווקיים</h3>
                <div className="space-y-2 text-gray-700">
                  <p>מעקב אחר יעילות הפרסום והשיווק:</p>
                  <ul className="list-disc mr-6 space-y-1">
                    <li>מעקב אחר לחיצות בפרסומות</li>
                    <li>התאמת פרסומות לתחומי העניין</li>
                    <li>מדידת ROI של קמפיינים</li>
                  </ul>
                  <p className="text-sm bg-orange-50 p-3 rounded-lg">
                    <strong>חשוב:</strong> אנחנו לא משתפים מידע אישי עם מפרסמים
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">איך לנהל Cookies?</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">באתר שלנו:</h4>
                  <p>השתמשו בפאנל "ניהול העדפות Cookie" למעלה לבחור בדיוק אילו Cookies אתם רוצים.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">בדפדפן שלכם:</h4>
                  <ul className="list-disc mr-6 space-y-1">
                    <li><strong>Chrome:</strong> הגדרות > פרטיות ואבטחה > קובצי Cookie</li>
                    <li><strong>Firefox:</strong> אפשרויות > פרטיות ואבטחה > קובצי Cookie</li>
                    <li><strong>Safari:</strong> העדפות > פרטיות > ניהול נתוני אתר</li>
                    <li><strong>Edge:</strong> הגדרות > קובצי Cookie והרשאות אתר</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">שימו לב:</h4>
                  <p>חסימת Cookies עלולה להשפיע על תפקוד האתר ועל חווית השימוש שלכם.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">כלים של צד שלישי</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו משתמשים בכלים חיצוניים שיכולים להציב Cookies:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>Google Analytics:</strong> ניתוח תנועה באתר</li>
                  <li><strong>Google Ads:</strong> מעקב קמפיינים פרסומיים</li>
                  <li><strong>Facebook Pixel:</strong> מעקב רשתות חברתיות</li>
                </ul>
                <p>לכל כלי יש מדיניות Cookie נפרדת שאליה אתם יכולים לגשת באתרים שלהם.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עדכוני מדיניות</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו עשויים לעדכן את מדיניות ה-Cookie מעת לעת.</p>
                <p>כל עדכון יפורסם בעמוד הזה עם תאריך העדכון החדש.</p>
                <p>אנחנו מציעים לכם לבדוק את העמוד מפעם לפעם.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">יש לכם שאלות?</h2>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="font-semibold text-gray-900 mb-3">אנחנו כאן לעזור:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>אימייל:</strong> privacy@eranfixer.com</p>
                  <p><strong>טלפון:</strong> 052-212-6366</p>
                  <p><strong>WhatsApp:</strong> 052-212-6366</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;