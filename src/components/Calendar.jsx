import Day from "./Day";

export default function Calendar() {
  return (
    <>
      <div className="font-bold text-4xl border-b border-gray-200 dark:border-gray-700 pb-5 mb-5">
        Calendar
      </div>
      <Day />
    </>
  );
}