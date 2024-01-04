// Import the Input component from the specified file path
import Input from './Input.jsx';

// This is a React functional component named NewProject
export default function NewProject() {
  // The component returns a div element containing a menu, buttons, and Input components
  return (
    <div className="w-[35rem] mt-16">
      {/* Menu for navigation or actions, positioned at the top right */}
      <menu className="flex items-center justify-end gap-4 my-4">
        {/* Cancel button */}
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        {/* Save button */}
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      {/* Section for input fields using the Input component */}
      <div>
        {/* Input for project title */}
        <Input label="Title" />
        {/* Input for project description, using textarea */}
        <Input label="Description" textarea />
        {/* Input for due date */}
        <Input label="Due Date" />
      </div>
    </div>
  );
}
