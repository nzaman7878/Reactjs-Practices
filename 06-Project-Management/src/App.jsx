import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';

// Main App component
function App() {
  // State to manage project-related information
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // Function to handle the initiation of adding a new project
  function handleStartAddProject() {
    // Update state to set the selectedProjectId to null
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Function to handle the addition of a new project
  function handleAddProject(projectData) {
    // Generate a random projectId
    const projectId = Math.random();

    // Create a new project with the provided data and generated id
    const newProject = {
      ...projectData,
      id: projectId,
    };

    // Update state to add the new project to the projects array
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Variable to determine the content to be rendered based on the selectedProjectId
  let content;

  // If no project is selected (selectedProjectId is null), display the NewProject component
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } 
  // If no project is currently selected and not in the process of adding a new project, display the NoProjectSelected component
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // The main component returns a main element containing the ProjectsSidebar and the determined content
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* ProjectsSidebar component with the ability to initiate adding a new project and the list of projects */}
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {/* Rendered content based on the selectedProjectId */}
      {content}
    </main>
  );
}

export default App;
