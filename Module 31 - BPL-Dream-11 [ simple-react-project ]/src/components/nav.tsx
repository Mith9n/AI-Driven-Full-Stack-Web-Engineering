import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="border-b border-white/10 bg-[#07140d]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="#">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-14 object-contain"
          />
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8">


          <a
            href="#"
            className="group relative py-2 text-sm font-semibold text-gray-400 transition hover:text-lime-400"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="group relative py-2 text-sm font-semibold text-gray-400 transition hover:text-lime-400"
          >
            Fixture
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="group relative py-2 text-sm font-semibold text-gray-400 transition hover:text-lime-400"
          >
            Players
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="group relative py-2 text-sm font-semibold text-gray-400 transition hover:text-lime-400"
          >
            Schedule
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Nav;