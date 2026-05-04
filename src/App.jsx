import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Portfolio</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
