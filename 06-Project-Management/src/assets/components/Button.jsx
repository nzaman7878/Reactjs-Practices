// This is a functional component named Button that takes children and props as its arguments.
export default function Button({ children, ...props }) {
    // Return a button element with specified styling and additional props.
    return (
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        {...props} // Spread additional props to the button element.
      >
        {children} {/* Display the content (children) inside the button. */}
      </button>
    );
  }
  