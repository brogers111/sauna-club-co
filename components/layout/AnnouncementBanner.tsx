// Pre-opening announcement strip, placed directly below each page's hero.
// Desktop repeats the text enough times to cover the widest screens; mobile
// shows it once, centered. Only the first copy is read aloud.
export function AnnouncementBanner({ text = "Opening this Holiday Season" }: { text?: string }) {
  return (
    <div className="flex items-center justify-center gap-12 overflow-hidden bg-cream px-6 py-4 whitespace-nowrap md:justify-start">
      {Array.from({ length: 24 }, (_, index) => (
        <p
          key={index}
          aria-hidden={index > 0 ? true : undefined}
          // text-box trims the font's built-in space above the capitals
          // and below the baseline, so equal padding looks equal.
          className={`${index > 0 ? "hidden md:block" : ""} shrink-0 font-display text-[24px] leading-none uppercase tracking-wide text-tan-light [text-box:trim-both_cap_alphabetic]`}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
