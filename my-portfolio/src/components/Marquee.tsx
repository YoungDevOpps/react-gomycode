import { techs } from "@/data"

export function Marquee() {
  const items = [...techs, ...techs]
  return (
    <div className="border-y bg-muted/40 py-5" aria-label={`Technologies : ${techs.join(", ")}`}>
      <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul aria-hidden className="flex w-max animate-marquee gap-12 hover:paused">
          {items.map((t, i) => (
            <li key={i} className="font-heading text-lg font-semibold text-muted-foreground">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
