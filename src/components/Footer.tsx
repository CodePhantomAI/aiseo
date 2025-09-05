import React from 'react';
import { Brain, Mail, Phone, MapPin, ExternalLink, MessageCircle, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Fixier.org</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                <a href="https://eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">קידום אתרים</a> מונחה-בינה מלאכותית עם בקרה אנושית מקצועית.
                נוסף על <a href="https://ai.eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">AI SEO</a>, אנחנו מציעים
                <a href="https://eranfixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mr-1 ml-1">בניית אתרים</a>
                ו<a href="https://eran-fixer.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">שיווק עסקים בישראל</a>.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">השירותים שלנו</h3>
              <ul className="space-y-3">
                {[
                  { name: 'קידום אתרים באמצעות AI', link: '#services' },
                  { name: 'מחקר מילות מפתח וקלאסטרים', link: '#services' },
                  { name: 'כתיבת תוכן מונחה-בינה', link: '#services' },
                  { name: 'אופטימיזציה טכנית', link: '#services' },
                  { name: 'בניית סמכות וקישורים', link: '#services' },
                  { name: 'ניהול מוניטין חיפוש', link: '#services' }
                ].map((service, index) => (
                  <li key={index}>
                    <a href={service.link} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-6">התעשיות שלנו</h3>
              <ul className="space-y-3">
                {[
                  { name: 'עורכי דין', link: '#industries' },
                  { name: 'קליניקות ורופאים', link: '#industries' },
                  { name: 'מסעדות ובתי אוכל', link: '#industries' },
                  { name: 'איקומרס וחנויות', link: '#industries' },
                  { name: 'תיירות ואטרקציות', link: '#industries' },
                  { name: 'עסקים וחברות', link: '#industries' }
                ].map((industry, index) => (
                  <li key={index}>
                    <a href={industry.link} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">משאבים</h3>
              <ul className="space-y-3 mb-6">
                {[
                  { name: 'בלוג ומאמרים', link: '#resources' },
                  { name: 'מילון SEO-AI', link: '#resources' },
                  { name: 'תבניות בריף', link: '#resources' },
                  { name: 'מקרי לקוח', link: '#resources' },
                  { name: 'כלים מומלצים', link: '#resources' },
                  { name: 'שאלות נפוצות', link: '#contact' }
                ].concat([
                  { name: 'קידום אתרים', link: 'https://eranfixer.co.il', external: true },
                  { name: 'בניית אתרים', link: 'https://eranfixer.com', external: true },
                  { name: 'שיווק עסקים', link: 'https://eran-fixer.com', external: true },
                  { name: 'AI SEO', link: 'https://ai.eranfixer.co.il', external: true }
                ].map((resource, index) => (
                  <li key={index}>
                    <a href={resource.link} {...(resource.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Quick Contact */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold mb-3">צרו קשר מהיר</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Mail className="h-4 w-4 ml-2" />
                    <a href="mailto:info@fixier.org" itemProp="email">info@fixier.org</a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="h-4 w-4 ml-2" />
                    <a href="tel:+972522126366" itemProp="telephone">052-212-6366</a>
                  </div>
                </div>
                <a href="#contact" className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center">
                  <Calendar className="h-4 w-4 ml-1" />
                  צור קשר
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Fixier.org. כל הזכויות שמורות.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                תנאי שימוש
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                מדיניות פרטיות
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                נגישות
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                קוקיס
              </a>
              <a href="https://eranfixer.co.il" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                קידום אתרים
                <ExternalLink className="h-4 w-4 mr-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://wa.me/972522126366" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 inline-block">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;