import { CompetencyCard } from "../components/CompetencyCard";
import "../App.css";

const competencies = [
  { title: "IT Infrastructure", description: "Designing secure, scalable, and resilient IT environments." },
  { title: "Risk Management", description: "Implementing structured risk frameworks to mitigate organizational risks." },
  { title: "Corporate Strategy", description: "Driving strategic planning initiatives aligned with long-term goals." },
  { title: "Governance & Compliance", description: "Ensuring regulatory compliance and strengthening frameworks." },
];

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section className="about py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">My Bio Data</h2>
          <p className="text-lg leading-relaxed text-slate-700 max-w-3xl">
            I am an IT Officer and Company Secretary specializing in risk governance, 
            corporate strategy, and digital transformation.
          </p>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="competencies py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((item, index) => (
              <CompetencyCard 
                key={index} 
                title={item.title} 
                description={item.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlight py-12 bg-gray-100 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Focus</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            My work is centered on building resilient organizations through integrated 
            technology solutions and strategic leadership.
          </p>
        </div>
      </section>
    </>
  );
}