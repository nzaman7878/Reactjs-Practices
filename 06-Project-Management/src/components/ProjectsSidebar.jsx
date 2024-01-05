// Import the Button component from the specified file path
import Button from './Button.jsx';

// This is a React functional component named ProjectsSidebar
// It takes in props: onStartAddProject for initiating project addition, and projects for displaying a list of projects
export default function ProjectsSidebar({ onStartAddProject, projects }) {
  // The component returns an aside element containing a heading, a button to add a project, and a list of projects
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {/* Heading indicating the section for user projects */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      {/* Button to initiate the creation of a new project, with an onClick event handler */}
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      {/* List of projects, each rendered as a button */}
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            {/* Button for each project, styled with Tailwind CSS classes */}
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {/* Display the title of the project */}
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
