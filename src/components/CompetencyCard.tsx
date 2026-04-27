import { useState } from "react";
import "../App.css";

type CardProps = Readonly<{
  title: string;
  description: string;
}>;

export function CompetencyCard({ title, description }: CardProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card p-6 rounded-xl shadow-md border cursor-pointer transition-all duration-300 transform ${
        isClicked
          ? "bg-blue-600 text-white border-blue-600 shadow-xl scale-105 rotate-1"
          : isHovered
          ? "bg-blue-50 text-slate-800 border-blue-300 shadow-lg scale-102"
          : "bg-white text-slate-800 border-slate-200 hover:shadow-lg hover:border-blue-300 hover:scale-102"
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-pressed={isClicked}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-xl font-bold ${isClicked ? "text-white" : "text-slate-800"}`}>
          {title}
        </h3>
        <div className={`transition-transform duration-300 ${isClicked ? 'rotate-45' : isHovered ? 'rotate-12' : ''}`}>
          <svg className={`w-6 h-6 ${isClicked ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
      <p className={`text-sm leading-relaxed ${isClicked ? "text-blue-100" : "text-slate-600"}`}>
        {description}
      </p>
      {isClicked && (
        <div className="mt-4 pt-4 border-t border-blue-400">
          <p className="text-blue-100 text-xs">
            Click again to collapse
          </p>
        </div>
      )}
    </div>
  );
}