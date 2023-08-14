import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <></>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      <div className="content">{renderPage()}</div>
      <Footer />
    </div>
  );
}

export default App;
