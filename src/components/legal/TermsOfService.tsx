import React from 'react';
import { Scale, Calendar, Mail, Phone } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const lastUpdated = "15 ינואר 2025";
  
  return (
    <div className="min-h-screen bg-gray-50 py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
              <Scale className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              תנאי השימוש
            </h1>
            <p className="text-gray-600">
              תנאי השימוש באתר ובשירותי EranFixer AI SEO
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
              <Calendar className="h-4 w-4 ml-2" />
              עדכון אחרון: {lastUpdated}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-right">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. הגדרות</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>"החברה"</strong> - EranFixer, ע.ר. 123456789</p>
                <p><strong>"האתר"</strong> - ai.eranfixer.co.il וכל אתרי החברה</p>
                <p><strong>"השירותים"</strong> - שירותי קידום אתרים באמצעות בינה מלאכותית</p>
                <p><strong>"המשתמש"</strong> - כל מי שגולש באתר או משתמש בשירותים</p>
                <p><strong>"התוכן"</strong> - כל המידע, הטקסטים, התמונות והחומר באתר</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. הסכמה לתנאים</h2>
              <div className="space-y-3 text-gray-700">
                <p>השימוש באתר ובשירותים מהווה הסכמה מלאה לתנאי השימוש הללו.</p>
                <p>אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר.</p>
                <p>התנאים עשויים להתעדכן מעת לעת, והמשך השימוש מהווה הסכמה לשינויים.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. השירותים</h2>
              <div className="space-y-3 text-gray-700">
                <p>החברה מציעה שירותי קידום אתרים באמצעות בינה מלאכותית, הכוללים:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>מחקר מילות מפתח וקלאסטרים סמנטיים</li>
                  <li>כתיבת תוכן מונחה-בינה עם עריכה אנושית</li>
                  <li>אופטימיזציה טכנית לאתרים</li>
                  <li>בניית סמכות וקישורים דיגיטליים</li>
                  <li>ניהול מוניטין חיפוש</li>
                </ul>
                <p>כל השירותים מסופקים בכפוף להזמנה מפורשת ולחתימה על הסכם שירות נפרד.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. זכויות יוצרים וקניין רוחני</h2>
              <div className="space-y-3 text-gray-700">
                <p>כל התוכן באתר שייך לחברה ומוגן בזכויות יוצרים.</p>
                <p>אסור לשכפל, להפיץ או להשתמש בתוכן ללא אישור מראש בכתב.</p>
                <p>הלוגו, המותג והטכנולוגיות הם קניינה הרוחני של החברה.</p>
                <p>תוכן שנוצר עבור לקוחות נשאר בבעלותם, אך החברה שומרת על זכות שימוש לדוגמאות.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. מגבלות אחריות</h2>
              <div className="space-y-3 text-gray-700">
                <p>השירותים ניתנים "כפי שהם" ללא אחריות מפורשת או משתמעת.</p>
                <p>החברה אינה מתחייבת לתוצאות ספציפיות בקידום האתרים.</p>
                <p>האחריות מוגבלת לסכום ששולם בפועל עבור השירות הרלוונטי.</p>
                <p>החברה אינה אחראית לנזקים עקיפים, אובדן רווחים או נזקים מיוחדים.</p>
                <p>התוצאות בSEO תלויות במגוון גורמים חיצוניים שאינם בשליטת החברה.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. התחייבויות המשתמש</h2>
              <div className="space-y-3 text-gray-700">
                <p>המשתמש מתחייב:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>לספק מידע נכון ומדויק</li>
                  <li>לשלם בזמן עבור השירותים</li>
                  <li>לא להפר זכויות יוצרים של צדדים שלישיים</li>
                  <li>לא להשתמש בשירותים למטרות בלתי חוקיות</li>
                  <li>לשתף פעולה בתהליך קידום האתר</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. ביטול ותשלומים</h2>
              <div className="space-y-3 text-gray-700">
                <p>ביטול שירותים יתבצע לפי התנאים הפרטניים בהסכם השירות.</p>
                <p>לא יינתן זיכוי עבור עבודה שכבר בוצעה.</p>
                <p>תשלומים יבוצעו מראש לפי התנאים המוסכמים.</p>
                <p>איחור בתשלום עלול להוביל להקפאת השירותים.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. פרטיות ואבטחת מידע</h2>
              <div className="space-y-3 text-gray-700">
                <p>החברה מתחייבת לשמירה על פרטיות המידע לפי <a href="#privacy" className="text-blue-600 hover:text-blue-700">מדיניות הפרטיות</a>.</p>
                <p>מידע לקוחות נשמר בהתאם לחוק הגנת הפרטיות התשמ"א-1981.</p>
                <p>החברה עשויה להשתמש בנתונים אנונימיים לשיפור השירותים.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. יישוב סכסוכים</h2>
              <div className="space-y-3 text-gray-700">
                <p>כל סכסוך יטופל תחילה בדרך של הסדר פשרה.</p>
                <p>הדין החל הוא הדין הישראלי.</p>
                <p>בית המשפט המוסמך הוא בית המשפט בתל אביב.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. עדכונים לתנאים</h2>
              <div className="space-y-3 text-gray-700">
                <p>החברה שומרת על הזכות לעדכן את התנאים.</p>
                <p>עדכונים יפורסמו באתר עם תאריך העדכון.</p>
                <p>המשך השימוש לאחר עדכון מהווה הסכמה לתנאים המעודכנים.</p>
              </div>
            </section>

          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">יצירת קשר לשאלות משפטיות</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 ml-3" />
                  <span className="text-gray-700">legal@eranfixer.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 ml-3" />
                  <span className="text-gray-700">052-212-6366</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;