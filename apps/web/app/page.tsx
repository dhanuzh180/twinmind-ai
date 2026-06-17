export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        Meet Your Future Self Today
      </h1>

      <p className="mt-6 text-xl text-zinc-400">
        TwinMind AI creates a living digital twin that evolves with you.
      </p>

      <button className="mt-8 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition">
        Create Your Twin
      </button>
    </main>
  );
}
