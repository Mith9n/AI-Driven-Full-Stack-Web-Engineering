const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07140d]">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Top Footer */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Logo / About */}
          <div className="max-w-sm">

            <h2 className="text-2xl font-black text-white">
              BPL <span className="text-lime-400">DREAM XI</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Build your ultimate BPL fantasy team, pick your
              favorite players and create your own Dream XI.
            </p>

          </div>


          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                Home
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                Fixture
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                Players
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                Schedule
              </a>

            </div>
          </div>


          {/* Fantasy */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Fantasy
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                Build Team
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                My Dream XI
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                Players
              </a>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">

          <p className="text-sm text-gray-500">
            © 2026 BPL Dream XI. All rights reserved.
          </p>

          <p className="text-sm text-gray-600">
            Made for cricket lovers.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;