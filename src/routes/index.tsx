import { createFileRoute } from '@tanstack/react-router';
import { GreetingCard } from '@/components/GreetingCard';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-fuchsia-100 p-6">
      <GreetingCard />
    </div>
  );
}
