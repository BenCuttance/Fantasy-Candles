import Project from "../components/Project";
import "./Portfolio.css";

const projects = [
  {
    title: "Note Taker",
    url: "https://note-taker-natasa.herokuapp.com/",
    githubUrl: "https://github.com/Natasa00/Note_Taker",
    description: "Write and save notes",
    image: "/notetakerimage.png",
  },
  {
    title: "Virtual Adventures",
    url: "https://robinsonfdossantos.github.io/Virtual_Adventures/",
    githubUrl: "https://github.com/robinsonfdossantos/Virtual_Adventures",
    description: "Find the best tourist destinations",
    image: "/virtualadventuresimage.png",
  },
  {
    title: "Bloom and Barter",
    url: "https://bloom-and-barter-3911749eadd3.herokuapp.com/",
    githubUrl: "https://github.com/jnaoroji/Bloom_and_Barter",
    description: "An online community site for plant lovers",
    image: "/bloomandbarterimage.png",
  },
  {
    title: "Tech Blog",
    url: "https://natasa-blog-123-6be5e7bcee4c.herokuapp.com/",
    githubUrl: "https://github.com/Natasa00/Tech_Blog",
    description: "CMS-style tech blog",
    image: "/techblogimage.png",
  },
  {
    title: "Weather Dashboard",
    url: "https://natasa00.github.io/WeatherDashboard/",
    githubUrl: "https://github.com/Natasa00/WeatherDashboard",
    description: "Check weather with OpenWeather API",
    image: "/weatherdashboardimage.png",
  },
  {
    title: "Text Editor",
    url: "https://text-editor202-27272120115b.herokuapp.com/",
    githubUrl: "https://github.com/Natasa00/Text_Editor",
    description: "Text Editor PWA",
    image: "/texteditorimage.png",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="heading portfolio-heading">PORTFOLIO</h1>
      <div className="container">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}
