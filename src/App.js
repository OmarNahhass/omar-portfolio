import React, { useEffect } from "react";
import "./styles.css";
import Hero from "./components/Hero";
import Education from "./components/Education";
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
      <Projects />
      <footer className="footer">
        <p>© 2026 Omar Nahhas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
