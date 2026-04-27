import { useState, useEffect } from "react";
import { CompetencyCard } from "../components/CompetencyCard";
import "../App.css";

const competencies = [
  { title: "IT Infrastructure", description: "Designing secure, scalable, and resilient IT environments." },
  { title: "Risk Management", description: "Implementing structured risk frameworks to mitigate organizational risks." },
  { title: "Corporate Strategy", description: "Driving strategic planning initiatives aligned with long-term goals." },
  { title: "Governance & Compliance", description: "Ensuring regulatory compliance and strengthening frameworks." },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Welcome to My Professional Bio
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Discover my expertise in IT governance, risk management, and strategic leadership
            </p>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about py-16 md:py-24 bg-slate-50 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-800">My Bio Data</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                I am an IT Officer and Company Secretary specializing in risk governance,
                corporate strategy, and digital transformation. With extensive experience
                in building resilient IT infrastructures and implementing comprehensive
                compliance frameworks, I help organizations navigate the complex landscape
                of modern business challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section id="competencies" className={`competencies py-16 md:py-24 transition-all duration-1000 ${visibleSections.has('competencies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800">Core Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {competencies.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${visibleSections.has('competencies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <CompetencyCard
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section id="highlight" className={`highlight py-16 md:py-24 bg-gradient-to-r from-gray-100 to-blue-50 text-black transition-all duration-1000 ${visibleSections.has('highlight') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Focus</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
            My work is centered on building resilient organizations through integrated
            technology solutions and strategic leadership. I believe in creating
            sustainable value through innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Portfolio
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}