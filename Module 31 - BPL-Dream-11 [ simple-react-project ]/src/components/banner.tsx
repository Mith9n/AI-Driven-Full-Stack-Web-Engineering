const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#07140d]">
      <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 lg:px-8">

        {/* Left Content */}
        <div className="z-10 max-w-2xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-lime-400">
            BPL Fantasy Cricket
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
            Build Your
            <span className="block text-lime-400">
              Dream XI
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 md:text-lg">
            Pick your favorite BPL players, build your ultimate fantasy
            team and compete with cricket fans.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">

            <button className="rounded-lg bg-lime-400 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300">
              Create Your Team
            </button>

            <button className="rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-400">
              Explore Players
            </button>

          </div>

          {/* Small Stats */}
          <div className="mt-10 flex gap-10 border-t border-white/10 pt-6">

            <div>
              <p className="text-2xl font-bold text-white">150+</p>
              <p className="text-sm text-gray-500">Players</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">8</p>
              <p className="text-sm text-gray-500">Teams</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">BPL</p>
              <p className="text-sm text-gray-500">Season 2026</p>
            </div>

          </div>

        </div>

        {/* Right Side - Cricket Visual */}
        <div className="absolute right-[-80px] top-1/2 hidden -translate-y-1/2 lg:block">

          <div className="relative flex h-[430px] w-[430px] items-center justify-center rounded-full border border-lime-400/10">

            <div className="absolute h-[350px] w-[350px] rounded-full border border-lime-400/10" />

            <div className="absolute h-[270px] w-[270px] rounded-full bg-lime-400/10 blur-3xl" />

            <div className="relative text-[170px] drop-shadow-[0_0_30px_rgba(163,230,53,0.25)]">
              🏏
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;