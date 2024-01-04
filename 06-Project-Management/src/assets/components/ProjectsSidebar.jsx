// Import the Button component from the specified file path
import Button from './Button.jsx';

// This is a React functional component named ProjectsSidebar
// It takes in a prop onStartAddProject, which is a function to be called when adding a new project is initiated
export default function ProjectsSidebar({ onStartAddProject }) {
  // The component returns an aside element containing a heading, a button, and an empty unordered list
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {/* Heading indicating the section for user projects */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      {/* Button to initiate the creation of a new project, with an onClick event handler */}
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      {/* Placeholder for a list of projects (currently empty) */}
      <ul></ul>
    </aside>
  );
}
