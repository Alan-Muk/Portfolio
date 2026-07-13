import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:owner/:repo" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}