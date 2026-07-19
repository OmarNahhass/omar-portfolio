import React, { useEffect } from "react";
import "./styles.css";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    document.title = "Omar Nahhas";
  }, []);

  return (
    <div className="container">
      <Hero />
      <hr className="divider" />
      <Education />
      <Experience />
      <Projects />
      <footer className="footer">
        <p>© 2026 Omar Nahhas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
