import "./projects.css";
import Projects from "../projects/Projects";

const Projects = () => {
  return (
    <div className="proj">
      <div className="proj-text">
        <h1 className="proj-title">My Projects</h1>
        <p className="proj-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          saepe voluptatem neque nostrum ea maxime facere eum iure earum impedit
          veritatis quam ut quibusdam minima nemo, numquam dicta. Iure, nulla?
        </p>
      </div>
      <div className="proj-list">
        <Projects />
      </div>
    </div>
  );

  export default Projects;
};
