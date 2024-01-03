// This is a functional component named Input that takes props as its argument.
export default function Input({ label, textarea, ...props }) {
    // Define a string of tailwindcss classes for styling the input or textarea.
    const classes =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  
    // Return a JSX element representing a paragraph with label and input or textarea.
    return (
      <p className="flex flex-col gap-1 my-4">
        {/* Label for the input or textarea */}
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
  
        {/* Render either a textarea or an input based on the 'textarea' prop */}
        {textarea ? (
          <textarea className={classes} {...props} />
        ) : (
          <input className={classes} {...props} />
        )}
      </p>
    );
  }
  