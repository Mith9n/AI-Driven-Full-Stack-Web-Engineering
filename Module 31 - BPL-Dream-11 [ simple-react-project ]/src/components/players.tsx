import { useEffect, useState } from "react";

type Player = {
  id: number;
  name: string;
  team: string;
  role: string;
  price: number;
  image: string;
};

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  // Load player data
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load player data");
        }

        return response.json();
      })
      .then((data: Player[]) => {
        setPlayers(data);
      })
      .catch((error) => {
        console.error("Player data error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Select player
  const handleSelectPlayer = (player: Player) => {
    // Maximum 11 players
    if (selectedPlayers.length >= 11) {
      alert("You can select maximum 11 players.");
      return;
    }

    // Check duplicate
    const alreadySelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.id === player.id
    );

    if (alreadySelected) {
      return;
    }

    setSelectedPlayers((prev) => [...prev, player]);
  };

  // Release player
  const handleReleasePlayer = (playerId: number) => {
    setSelectedPlayers((prev) =>
      prev.filter((player) => player.id !== playerId)
    );
  };

  // Total price in lakh
  const totalPrice = selectedPlayers.reduce(
    (total, player) => total + player.price,
    0
  );

  if (loading) {
    return (
      <section className="bg-[#07140d] px-6 py-20">
        <p className="text-center text-gray-400">
          Loading players...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#07140d] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* ========================= */}
        {/* SELECTED PLAYERS */}
        {/* ========================= */}

        <div className="mb-16 rounded-2xl border border-white/10 bg-[#0c1b12] p-6 md:p-8">

          {/* Header */}
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-lime-400">
                Your Fantasy Team
              </p>

              <h2 className="text-3xl font-black text-white md:text-4xl">
                Selected Players
              </h2>
            </div>

            {/* Stats */}
            <div className="flex gap-3">

              {/* Player Count */}
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center">
                <p className="text-xs text-gray-500">
                  Players
                </p>

                <p className="text-xl font-bold text-white">
                  {selectedPlayers.length}
                  <span className="text-gray-500">/11</span>
                </p>
              </div>

              {/* Total Price */}
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center">
                <p className="text-xs text-gray-500">
                  Total Price
                </p>

                <p className="text-xl font-bold text-lime-400">
                  ৳ {totalPrice.toFixed(1)} Lakh
                </p>
              </div>

            </div>
          </div>


          {/* Empty State */}

          {selectedPlayers.length === 0 ? (

            <div className="rounded-xl border border-dashed border-white/10 px-6 py-12 text-center">

              <p className="text-lg font-semibold text-gray-400">
                No players selected yet
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Select players below to build your Dream XI.
              </p>

            </div>

          ) : (

            /* Selected Players List */

            <div className="space-y-3">

              {selectedPlayers.map((player, index) => (

                <div
                  key={player.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-[#102217] p-4"
                >

                  {/* Player Left Side */}

                  <div className="flex items-center gap-4">

                    {/* Number */}

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-black text-black">
                      {index + 1}
                    </div>

                    {/* Player Image */}

                    <img
                      src={player.image}
                      alt={player.name}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />

                    {/* Player Info */}

                    <div>
                      <h3 className="font-bold text-white">
                        {player.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {player.role} • {player.team}
                      </p>
                    </div>

                  </div>


                  {/* Price + Release */}

                  <div className="flex items-center gap-4">

                    <span className="text-sm font-bold text-lime-400">
                      ৳ {player.price} Lakh
                    </span>

                    <button
                      onClick={() =>
                        handleReleasePlayer(player.id)
                      }
                      className="rounded-md border border-red-500/30 px-3 py-2 text-xs font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                    >
                      Release
                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>


        {/* ========================= */}
        {/* ALL PLAYERS */}
        {/* ========================= */}

        <div>

          {/* Section Heading */}

          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-lime-400">
              BPL Players
            </p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Build Your{" "}
              <span className="text-lime-400">
                Dream XI
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-gray-400">
              Select up to 11 players for your fantasy team.
            </p>
          </div>


          {/* Player Cards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {players.map((player) => {

              const isSelected = selectedPlayers.some(
                (selectedPlayer) =>
                  selectedPlayer.id === player.id
              );

              return (
                <div
                  key={player.id}
                  className={`overflow-hidden rounded-2xl border bg-[#0c1b12] transition duration-300 ${
                    isSelected
                      ? "border-lime-400/60"
                      : "border-white/10 hover:-translate-y-1 hover:border-lime-400/40"
                  }`}
                >

                  {/* Player Image */}

                  <div className="flex h-64 items-center justify-center bg-[#102619]">

                    <img
                      src={player.image}
                      alt={player.name}
                      className="h-full w-full object-contain"
                    />

                  </div>


                  {/* Player Details */}

                  <div className="p-5">

                    <div className="mb-2 flex items-center justify-between">

                      <span className="text-xs font-semibold uppercase tracking-wide text-lime-400">
                        {player.role}
                      </span>

                      <span className="text-sm font-bold text-white">
                        ৳ {player.price} Lakh 
                      </span>

                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {player.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {player.team}
                    </p>


                    {/* Select Button */}

                    <button
                      onClick={() =>
                        handleSelectPlayer(player)
                      }
                      disabled={
                        isSelected ||
                        selectedPlayers.length >= 11
                      }
                      className={`mt-5 w-full rounded-lg py-2.5 font-bold transition ${
                        isSelected
                          ? "cursor-not-allowed bg-white/10 text-gray-500"
                          : selectedPlayers.length >= 11
                          ? "cursor-not-allowed bg-white/10 text-gray-600"
                          : "bg-lime-400 text-black hover:bg-lime-300"
                      }`}
                    >
                      {isSelected
                        ? "Selected"
                        : selectedPlayers.length >= 11
                        ? "Team Full"
                        : "Select Player"}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Players;