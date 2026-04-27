import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

      <Routes>
        
        {/* 3. The Individual Routes (The Pages) */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-6 text-center">
          <p>© 2026 Tashi | Professional Portfolio</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}