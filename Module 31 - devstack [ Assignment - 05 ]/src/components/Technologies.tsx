import { useState } from "react";
import { toast } from "react-toastify";
import technologies_data from "../data/technologies.json";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function Technologies() {
  const technologies = technologies_data as Technology[];

  const [selected_technologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const handle_add_to_stack = (technology: Technology) => {
    const already_exists = selected_technologies.some(
      (item) => item.id === technology.id
    );

    if (already_exists) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  const handle_remove_from_stack = (technology_id: string) => {
    const removed_technology = selected_technologies.find(
      (item) => item.id === technology_id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== technology_id)
    );

    toast.info(`${removed_technology?.name} removed from your stack`);
  };

  const handle_remove_all = () => {
    if (selected_technologies.length === 0) {
      toast.warning("Your stack is already empty");
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack");
  };

  return (
    <section
      id="technologies"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-0 pb-12 md:px-8 md:pt-2 md:pb-16">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Explore the{" "}
            <span className="gradient-text">Technologies</span>
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Pick one technology category to build your ideal stack.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const is_added = selected_technologies.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className={`flex flex-col rounded-xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    is_added
                      ? "border-2 border-transparent"
                      : "border border-slate-200"
                  }`}
                  style={
                    is_added
                      ? {
                          background:
                            "linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #ff7a18 0%, #ff3d81 50%, #7c3aed 100%) border-box",
                        }
                      : undefined
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-medium text-orange-500">
                      {technology.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-500">
                    {technology.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400">
                    <span className="rounded bg-slate-100 px-2 py-1">
                      {technology.category}
                    </span>

                    <span>{technology.difficulty}</span>

                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span>{technology.rating}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handle_add_to_stack(technology)}
                    disabled={is_added}
                    className={`mt-5 w-full rounded-md py-2.5 text-xs font-medium transition ${
                      is_added
                        ? "cursor-not-allowed bg-slate-200 text-slate-500"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                  >
                    {is_added ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Stack Sidebar */}
          <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Your Stack
              </h3>
              <span className="whitespace-nowrap text-[10px] text-slate-400">
                {selected_technologies.length} Technology
                {selected_technologies.length !== 1 ? "ies" : "y"} Selected
              </span>
            </div>

            <div className="my-4 h-px bg-slate-100" />

            {selected_technologies.length === 0 ? (
              <div className="flex min-h-[180px] items-center justify-center text-center">
                <p className="text-center">
                <span className="block text-xs font-semibold tracking-tight text-slate-600">
                    No technologies selected yet
                </span>
                <span className="mt-1 block text-[11px] italic tracking-wide text-slate-400">
                    Your stack is empty
                </span>
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {selected_technologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-50">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-6 w-6 object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-xs font-semibold text-slate-900">
                        {technology.name}
                      </h4>

                      <p className="text-[10px] text-slate-400">
                        {technology.category}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        handle_remove_from_stack(technology.id)
                      }
                      className="text-xl leading-none text-slate-400 transition hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handle_remove_all}
              className="mt-5 w-full rounded-md border border-red-200 py-2.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Technologies;