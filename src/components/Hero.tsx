import React from 'react';
import { ArrowLeft, Brain, TrendingUp, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Brain className="h-4 w-4 ml-2" />
            SEO מונחה-בינה מלאכותית
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" itemProp="headline">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              50% אדם
            </span>
            {' '}+{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              50% AI
            </span>
            <br />
            <span className="text-gray-900">
              = 100% תוצאות מדידות
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed" itemProp="description">
            SEO מונחה־בינה שמייצר תוכן ממוקד־כוונה, מבנה טכני חזק וקישורים חכמים
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            פחות רעש, יותר כניסות איכותיות. עם בקרה אנושית מלאה. 
            פיתוח מתקדם מבית <a href="https://fixier.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Fixier.org</a>.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Target className="h-5 w-5 text-blue-600 ml-2" />
              <span className="text-gray-700 font-medium">כוונות חיפוש מדויקות</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Zap className="h-5 w-5 text-green-600 ml-2" />
              <span className="text-gray-700 font-medium">תוצאות תוך יומיים</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <TrendingUp className="h-5 w-5 text-purple-600 ml-2" />
              <span className="text-gray-700 font-medium">מדידה מתמשכת</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#lead-magnet" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
              קבלו דמו
              <ArrowLeft className="h-5 w-5 mr-2" />
            </a>
            <a href="#lead-magnet" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 bg-white hover:bg-blue-50">
              בנה מפת קלאסטרים עכשיו
            </a>
          </div>

          {/* Secondary Message */}
          <p className="text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
            מפת קלאסטרים ראשונית תוך יומיים + תוכנית 30 יום ללידים אורגניים.
            התהליך מתבצע בפלטפורמה הייעודית: <a href="https://fixier.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">fixier.org</a>
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="bg-white/80 p-3 rounded-xl shadow-lg backdrop-blur-sm">
          <Brain className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden lg:block">
        <div className="bg-white/80 p-3 rounded-xl shadow-lg backdrop-blur-sm">
          <TrendingUp className="h-6 w-6 text-green-600" />
        </div>
      </div>
      <div className="absolute bottom-20 left-20 hidden lg:block">
        <div className="bg-white/80 p-3 rounded-xl shadow-lg backdrop-blur-sm">
          <Target className="h-6 w-6 text-purple-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;