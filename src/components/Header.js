import Navigation from "./Navigation";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="header-logo">
        <div>NATASA</div>
        <div className="line" />
        <div className="header-logo-lastname">KILIBARDA</div>
      </div>
      <Navigation
        handlePageChange={props.handlePageChange}
        currentPage={props.currentPage}
      />
    </div>
  );
}
