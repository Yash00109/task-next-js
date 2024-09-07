export default function StatCard({ title, value }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
    );
  }
  