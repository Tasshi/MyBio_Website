import { useState } from "react";
import "../App.css";

type CardProps = Readonly<{
  title: string;
  description: string;
}>;

export function CompetencyCard({ title, description }: CardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`card p-6 rounded-lg shadow-sm border cursor-pointer transition-all duration-300 ${
        isClicked
          ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
          : "bg-white text-slate-800 border-slate-100 hover:shadow-lg hover:border-blue-300 hover:scale-105"
      }`}
    >
      <h3 className={`text-xl font-bold mb-2 ${isClicked ? "text-white" : "text-slate-800"}`}>
        {title}
      </h3>
      <p className={isClicked ? "text-blue-100" : "text-slate-600"}>
        {description}
      </p>
    </div>
  );
}