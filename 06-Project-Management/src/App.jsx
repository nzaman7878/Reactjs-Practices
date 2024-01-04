import { useState } from 'react';

import NewProject from './assets/components/NewProject.jsx';
import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import ProjectsSidebar from './assets/components/ProjectsSidebar.jsx';

// This is the main App component
function App() {
  // State for managing project-related information
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  // Function to handle the initiation of adding a new project
  function handleStartAddProject() {
    // Update state to set the selectedProjectId to null
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Variable to determine the content to be rendered based on the selectedProjectId
  let content;

  // If no project is selected (selectedProjectId is null), display the NewProject component
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } 
  // If no project is currently selected and not in the process of adding a new project, display the NoProjectSelected component
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // The main component returns a main element containing the ProjectsSidebar and the determined content
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}
export default App;