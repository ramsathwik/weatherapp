function NavBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 
                   p-4 mx-3 sm:mx-5 mt-3 
                    rounded-xl  "
      >
        <input
          type="date"
          className="w-full sm:w-auto rounded-lg px-3 py-3
                     bg-transparent text-white 
                      shadow-md
                     focus:outline-none focus:ring-2 focus:ring-blue-400 
                     transition-all duration-200"
        />
        <input
          type="text"
          className="w-full sm:flex-1 rounded-lg px-3 py-3
                     bg-transparent text-white placeholder-gray-300
                     border border-white/30 shadow-md
                     focus:outline-none focus:ring-2 focus:ring-green-400 
                     transition-all duration-200"
          placeholder="Enter city"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-5 py-3 rounded-lg 
                     bg-gradient-to-r from-blue-500 to-green-500 text-white 
                     font-semibold hover:scale-105 active:scale-95 
                     transition-transform shadow-lg"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default NavBar;
