import React from 'react';
import { Search, FileText, Cog, Link, BarChart3, Shield, ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'מחקר מילות מפתח וקלאסטרים',
      description: 'כריית SERP עמוקה וקלאסטרינג סמנטי מתקדם לזיהוי הזדמנויות חדשות',
      features: ['כריית ביטויים ו-SERP מתקדמת', 'קלאסטרינג סמנטי וכוונות חיפוש', 'מיפוי תחרות והזדמנויות'],
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'כתיבת תוכן מונחה-בינה',
      description: 'יצירת בריפים חכמים ותוכן איכותי עם עריכה אנושית מקצועית',
      features: ['בריפים חכמים + תבניות עוגן', 'Draft מבוסס AI → עריכה אנושית', 'בדיקות מקוריות וציטוטים'],
      color: 'green'
    },
    {
      icon: Cog,
      title: 'אופטימיזציה טכנית',
      description: 'שיפור Core Web Vitals, מבנה האתר וביצועים',
      features: ['אינדוקס נקי, מפת אתר ומטא', 'סכמות מתקדמות', 'אופטימיזציה לביצועים'],
      color: 'purple'
    },
    {
      icon: Link,
      title: 'בניית סמכות וקישורים חכמים',
      description: 'Digital PR מתקדם וקישורים איכותיים לבניית סמכות',
      features: ['מיפוי נכסים חזקים', 'ציטוטים מקומיים ופרופילים', 'קישורים איכותיים ורלוונטיים'],
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'מדידה ודיווח',
      description: 'מעקב שקוף אחר התוצאות עם דיווחים מפורטים',
      features: ['מדידת KPI מתמשכת', 'דו"ח חודשי מפורט', 'תוכנית שיפור דו-שבועית'],
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'ניהול מוניטין חיפוש',
      description: 'ORM מתקדם לשמירה על מוניטין דיגיטלי חיובי',
      features: ['ניטור אזכורים', 'ניהול ביקורות', 'בניית נוכחות חיובית'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string; border: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-600', border: 'border-orange-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-600', border: 'border-teal-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-600', border: 'border-red-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" itemProp="name">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            מגוון שירותי SEO מתקדמים המבוססים על בינה מלאכותית עם בקרה אנושית מקצועית. 
            הטכנולוגיות והכלים שלנו פותחו במיוחד עבור הפלטפורמה ב<a href="https://fixier.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">אתר החברה הראשי</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colorClasses.border} group hover:-translate-y-1`}
              >
                <div className={`${colorClasses.bg} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${colorClasses.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.bg} mt-2 ml-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-white ${colorClasses.hover} hover:text-white border-2 ${colorClasses.border} ${colorClasses.text} font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group`}>
                  <span onClick={() => window.open('https://fixier.org/services', '_blank')} className="cursor-pointer">קרא עוד</span>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              תהליך העבודה שלנו
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              מ-AI ל-Human: תהליך מובנה שמבטיח איכות ותוצאות. 
              למידע נוסף על התהליכים שלנו ראו ב<a href="https://fixier.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">אתר הראשי</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'איסוף נתונים', desc: 'ניתוח דומיין, נישה וקהל יעד' },
              { step: '02', title: 'כריית SERP', desc: 'מחקר עמוק ואיסוף נתונים' },
              { step: '03', title: 'קלאסטרינג', desc: 'ארגון לפי כוונות חיפוש' },
              { step: '04', title: 'יצירה ועריכה', desc: 'AI + עריכה אנושית מקצועית' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;