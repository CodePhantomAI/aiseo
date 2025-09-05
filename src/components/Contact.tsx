import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Calendar, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-3xl p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">תודה על הפנייה!</h2>
            <p className="text-xl text-gray-600 mb-6">
              קיבלנו את הפנייה שלכם ונחזור אליכם תוך 24 שעות
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">מה הלאה?</h3>
              <ul className="text-sm text-gray-700 space-y-1 text-right">
                <li>📧 נשלח לכם אימייל עם פרטים נוספים</li>
                <li>📞 נצור קשר לתיאום פגישה</li>
                <li>📊 נכין לכם הצעה מותאמת אישית</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" itemProp="name">
            בואו נתחיל לעבוד יחד
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            מוכנים לקחת את ה-SEO שלכם לשלב הבא? צרו קשר ונתחיל לבנות אסטרטגיה מנצחת
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">צרו קשר</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg ml-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">אימייל</div>
                  <div className="text-gray-600">info@eranfixer.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg ml-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">טלפון</div>
                  <div className="text-gray-600">052-212-6366</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg ml-4">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">וואטסאפ</div>
                  <div className="text-gray-600">052-212-6366</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg ml-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">כתובת</div>
                  <div className="text-gray-600">תל אביב, ישראל</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">פעולות מהירות</h4>
              <div className="space-y-3">
                <a href="https://calendly.com/eranfixer" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Calendar className="h-4 w-4 ml-2" />
                  קביעת פגישה
                </a>
                <a href="https://wa.me/972522126366" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 ml-2" />
                  שיחה בוואטסאפ
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">שלחו לנו הודעה</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                      placeholder="050-1234567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם החברה
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                      placeholder="שם החברה שלכם"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    איזה שירות מעניין אתכם?
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">בחרו שירות</option>
                    <option value="full-seo">קידום אתרים מקיף</option>
                    <option value="keyword-research">מחקר מילות מפתח</option>
                    <option value="content-ai">כתיבת תוכן מונחה-בינה</option>
                    <option value="technical">אופטימיזציה טכנית</option>
                    <option value="link-building">בניית קישורים</option>
                    <option value="consultation">יעוץ SEO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ספרו לנו על הפרויקט
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder="ספרו לנו על המטרות שלכם, האתגרים הנוכחיים וכיצד נוכל לעזור לכם..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  שליחת הודעה
                  <Send className="h-5 w-5 mr-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;