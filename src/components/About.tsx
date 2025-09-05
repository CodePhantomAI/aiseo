import React from 'react';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" itemProp="name">
            השיטה שלנו: <span className="text-blue-600">50/50</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            אנחנו משלבים כריית־דאטה חכמה, קלאסטרינג סמנטי ויצירת בריפים מדויקים – עם עריכה אנושית שמוודאת אמת ואיכות.
            התוצאה: תוכן חד שמשרת כוונת חיפוש, מבנה טכני מהיר, וקישורים שמחזקים סמכות.
            השירותים שלנו זמינים גם ב
            <a
              href="https://fixier.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              אתר הראשי
            </a>
            {' '}ובפלטפורמות נוספות של{' '}
            <a
              href="https://fixier.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Fixier
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">בקרה אנושית</h3>
            <p className="text-gray-600 text-sm">כל תוכן עובר עריכה מקצועית לוודא אמינות ואיכות</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">מחקר מעמיק</h3>
            <p className="text-gray-600 text-sm">אנחנו חוקרים את קהל היעד שלכם ובונים אסטרטגיה מותאמת</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">מוכח ומנוסה</h3>
            <p className="text-gray-600 text-sm">מאות לקוחות מרוצים בתחומים שונים</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">תוצאות מדידות</h3>
            <p className="text-gray-600 text-sm">דיווח שקוף ומדידה מתמשכת של כל מדד</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                למה EranFixer שונה?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg ml-4 mt-1">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">שקיפות מלאה</h4>
                    <p className="text-gray-600 text-sm">אתם רואים בדיוק מה אנחנו עושים ואיך זה משפיע על התוצאות</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg ml-4 mt-1">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">גישה אישית</h4>
                    <p className="text-gray-600 text-sm">לא תבניות - כל פרויקט מקבל טיפול ייחודי</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg ml-4 mt-1">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">דיווח מתמשך</h4>
                    <p className="text-gray-600 text-sm">דו"חות חודשיים + תוכניות שיפור דו-שבועיות</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">התוצאה</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">+300%</div>
                <p className="text-gray-600 text-sm mb-4">עלייה ממוצעת בתנועה אורגנית</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-gray-500">שיעור הצלחה</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">45</div>
                    <div className="text-xs text-gray-500">ימים ממוצע לתוצאות</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;