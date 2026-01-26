"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { ItineraryDay } from "./types";

export default function FullItinerary({ days }: { days: ItineraryDay[] }) {
  const [open, setOpen] = useState(days[0]?.id);

  return (
    <section>
      <SectionTitle title="Full Itinerary" />

      <div className="mt-4 space-y-3">
        {days.map((d) => {
          const isOpen = open === d.id;

          return (
            <div
              key={d.id}
              className={`rounded-xl border transition ${
                isOpen
                  ? "border-blue-500 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? "" : d.id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                    {d.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {d.title}
                  </span>
                </div>

                <ChevronDown
                  className={`h-5 w-5 text-slate-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-sm text-slate-600">
                  <p className="leading-6">{d.description}</p>

                  {d.meta && d.meta.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {d.meta.map((m, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
