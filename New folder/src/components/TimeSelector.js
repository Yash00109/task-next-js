export default function TimeSelector({ onChange }) {
    return (
      <select
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 p-2 rounded-md"
      >
        <option value="1-day">1 Day</option>
        <option value="1-week">1 Week</option>
        <option value="1-month">1 Month</option>
      </select>
    );
  }
  