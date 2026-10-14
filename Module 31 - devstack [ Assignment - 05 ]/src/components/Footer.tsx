import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="mt-4 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand logo Section */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-auto w-[138px] object-contain"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-sm text-slate-500 transition hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;