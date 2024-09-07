import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Welcome to the CRM Dashboard</h2>
      <Link href="/stats" className="text-blue-500 underline">
        View Statistics
      </Link>
    </div>
  );
}
