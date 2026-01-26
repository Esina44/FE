import Image from "next/image";
import { Camera, Image as ImageIcon } from "lucide-react";

export default function TrekHero() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full">
    
        <Image
          src="/treks/everest-base-camp/hero.png"
          alt="Everest Base Camp Trek"
          fill
          priority
          quality={95}
          className="object-cover saturate-110 contrast-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
            Photos (6)
          </div>
        </div>

        <div className="absolute left-4 top-14 flex gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur hover:bg-white"
            aria-label="Open gallery"
          >
            <ImageIcon className="h-4 w-4 text-slate-700" />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur hover:bg-white"
            aria-label="Open camera"
          >
            <Camera className="h-4 w-4 text-slate-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
