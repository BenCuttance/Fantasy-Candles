import "./Navigation.css";

export default function Navigation(props) {
  return (
    <div className="nav-container">
      <button
        onClick={() => props.handlePageChange("About")}
        className={props.currentPage === "About" ? "selected" : ""}
      >
        ABOUT ME
      </button>
      <button
        onClick={() => props.handlePageChange("Portfolio")}
        className={props.currentPage === "Portfolio" ? "selected" : ""}
      >
        PORTFOLIO
      </button>
      <button
        onClick={() => props.handlePageChange("Contact")}
        className={props.currentPage === "Contact" ? "selected" : ""}
      >
        CONTACT
      </button>
      <button
        onClick={() => props.handlePageChange("Resume")}
        className={props.currentPage === "Resume" ? "selected" : ""}
      >
        RESUME
      </button>
    </div>
  );
}
