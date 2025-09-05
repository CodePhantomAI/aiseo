import React from 'react';
import { Scale, Stethoscope, UtensilsCrossed, ShoppingCart, MapPin, Building2, ArrowLeft } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Scale,
      title: 'עורכי דין',
      description: 'קידום משרדי עורכי דין עם דגש על מילות מפתח מקצועיות ובניית אמון',
      results: '+245% תנועה אורגנית',
      caseStudy: 'משרד עו"ד בתל אביב - עלייה של 300% בפניות חדשות',
      color: 'blue'
    },
    {
      icon: Stethoscope,
      title: 'קליניקות ורופאים',
      description: 'קידום מרפאות ורופאים פרטיים עם התמחות בחיפוש מקומי',
      results: '+180% הזמנות תורים',
      caseStudy: 'קליניקת שיניים - עלייה של 220% בלקוחות חדשים',
      color: 'green'
    },
    {
      icon: UtensilsCrossed,
      title: 'מסעדות ובתי אוכל',
      description: 'קידום מסעדות ובתי עסק במזון עם דגש על חיפוש מקומי וביקורות',
      results: '+165% הזמנות',
      caseStudy: 'רשת מסעדות - עלייה של 190% בהזמנות דרך האתר',
      color: 'orange'
    },
    {
      icon: ShoppingCart,
      title: 'איקומרס וחנויות',
      description: 'קידום חנויות אונליין עם התמחות במוצרים ומכירות',
      results: '+320% מכירות',
      caseStudy: 'חנות אופנה אונליין - עלייה של 280% בהכנסות',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'תיירות ואטרקציות',
      description: 'קידום אתרי תיירות ואטרקציות עם דגש על חיפוש עונתי',
      results: '+200% הזמנות',
      caseStudy: 'אתר נופש - עלייה של 250% בהזמנות חופשות',
      color: 'teal'
    },
    {
      icon: Building2,
      title: 'עסקים וחברות',
      description: 'קידום עסקים B2B עם התמחות בלידים איכותיים',
      results: '+175% לידים',
      caseStudy: 'חברת ייעוץ - עלייה של 300% בפניות איכותיות',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; accent: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', accent: 'bg-blue-100' },
      green: { bg: 'bg-green-50', text: 'text-green-600', accent: 'bg-green-100' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', accent: 'bg-orange-100' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', accent: 'bg-purple-100' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', accent: 'bg-teal-100' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', accent: 'bg-indigo-100' }
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
            מתמחים ב<a href="https://eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">קידום אתרים</a> עבור תחומים מגוונים.
            שילוב של <a href="https://ai.eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">בינה מלאכותית</a>,
            <a href="https://eranfixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mr-1 ml-1">בניית אתרים</a>
            ו<a href="https://eran-fixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">שיווק עסקים</a> מותאם לכל תחום.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const colorClasses = getColorClasses(industry.color);
            const Icon = industry.icon;
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className={`${colorClasses.accent} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${colorClasses.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className={`text-2xl font-bold ${colorClasses.text} mb-1`}>
                    {industry.results}
                  </div>
                  <div className="text-sm text-gray-500">
                    תוצאה ממוצעת
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-6 italic">
                  "{industry.caseStudy}"
                </div>
                
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className={`w-full bg-white hover:bg-gray-50 ${colorClasses.text} font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center border-2 border-transparent hover:border-current`}>
                  בקש מקרי לקוח
                  <ArrowLeft className="h-4 w-4 mr-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              סיפורי הצלחה
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              דוגמאות לתוצאות שהשגנו באמצעות{" "}
              <a
                href="https://ai.eranfixer.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                בינה מלאכותית
              </a>{" "}
              ו
              <a
                href="https://eranfixer.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                קידום אתרים
              </a>{" "}
              מתקדם.
              {" "}
              מקרי לקוח נוספים ב
              <a
                href="https://eran-fixer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                שיווק עסקים
              </a>{" "}
              ו
              <a
                href="https://eranfixer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                בניית אתרים
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                industry: 'משפטים', 
                metric: '+300% פניות', 
                time: '4 חודשים',
                description: 'משרד עו"ד מוביל בתחום הנדל"ן'
              },
              { 
                industry: 'רפואה', 
                metric: '+220% תורים', 
                time: '3 חודשים',
                description: 'קליניקת שיניים פרטית'
              },
              { 
                industry: 'מסעדות', 
                metric: '+190% הזמנות', 
                time: '2 חודשים',
                description: 'רשת מסעדות יוקרה'
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">{story.industry}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-1">{story.metric}</div>
                <div className="text-sm text-gray-600 mb-3">{story.time}</div>
                <p className="text-sm text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;