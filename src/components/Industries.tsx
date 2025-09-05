import React from 'react';
import { Scale, Stethoscope, UtensilsCrossed, ShoppingBag, MapPin, Building, ArrowLeft } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Scale,
      title: 'עורכי דין',
      description: 'קידום משרדי עו"ד עם דגש על מילות מפתח מקומיות ובניית אמינות דיגיטלית',
      features: ['מילות מפתח משפטיות', 'בניית מוניטין מקצועי', 'תוכן משפטי איכותי'],
      cta: 'למידע נוסף על SEO למשרדי עו"ד',
      color: 'blue'
    },
    {
      icon: Stethoscope,
      title: 'קליניקות ורופאים',
      description: 'קידום קליניקות רפואיות עם דגש על חיפושים מקומיים ובניית אמון',
      features: ['SEO מקומי לקליניקות', 'ניהול ביקורות חיוביות', 'תוכן רפואי מקצועי'],
      cta: 'למידע נוסף על SEO לקליניקות',
      color: 'green'
    },
    {
      icon: UtensilsCrossed,
      title: 'מסעדות ובתי אוכל',
      description: 'קידום מסעדות עם דגש על חיפושים מקומיים, תפריטים ואירועים',
      features: ['חיפושים "קרוב אלי"', 'אופטימיזציה לגוגל מפות', 'ניהול תפריטים דיגיטליים'],
      cta: 'למידע נוסף על SEO למסעדות',
      color: 'orange'
    },
    {
      icon: ShoppingBag,
      title: 'איקומרס וחנויות',
      description: 'קידום חנויות אונליין עם דגש על דפי מוצרים וקטגוריות',
      features: ['אופטימיזציה לדפי מוצרים', 'שיפור חווית משתמש', 'הגדלת שיעור המרות'],
      cta: 'למידע נוסף על SEO לאיקומרס',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'תיירות ואטרקציות',
      description: 'קידום אתרי תיירות עם דגש על חיפושים עונתיים ואזוריים',
      features: ['חיפושים עונתיים', 'תוכן תיירותי מקומי', 'אופטימיזציה למובייל'],
      cta: 'למידע נוסף על SEO לתיירות',
      color: 'teal'
    },
    {
      icon: Building,
      title: 'עסקים וחברות',
      description: 'קידום עסקים כלליים עם דגש על בניית מותג דיגיטלי חזק',
      features: ['בניית סמכות מותג', 'תוכן עסקי מקצועי', 'ליד גנרציה מתקדמת'],
      cta: 'למידע נוסף על SEO לעסקים',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; gradient: string; hover: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600', hover: 'hover:from-blue-600 hover:to-blue-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600', hover: 'hover:from-green-600 hover:to-green-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600', hover: 'hover:from-orange-600 hover:to-orange-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600', hover: 'hover:from-purple-600 hover:to-purple-700' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', gradient: 'from-teal-500 to-teal-600', hover: 'hover:from-teal-600 hover:to-teal-700' },
      red: { bg: 'bg-red-100', text: 'text-red-600', gradient: 'from-red-500 to-red-600', hover: 'hover:from-red-600 hover:to-red-700' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" itemProp="name">
            התעשיות שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            אנחנו מתמחים במגוון תחומים ומכירים לעומק את האתגרים הייחודיים של כל תעשייה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const colorClasses = getColorClasses(industry.color);
            const Icon = industry.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${colorClasses.gradient} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">התמחויות:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses.gradient} ml-3 flex-shrink-0`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${colorClasses.gradient} ${colorClasses.hover} text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group`}>
                  <span className="text-sm">{industry.cta}</span>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Success Stories Preview */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              סיפורי הצלחה מהתעשיות שלנו
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              כמה דוגמאות לתוצאות שהשגנו עבור לקוחותינו בתחומים שונים. 
              למקרי לקוח מפורטים יותר, בקרו ב<a href="https://eran-fixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">פלטפורמה המרכזית</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">+450%</div>
              <div className="text-sm text-gray-600 mb-1">עלייה בתנועה אורגנית</div>
              <div className="text-xs text-gray-500">משרד עו"ד בתל אביב</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+280%</div>
              <div className="text-sm text-gray-600 mb-1">עלייה בהזמנות</div>
              <div className="text-xs text-gray-500">מסעדה בירושלים</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">+320%</div>
              <div className="text-sm text-gray-600 mb-1">עלייה במכירות</div>
              <div className="text-xs text-gray-500">חנות איקומרס</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;