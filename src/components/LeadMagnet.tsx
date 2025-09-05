import React, { useState } from 'react';
import { Download, MapPin, Target, TrendingUp, ArrowLeft, CheckCircle, Mail, Phone } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    business: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // יצירת הודעת וואטסאפ עם הפרטים מהטופס
    const message = `בקשה למפת קלאסטרים חינמית:

📝 שם: ${formData.name}
📧 אימייל: ${formData.email}
📱 טלפון: ${formData.phone}
🌐 אתר: ${formData.website || 'לא צוין'}
🏢 תחום: ${formData.business || 'לא צוין'}

אודה לקבלת מפת הקלאסטרים ופגישת יעוץ חינמית.`;
    
    // קידוד ההודעה עבור URL
    const encodedMessage = encodeURIComponent(message);
    
    // פתיחת וואטסאפ
    const whatsappUrl = `https://wa.me/972522126366?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="lead-magnet" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">תודה רבה!</h2>
            <p className="text-xl text-gray-600 mb-6">
              המפה הקלאסטרים שלכם בדרך אליכם
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">מה הלאה?</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📧 תקבלו את המפה תוך 24 שעות למייל</li>
                <li>📞 נצור איתכם קשר לתיאום פגישת יעוץ חינמית</li>
                <li>📊 נציג לכם תוכנית פעולה של 30 יום</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Download className="h-4 w-4 ml-2" />
              <span className="text-sm font-medium">דוח חינמי ללא התחייבות</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              קבלו מפת קלאסטרים ראשונית
              <span className="text-blue-200"> חינם</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              ניתוח ראשוני של 5-7 קלאסטרים סמנטיים + הצעות תוכן מדויקות. השירות מבוסס על
              <a href="https://ai.eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline mr-1 ml-1">טכנולוגיית AI</a>
              מתקדמת ומשולב עם <a href="https://eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">קידום אתרים</a> מקצועי.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, text: 'מיפוי הזדמנויות SEO חדשות' },
                { icon: Target, text: 'זיהוי כוונות חיפוש רלוונטיות' },
                { icon: TrendingUp, text: 'הצעות לשיפור דירוגים קיימים' }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg ml-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-blue-100">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-3">מה אתם מקבלים:</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>✓ מפת 5-7 קלאסטרים מבוססת AI</li>
                <li>✓ ניתוח תחרותי ראשוני</li>
                <li>✓ המלצות לתוכן חדש</li>
                <li>✓ פגישת יעוץ של 30 דקות (חינם)</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  התחילו עכשיו
                </h3>
                <p className="text-gray-600">
                  מלאו פרטים ותקבלו את המפה תוך 24 שעות
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="הכניסו את שמכם"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="050-1234567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    כתובת האתר
                  </label>
                  <input
                    type="url"
                    name="website"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://your-website.com"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תחום העסק
                  </label>
                  <select
                    name="business"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={formData.business}
                    onChange={handleInputChange}
                  >
                    <option value="">בחרו תחום</option>
                    <option value="law">משפטים</option>
                    <option value="medical">רפואה/בריאות</option>
                    <option value="restaurant">מסעדנות</option>
                    <option value="ecommerce">איקומרס</option>
                    <option value="tourism">תיירות</option>
                    <option value="business">עסקי/תאגידי</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  קבלו את המפה חינם
                  <ArrowLeft className="h-5 w-5 mr-2" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * שדות חובה. אנחנו לא נשתף את הפרטים עם צד שלישי
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;