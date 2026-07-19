import concordia from "./images/concordia.png";
import burnabyNorth from "./images/burnabynorth.png";

export default function Education() {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>

      <div className="edu-item">
        <img src={concordia} alt="Concordia University" className="edu-logo" />
        <div className="edu-body">
          <div className="edu-school">Concordia University</div>
          <div className="edu-degree">
            Bachelor of Science in Computer Science (Co-op)
          </div>
          <div className="edu-meta">Sep 2022 – Present · Montreal, QC</div>
          <ul className="edu-bullets">
            <li>
              Relevant coursework: Data Structures, Algorithms, Operating
              Systems, Web Programming, Probability & Statistics, Linear
              Algebra, Artificial Intelelligence
            </li>
            <li>Active member of the Concordia Chess Club</li>
          </ul>
        </div>
      </div>

      <div className="edu-item">
        <img
          src={burnabyNorth}
          alt="Burnaby North Secondary School"
          className="edu-logo"
        />
        <div className="edu-body">
          <div className="edu-school">Burnaby North Secondary School</div>
          <div className="edu-degree">High School Diploma</div>
          <div className="edu-meta">Sep 2017 – Jun 2022 · Burnaby, BC</div>
          <ul className="edu-bullets">
            <li>Cumulative GPA: 4.0/4.0</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
