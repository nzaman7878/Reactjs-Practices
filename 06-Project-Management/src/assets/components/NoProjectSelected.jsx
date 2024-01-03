// Importing the 'noProjectImage' from the specified path and the 'Button' component.\
import React from 'react';
import Button from './Button';
import noProjectImage from "../assets/no-projects.png";


// This is a functional component named NoProjectSelected that takes 'onStartAddProject' as its prop.
export default function NoProjectSelected({ onStartAddProject }) {
  // Return a JSX element representing a message when no project is selected.
  return (
    <div className="mt-24 text-center w-2/3">
      {/* Displaying an image for an empty task list */}
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      
      {/* Heading indicating that no project is selected */}
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      
      {/* Description text */}
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      
      {/* Button to create a new project, triggering the 'onStartAddProject' function */}
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
