// This is a React functional component named Button
// It takes in props as an argument, which includes children (the content inside the button) and any additional props
export default function Button({ children, ...props }) {
  return (
    // The component renders a button element with the following properties and styles
    <button
      // Responsive padding and text size classes for different screen sizes
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      // Spread operator is used to pass down any additional props provided to the button element
      {...props}
    >
      {/* The content inside the button, passed as a child */}
      {children}
    </button>
  );
}
