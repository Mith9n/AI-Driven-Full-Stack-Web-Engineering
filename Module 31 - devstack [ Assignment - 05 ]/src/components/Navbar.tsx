import logo from "../assets/logo-text.png";
import hamburger_image from "../assets/hamburger.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left  Logo  */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="DevStack Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Center items */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 sm:flex">
          <button className="text-sm font-medium text-slate-700 transition-colors hover:text-pink-600">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-md">
            Sign Up
          </button>
        </div>

       {/* Mobile Menu  */}
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-lg p-2 transition hover:bg-slate-100 sm:hidden"
        >
          <img
            src={hamburger_image}
            alt="Open menu"
            className="h-6 w-6 object-contain"
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;