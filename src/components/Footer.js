import { ReactComponent as Linkedin } from "../icons/linkedin.svg";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as StackOverflow } from "../icons/stackoverflow.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://github.com/Natasa00" target="_blank" rel="noreferrer">
        <Github className="icon" />
      </a>
      <a
        href="https://stackoverflow.com/users/22331000/natasa00"
        target="_blank"
        rel="noreferrer"
      >
        <StackOverflow className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/natasa-kilibarda-24b243146/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="icon" />
      </a>
    </div>
  );
}
