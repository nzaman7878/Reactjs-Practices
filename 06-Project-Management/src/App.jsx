// Importing the 'useState' hook from React, as well as the necessary components.
import React from 'react';
import { useState } from 'react';
import NewProject from './assets/components/NewProject.jsx';
import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import ProjectsSidebar from './assets/components/ProjectsSidebar.jsx';

// This is the main App component.
function App() {
  // Using the 'useState' hook to manage the state of projects.
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // Initially, no project is selected (undefined).
    projects: []
  });

  // Function to handle the start of adding a new project.
  function handleStartAddProject() {
    // Update the state to indicate that a new project is being added.
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Variable to determine the content to be rendered based on the selected project.
  let content;

  // Check if a new project is being added.
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  }
  // Check if no project is selected.
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // Render the main content of the application.
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* ProjectsSidebar component for project navigation and actions */}
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />

      {/* Render the content based on the selected project */}
      {content}
    </main>
  );
}

// Exporting the App component as the default export.
export default App;
