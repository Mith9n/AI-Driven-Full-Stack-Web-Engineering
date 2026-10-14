import hero_image from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-8 px-6 pt-2 pb-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-4 lg:pb-10"
    >
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <span className="gradient-text block">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#technologies"
            className="brand-gradient rounded-md px-4 py-2.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-md border border-slate-200 px-5 py-2.5 text-[11px] font-medium text-slate-600 transition hover:border-pink-500 hover:text-pink-600"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={hero_image}
          alt="Development stack illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;