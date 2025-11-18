export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-my-light-mustard text-white px-4 py-2 rounded-md hover:bg-my-mustard"
    >
      {children}
    </button>
  );
}