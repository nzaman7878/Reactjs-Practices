// This is a React functional component named Input
// It takes in props as an argument, including label, textarea, and any additional props
export default function Input({ label, textarea, ...props }) {
  // Define a string containing Tailwind CSS classes for styling the input elements
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  // The component returns a paragraph element containing a label and either an input or textarea element
  return (
    <p className="flex flex-col gap-1 my-4">
      {/* Label for the input or textarea, styled with Tailwind CSS classes */}
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {/* Conditional rendering: If textarea prop is true, render a textarea element; otherwise, render an input element */}
      {textarea ? (
        // If textarea, apply the defined classes and spread any additional props to the textarea element
        <textarea className={classes} {...props} />
      ) : (
        // If not textarea, apply the defined classes and spread any additional props to the input element
        <input className={classes} {...props} />
      )}
    </p>
  );
}
