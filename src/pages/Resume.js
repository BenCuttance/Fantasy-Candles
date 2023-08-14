import ResumePdf from "../assets/resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <h1 className="heading">RESUME</h1>

      <a
        href={ResumePdf}
        className="resume-link"
        download="Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="resume-icon">&#x1f4CE;</span> Download resume
      </a>

      <h2 className="resume-skills-heading">My skills</h2>
      <ul className="resume-skills-list">
        <li>HTML, CSS, JavaScript</li>
        <li>ReactJS, NodeJS</li>
        <li>MongoDB, MySQL</li>
      </ul>
    </div>
  );
}
