function NavBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[1000]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 
               p-4 mx-3 sm:mx-5 mt-3 
               rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg"
      >
        {/* inputs here */}
        <input
          type="date"
          className="w-full text-blue-400 sm:w-auto rounded-lg px-3 py-3
             bg-white/20  placeholder-white/70
             border border-white/40 shadow-md
             focus:outline-none focus:ring-2 focus:ring-blue-400 
             transition-all duration-200"
        />
        <div className="relative w-full sm:flex-1">
          <input
            type="text"
            id="city"
            className="peer form-input w-full shadow-lg px-3 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            placeholder=""
          />
          <label
            htmlFor="city"
            className="absolute left-2 -top-4 -translate-y-2   uppercase text-blue-400 peer-placeholder-shown:top-2
            peer-placeholder-shown:translate-y-0
             "
          >
            Enter City
          </label>
        </div>
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
