import React from 'react';
import { Accessibility, Eye, Ear, Hand, Brain, Calendar } from 'lucide-react';

const AccessibilityStatement: React.FC = () => {
  const lastUpdated = "15 ינואר 2025";

  return (
    <div className="min-h-screen bg-gray-50 py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-purple-100 p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
              <Accessibility className="h-12 w-12 text-purple-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              הצהרת נגישות
            </h1>
            <p className="text-gray-600">
              המחויבות שלנו לנגישות דיגיטלית לכל המשתמשים
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
              <Calendar className="h-4 w-4 ml-2" />
              עדכון אחרון: {lastUpdated}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-right">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">המחויבות שלנו</h2>
              <div className="space-y-3 text-gray-700">
                <p>EranFixer מתחייבת לספק נגישות דיגיטלית לאנשים עם מוגבלויות.</p>
                <p>אנחנו פועלים ללא לאות להפוך את האתר לנגיש, שמיש ונוח לכולם.</p>
                <p>המחויבות שלנו מבוססת על <strong>חוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998</strong> ועל התקן הישראלי 5568.</p>
                <p>האתר נבנה בהתאם להנחיות <strong>WCAG 2.1 ברמת AA</strong>.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">רמת הנגישות באתר</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Eye className="inline h-5 w-5 text-green-600 ml-2" />
                    נגישות חזותית
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• ניגודיות גבוהה בין טקסט לרקע</li>
                    <li>• גדלי כפתורים מינימום 44x44 פיקסלים</li>
                    <li>• תמיכה בזום עד 200% ללא אובדן פונקציונליות</li>
                    <li>• אלמנטי פוקוס ברורים עם מסגרות</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Hand className="inline h-5 w-5 text-blue-600 ml-2" />
                    נגישות מוטורית
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• ניווט מלא באמצעות מקלדת</li>
                    <li>• אזורי לחיצה מספיק גדולים</li>
                    <li>• זמן תגובה גמיש ללא הגבלת זמן</li>
                    <li>• תמיכה בטכנולוגיות עזר</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Brain className="inline h-5 w-5 text-yellow-600 ml-2" />
                    נגישות קוגניטיבית
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• מבנה עמוד עקבי וברור</li>
                    <li>• שפה פשותה ובהירה</li>
                    <li>• מסלולי ניווט אינטואיטיביים</li>
                    <li>• הודעות שגיאה מובנות</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Ear className="inline h-5 w-5 text-purple-600 ml-2" />
                    תוכן מולטימדיה
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• תמלול לכל התוכן הקולי</li>
                    <li>• תיאורים חלופיים לתמונות</li>
                    <li>• כותרות H1-H6 מובנות נכון</li>
                    <li>• רשימות וקישורים עם תיוגים ברורים</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">טכנולוגיות עזר נתמכות</h2>
              <div className="space-y-3 text-gray-700">
                <p>האתר נבדק ועובד עם:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc mr-6 space-y-1">
                    <li>NVDA (Windows)</li>
                    <li>JAWS (Windows)</li>
                    <li>VoiceOver (Mac/iOS)</li>
                    <li>TalkBack (Android)</li>
                  </ul>
                  <ul className="list-disc mr-6 space-y-1">
                    <li>Dragon NaturallySpeaking</li>
                    <li>Switch Control</li>
                    <li>תוכנות זום מסך</li>
                    <li>ניווט במקלדת</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הגבלות נגישות ידועות</h2>
              <div className="space-y-3 text-gray-700">
                <p>למרות המאמצים שלנו, יכול להיות שחלק מהתוכן עדיין לא נגיש במלואו:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>תמונות מ-Unsplash:</strong> לא כל התמונות החיצוניות כוללות תיאור מפורט</li>
                  <li><strong>תוכן PDF:</strong> קבצים ישנים עשויים לא להיות נגישים במלואם</li>
                  <li><strong>תוכן צד שלישי:</strong> חלק מהכלים החיצוניים (מפות, וידאו) עשויים להיות מוגבלים</li>
                  <li><strong>פורמים מורכבים:</strong> חלק מהטפסים המתקדמים עדיין בתהליך שיפור</li>
                </ul>
                <p className="bg-blue-50 p-4 rounded-lg">
                  <strong>אנחנו עובדים ללא הרף לשיפור הנגישות בתחומים הללו.</strong>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">איך להשתמש באתר בצורה נגישה</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">ניווט במקלדת:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Tab</kbd> - מעבר בין אלמנטים</li>
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Shift+Tab</kbd> - מעבר אחורה</li>
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Enter</kbd> או <kbd className="bg-gray-200 px-2 py-1 rounded">Space</kbd> - הפעלת כפתורים</li>
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Arrow Keys</kbd> - ניווט בתפריטים</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">הגדלת טקסט:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-200 px-2 py-1 rounded">+</kbd> - הגדלת גודל</li>
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-200 px-2 py-1 rounded">-</kbd> - הקטנת גודל</li>
                    <li>• <kbd className="bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-200 px-2 py-1 rounded">0</kbd> - איפוס לגודל רגיל</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הליך בדיקה ושיפור</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו מבצעים בדיקות נגישות באופן שוטף:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>בדיקות אוטומטיות:</strong> שימוש בכלים כמו axe-core ו-WAVE</li>
                  <li><strong>בדיקות ידניות:</strong> ניווט במקלדת ועם קוראי מסך</li>
                  <li><strong>בדיקות משתמשים:</strong> משוב מאנשים עם מוגבלויות</li>
                  <li><strong>עדכונים תקופתיים:</strong> שיפור מתמיד בהתאם למשוב</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">משוב ובקשות נגישות</h2>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="font-semibold text-gray-900 mb-4">נתקלתם בבעיית נגישות? אנחנו רוצים לדעת!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">איך לפנות אלינו:</h4>
                    <ul className="text-sm space-y-1">
                      <li>📧 <strong>אימייל:</strong> accessibility@eranfixer.com</li>
                      <li>📞 <strong>טלפון:</strong> 052-212-6366</li>
                      <li>💬 <strong>WhatsApp:</strong> 052-212-6366</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">מה לכלול בפנייה:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• תיאור הבעיה שנתקלתם בה</li>
                      <li>• באיזה דף באתר</li>
                      <li>• איזה דפדפן ומכשיר אתם משתמשים</li>
                      <li>• איזה טכנולוגיית עזר (אם רלוונטי)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>אנחנו מתחייבים להגיב לכל פנייה תוך 3 ימי עסקים ולפתור בעיות תוך 14 ימי עסקים.</strong>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">תקנים ותמיכה משפטית</h2>
              <div className="space-y-3 text-gray-700">
                <p>האתר בנוי בהתאם לתקנים הבאים:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>חוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998</strong></li>
                  <li><strong>תקן ישראלי 5568:</strong> נגישות תוכן אינטרנט</li>
                  <li><strong>WCAG 2.1 Level AA:</strong> הנחיות נגישות תוכן אינטרנט</li>
                  <li><strong>EN 301 549:</strong> התקן האירופאי לנגישות דיגיטלית</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p className="font-semibold">נציב שוויון זכויות לאנשים עם מוגבלות:</p>
                  <p className="text-sm">אם אתם מרגישים שזכויותיכם הופרו, תוכלו לפנות גם לנציב שוויון זכויות:</p>
                  <p className="text-sm">טלפון: 02-6466240 | אימייל: info@equalrights.gov.il</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;