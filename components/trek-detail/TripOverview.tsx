export default function TripOverview({ text }: { text: string[] }) {
  return (
    <section>
      <div className="flex items-center gap-2">
        <div className="h-5 w-[3px] rounded-full bg-blue-600" />
        <h2 className="text-lg font-semibold text-slate-900">Trip Overview</h2>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
