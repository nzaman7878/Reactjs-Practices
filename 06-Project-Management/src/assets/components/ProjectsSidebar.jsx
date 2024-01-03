// This is a React functional component for the Projects Sidebar
export default function ProjectsSidebar() {
  return (
    // Sidebar container with styling classes
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      
      {/* Section heading for the Projects Sidebar */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      
      {/* Button to add a new project */}
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      
      {/* List to display projects (currently empty) */}
      <ul></ul>
    </aside>
  );
}
