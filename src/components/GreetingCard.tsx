export function GreetingCard() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/70 px-8 py-12 text-center shadow-xl shadow-indigo-200/50 backdrop-blur-sm sm:px-12">
      <div className="mb-6 flex justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-3xl shadow-lg shadow-indigo-300/60">
          👋
        </span>
      </div>

      <h1 className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
        Hello, World!
      </h1>

      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Your app is up and running. This is the very first thing it has to say.
      </p>

      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-indigo-400" />
        <span className="h-2 w-2 rounded-full bg-violet-400" />
        <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
      </div>
    </div>
  );
}
