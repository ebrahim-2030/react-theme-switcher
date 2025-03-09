import Navbar from "./components/Navbar"; 

function App() {
  return (
    // Main container with dynamic background and text colors for dark mode
    <div className="min-h-screen bg-white text-[#444] dark:bg-[#222] dark:text-white transition-all duration-500 ">
      {/* Render Navbar component */}
      <Navbar /> 
    </div>
  );
}

export default App; 
