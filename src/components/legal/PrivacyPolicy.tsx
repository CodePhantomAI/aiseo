import React from 'react';
import { Shield, Database, Eye, Lock, Calendar } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "15 ינואר 2025";
  
  return (
    <div className="min-h-screen bg-gray-50 py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
              <Shield className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מדיניות פרטיות
            </h1>
            <p className="text-gray-600">
              איך אנחנו שומרים ומגינים על הפרטיות שלכם
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
              <Calendar className="h-4 w-4 ml-2" />
              עדכון אחרון: {lastUpdated}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-right">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. מבוא</h2>
              <div className="space-y-3 text-gray-700">
                <p>EranFixer ("אנחנו", "שלנו", "החברה") מתחייבת להגנה על הפרטיות שלכם.</p>
                <p>מדיניות זו מסבירה איזה מידע אנחנו אוספים, איך משתמשים בו ואיך מגינים עליו.</p>
                <p>המדיניות חלה על כל השימוש באתר ובשירותים שלנו.</p>
                <p>אנחנו פועלים בהתאם לחוק הגנת הפרטיות התשמ"א-1981 ולתקנות GDPR.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. איזה מידע אנחנו אוספים</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Database className="inline h-5 w-5 text-blue-600 ml-2" />
                  מידע אישי
                </h3>
                <ul className="list-disc mr-6 space-y-2 text-gray-700">
                  <li>שם מלא</li>
                  <li>כתובת אימייל</li>
                  <li>מספר טלפון</li>
                  <li>שם החברה/עסק</li>
                  <li>כתובת אתר</li>
                  <li>תחום העסק</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Eye className="inline h-5 w-5 text-purple-600 ml-2" />
                  מידע טכני
                </h3>
                <ul className="list-disc mr-6 space-y-2 text-gray-700">
                  <li>כתובת IP</li>
                  <li>סוג דפדפן ומכשיר</li>
                  <li>נתוני עיון באתר (Google Analytics)</li>
                  <li>קובצי Cookie</li>
                  <li>נתוני ביצועים (לשיפור שירותים)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Lock className="inline h-5 w-5 text-orange-600 ml-2" />
                  מידע מקצועי (ללקוחות)
                </h3>
                <ul className="list-disc mr-6 space-y-2 text-gray-700">
                  <li>נתוני SEO ואתר (GSC, GA)</li>
                  <li>מילות מפתח ותחרותיות</li>
                  <li>תוכן ומטא-דאטה</li>
                  <li>דו"חות ביצועים</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. למה אנחנו משתמשים במידע</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>מתן שירותים:</strong></p>
                <ul className="list-disc mr-6 space-y-1">
                  <li>ביצוע שירותי SEO וקידום אתרים</li>
                  <li>יצירת דו"חות ותובנות</li>
                  <li>תקשורת מקצועית וייעוץ</li>
                </ul>
                
                <p><strong>שיפור השירותים:</strong></p>
                <ul className="list-disc mr-6 space-y-1">
                  <li>ניתוח ביצועים ותוצאות</li>
                  <li>פיתוח כלים וטכנולוגיות חדשות</li>
                  <li>התאמה אישית של השירותים</li>
                </ul>

                <p><strong>תקשורת ושיווק:</strong></p>
                <ul className="list-disc mr-6 space-y-1">
                  <li>עדכונים על השירותים</li>
                  <li>חומר חינוכי ותובנות שוק</li>
                  <li>הזמנות לאירועים וובינרים</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. עם מי אנחנו משתפים מידע</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>אנחנו לא מוכרים את המידע שלכם לאף אחד.</strong></p>
                
                <p>אנחנו עשויים לשתף מידע במקרים הבאים בלבד:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>ספקי שירות:</strong> כלים טכניים (Google Analytics, מערכות CRM) תחת הסכמי סודיות</li>
                  <li><strong>דרישה חוקית:</strong> כאשר נדרש על פי חוק או צו בית משפט</li>
                  <li><strong>הסכמתכם:</strong> במקרים שבהם אישרתם מפורשת</li>
                  <li><strong>מידע אנונימי:</strong> נתונים סטטיסטיים כללים ללא זיהוי אישי</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. אבטחת המידע</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו נוקטים באמצעי אבטחה מתקדמים:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>הצפנה:</strong> כל המידע מועבר ומאוחסן בהצפנה</li>
                  <li><strong>גישה מוגבלת:</strong> רק עובדים מורשים יכולים לגשת למידע</li>
                  <li><strong>גיבויים:</strong> גיבויים רגולריים ומאובטחים</li>
                  <li><strong>עדכוני אבטחה:</strong> עדכונים קבועים של מערכות האבטחה</li>
                  <li><strong>מחיקה מאובטחת:</strong> מחיקה סופית כשלא נדרש עוד</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. הזכויות שלכם</h2>
              <div className="space-y-3 text-gray-700">
                <p>בהתאם לחוק הגנת הפרטיות ול-GDPR, יש לכם זכות:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>עיון:</strong> לדעת איזה מידע יש לנו עליכם</li>
                  <li><strong>תיקון:</strong> לתקן מידע לא נכון</li>
                  <li><strong>מחיקה:</strong> לבקש מחיקת המידע ("הזכות להישכח")</li>
                  <li><strong>הגבלה:</strong> להגביל את השימוש במידע</li>
                  <li><strong>ניידות:</strong> לקבל עותק של המידע</li>
                  <li><strong>התנגדות:</strong> להתנגד לעיבוד למטרות שיווק</li>
                  <li><strong>ביטול הסכמה:</strong> לבטל הסכמה בכל עת</li>
                </ul>
                <p className="bg-blue-50 p-4 rounded-lg">
                  <strong>איך להפעיל את הזכויות:</strong> פנו אלינו במייל privacy@eranfixer.com או בטלפון 052-212-6366
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. קובצי Cookie ועוקבים</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו משתמשים בקובצי Cookie למטרות הבאות:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>Cookies נדרשים:</strong> לתפקוד בסיסי של האתר</li>
                  <li><strong>Analytics:</strong> Google Analytics למדידת ביצועי האתר</li>
                  <li><strong>שיווק:</strong> למעקב אחר יעילות הקמפיינים (רק עם הסכמה)</li>
                </ul>
                <p>אתם יכולים לנהל את העדפות הקובצים דרך הגדרות הדפדפן או דרך <a href="#cookies" className="text-blue-600 hover:text-blue-700">מרכז העדפות הקובצים</a>.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. שמירת מידע</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו שומרים מידע לפי הצרכים הבאים:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>לקוחות פעילים:</strong> כל עוד אנחנו מספקים שירותים</li>
                  <li><strong>לקוחות לשעבר:</strong> עד 7 שנים לצרכי רשויות המס</li>
                  <li><strong>מידע שיווקי:</strong> עד להסרה על פי בקשתכם</li>
                  <li><strong>מידע אנונימי:</strong> ללא הגבלת זמן (כי לא ניתן לזיהוי)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. העברות מידע לחו"ל</h2>
              <div className="space-y-3 text-gray-700">
                <p>חלק מהכלים שאנחנו משתמשים בהם (Google, כלי CRM) שומרים מידע בחו"ל.</p>
                <p>אנחנו מוודאים שכל ההעברות מתבצעות:</p>
                <ul className="list-disc mr-6 space-y-1">
                  <li>לארצות עם הגנת פרטיות מתאימה</li>
                  <li>עם הסכמי הגנת מידע מתאימים</li>
                  <li>בהתאם לחוק הישראלי ול-GDPR</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. עדכוני מדיניות</h2>
              <div className="space-y-3 text-gray-700">
                <p>אנחנו עשויים לעדכן את המדיניות מעת לעת.</p>
                <p>עדכונים מהותיים יישלחו אליכם במייל.</p>
                <p>המשך השימוש באתר לאחר עדכון מהווה הסכמה למדיניות המעודכנת.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. קשר עם הממונה על הגנת הפרטיות</h2>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="font-semibold text-gray-900 mb-3">לכל שאלה בנושא הגנת הפרטיות:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>אימייל:</strong> privacy@eranfixer.com</p>
                  <p><strong>טלפון:</strong> 052-212-6366</p>
                  <p><strong>כתובת:</strong> תל אביב, ישראל</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  נחזור אליכם תוך 30 יום מקבלת הפנייה.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;