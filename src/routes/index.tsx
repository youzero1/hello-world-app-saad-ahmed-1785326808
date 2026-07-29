import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-10 py-8 text-center text-slate-300">
        Hello World app — coming together
      </div>
    </div>
  );
}
