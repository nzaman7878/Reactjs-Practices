import { useRef } from 'react';

// Import the Input component from the specified file path
import Input from './Input.jsx';

// This is a React functional component named NewProject
// It takes in a prop onAdd, which is a function to be called when a new project is added
export default function NewProject({ onAdd }) {
  // Create refs for input fields to store their values
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // Function to handle the save action
  function handleSave() {
    // Retrieve values from the input fields
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Perform validation if needed

    // Call the onAdd function with the entered project data
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  // The component returns a div element containing a menu, input fields, and save/cancel buttons
  return (
    <div className="w-[35rem] mt-16">
      {/* Menu for navigation or actions, positioned at the top right */}
      <menu className="flex items-center justify-end gap-4 my-4">
        {/* Cancel button */}
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        {/* Save button with an onClick event handler */}
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      {/* Section for input fields using the Input component */}
      <div>
        {/* Input for project title */}
        <Input type="text" ref={title} label="Title" />
        {/* Input for project description, using textarea */}
        <Input ref={description} label="Description" textarea />
        {/* Input for due date */}
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
