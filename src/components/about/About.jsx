import "./about.css";
import lines from '../../assets/lines.png';
import group from '../../assets/Group 28.png'

export default function About() {
  return (
    <section className="about">
      <svg
        className="background-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1512 1071"
        preserveAspectRatio="none"
      >
        <path
          d="M0.000244141 990.004V-0.00146484H1512V990.004C1415.2 1081.63 1174.57 1113.21 786.915 990.004C432.803 877.458 117.413 898.373 0.000244141 990.004Z"
          fill="#1B1C37"
        />
      </svg>

      <div className="lines">
        <img src={lines} alt="lines shape" />
      </div>

      <div className="group">
        <img src={group} alt="complex shape" />
      </div>

      <h1>About Me</h1>
    </section>
  );
}
