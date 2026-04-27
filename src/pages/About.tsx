import { Link } from 'react-router-dom';
import "../App.css";
export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gray-600 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tashi</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Bridging the gap between technical infrastructure and corporate governance 
             to build resilient, strategy-driven organizations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Left Column: Bio */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">Professional Profile</h2>
          <p className="text-slate-700 leading-relaxed">
            I am an **IT Officer and Company Secretary** specializing in risk governance, 
            corporate strategy, and digital transformation. My career is centered on aligning 
            technology with business objectives to enhance operational efficiency and 
            long-term sustainability.
          </p>
          <p className="text-slate-700 leading-relaxed">
            With experience in **DPL’s corporate strategic planning** and the 
            **DHI 10x road map**, I focus on developing frameworks that ensure 
            regulatory compliance while driving innovation through digital solutions.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 italic text-blue-900">
            "My mission is to deliver measurable value through integrated technology solutions 
            and strategic leadership in dynamic business environments."
          </div>
        </div>

        {/* Right Column: Fast Facts */}
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">Core Focus</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Risk Governance
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Digital Transformation
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Strategic Planning
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Compliance
              </li>
            </ul>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Let's Connect</h3>
            <p className="text-sm text-slate-600 mb-4">Interested in strategy or risk frameworks?</p>
            <Link 
              to="/contact" 
              className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}