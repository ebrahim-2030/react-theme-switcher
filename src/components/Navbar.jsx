import ThemeSwitcher from "./ThemeSwitcher"; 

const Navbar = () => {
  return (
    // Navigation bar with transition effects for dark mode
    <nav className="bg-white text-[#222] dark:bg-[#222] dark:text-white flex items-center justify-between shadow-xl py-3 px-4 transition-all duration-500">
      
      {/* Navbar title */}
      <h1 className="text-xl font-bold px-1 flex items-center justify-center rounded">
        Navbar 
      </h1>

      {/* Place the ThemeSwitcher to enable dark mode toggle */}
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component
