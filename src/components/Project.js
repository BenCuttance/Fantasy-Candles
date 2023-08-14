import "./Project.css";
import { ReactComponent as Github } from "../icons/github.svg";

export default function Project(props) {
  return (
    <div className="project">
      <img src={`/natasa-portfolio${props.image}`} />
      <div className="project-title-container">
        <a href={props.url} className="project-title">
          {props.title}
        </a>
        <a href={props.githubUrl} className="project-github">
          <Github />
        </a>
      </div>

      <p className="project-description">{props.description}</p>
    </div>
  );
}
