import elena from "./images/elena.png";
import earls from "./images/earls.png";
import keg from "./images/thekeg.png";

export default function Experience() {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>

      <div className="edu-item">
        <img src={elena} alt="Restaurant Elena" className="edu-logo" />
        <div className="edu-body">
          <div className="edu-school">Restaurant Elena</div>
          <div className="edu-degree">Lunch Cook</div>
          <div className="edu-meta">Oct 2025 – Mar 2026 · Montreal, QC</div>
          <ul className="edu-bullets">
            <li>
              Maintained high-throughput production across multiple stations
              under tight time constraints
            </li>
            <li>
              Collaborated in a 2-person team to manage ticket flow and
              prioritize tasks during peak service
            </li>
          </ul>
        </div>
      </div>

      <div className="edu-item">
        <img src={earls} alt="Earls Kitchen + Bar" className="edu-logo" />
        <div className="edu-body">
          <div className="edu-school">Earls Kitchen + Bar</div>
          <div className="edu-degree">Oven Cook</div>
          <div className="edu-meta">May 2024 – Sep 2024 · Vancouver, BC</div>
          <ul className="edu-bullets">
            <li>
              Prepared multiple concurrent dishes in under 10 minutes while
              maintaining quality and safety standards
            </li>
            <li>
              Oversaw 3 kitchen stations, ensuring timely ticket execution
              during high-volume service
            </li>
          </ul>
        </div>
      </div>

      <div className="edu-item">
        <img src={keg} alt="The Keg Steakhouse" className="edu-logo" />
        <div className="edu-body">
          <div className="edu-school">The Keg Steakhouse</div>
          <div className="edu-degree">Salad Tender</div>
          <div className="edu-meta">Jun 2020 – Jun 2022 · Vancouver, BC</div>
          <ul className="edu-bullets">
            <li>
              Prepared and served appetizers and desserts for 500+ guests per
              shift
            </li>
            <li>
              Contributed to a consistent 4.6-star dining experience through
              close collaboration with service staff
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
