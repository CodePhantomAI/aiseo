import React from 'react';
import { BookOpen, FileText, Download, ExternalLink, Calendar, Users, ArrowLeft } from 'lucide-react';

const Resources: React.FC = () => {
  const blogPosts = [
    {
      title: 'איך לבנות קלאסטרים סמנטיים בצורה שמייצרת לקוחות',
      excerpt: 'מדריך שלב אחר שלב לבניית קלאסטרים שמקדמים את העסק בחיפושים אורגניים',
      date: '15 ינואר 2025',
      readTime: '8 דקות קריאה',
      category: 'אסטרטגיה',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    {
      title: 'מתי AI טועה ב-SEO ואיך אנחנו מתקנים',
      excerpt: 'הבנת המגבלות של AI בקידום אתרים ואיך לשלב בינה אנושית בתהליך',
      date: '10 ינואר 2025',
      readTime: '6 דקות קריאה',
      category: 'AI & SEO',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    },
    {
      title: 'מדריך CWV לעסקים – מסביר פשוט, משפיע מהר',
      excerpt: 'כל מה שצריך לדעת על Core Web Vitals ואיך לשפר אותם לתוצאות SEO מיטביות',
      date: '5 ינואר 2025',
      readTime: '10 דקות קריאה',
      category: 'טכני',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'מילון SEO-AI',
      description: 'מושגים ומונחים חיוניים בעולם קידום האתרים והבינה המלאכותית',
      type: 'מילון',
      color: 'blue'
    },
    {
      icon: Download,
      title: 'תבניות בריף לכתיבת תוכן',
      description: 'תבניות מוכנות ליצירת בריפים חכמים לכתיבת תוכן מקדם',
      type: 'תבניות',
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'מקרי לקוח מפורטים',
      description: 'סיפורי הצלחה של לקוחותינו עם נתונים ותוצאות מדויקים',
      type: 'מקרי לקוח',
      color: 'purple'
    },
    {
      icon: ExternalLink,
      title: 'כלים מומלצים לSEO',
      description: 'רשימת כלים חיוניים למחקר מילות מפתח, ניתוח תחרותי ומעקב דירוגים',
      type: 'כלים',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; gradient: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" itemProp="name">
            משאבים ולמידה
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            מרכז הידע שלנו עם מדריכים לשיפור <a href="https://eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">קידום האתרים</a>,
            <a href="https://ai.eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mr-1 ml-1">בינה מלאכותית</a> ו<a href="https://eran-fixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">שיווק עסקים</a>.
            כלים לכל מי שמתעניין ב<a href="https://eranfixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">בניית אתרים</a> מקצועיים.
          </p>
        </div>

        {/* Blog Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">מאמרים חדשים</h3>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              פנו לייעוץ
              <ArrowLeft className="h-4 w-4 mr-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      {post.date}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button onClick={(e) => {e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      בקש מידע
                      <ArrowLeft className="h-3 w-3 mr-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              כלים ומשאבים
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              משאבים מקצועיים שיעזרו לכם להעמיק את הידע בSEO ובבינה מלאכותית
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const colorClasses = getColorClasses(resource.color);
              const Icon = resource.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`${colorClasses.bg} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${colorClasses.text}`} />
                  </div>
                  <div className={`text-xs font-medium ${colorClasses.text} mb-2`}>
                    {resource.type}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className={`text-sm font-medium ${colorClasses.text} hover:underline flex items-center`}>
                    בקש גישה
                    <ArrowLeft className="h-3 w-3 mr-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              שאלות נפוצות
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              תשובות לשאלות הכי נפוצות על שירותי ה-AI SEO שלנו.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                q: 'מה ההבדל בין SEO רגיל ל-AI SEO?',
                a: 'AI SEO משתמש בכלי בינה מלאכותית לניתוח מהיר יותר של נתונים, יצירת תוכן ואופטימיזציה - אך עם בקרה אנושית מלאה לוודא איכות ודיוק.'
              },
              {
                q: 'כמה זמן לוקח לראות תוצאות?',
                a: 'בדרך כלל רואים שיפורים ראשונים תוך 30-45 יום, עם תוצאות משמעותיות תוך 3-4 חודשים. זה תלוי במצב הנוכחי של האתר והתחרותיות של השוק.'
              },
              {
                q: 'האם AI יכול להחליף כותב תוכן אנושי?',
                a: 'לא לגמרי. AI מסייע ומאיץ את התהליך, אבל כל תוכן עובר עריכה אנושית מקצועית לוודא דיוק, ניואנס ואיכות גבוהה.'
              },
              {
                q: 'איך אתם מודדים הצלחה?',
                a: 'אנחנו מודדים עלייה בדירוגים, תנועה אורגנית, זמן בדף, שיעור המרות ולידים. כל לקוח מקבל דוח חודשי מפורט עם כל המדדים הרלוונטיים.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;