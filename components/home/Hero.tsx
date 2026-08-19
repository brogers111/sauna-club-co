import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex h-[80vh] min-h-[480px] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-image.webp"
        alt="Person relaxing in a steaming cedar sauna at Sauna Club Co"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-green-dark/40" />
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-display text-5xl uppercase tracking-wide text-tan-light sm:text-6xl md:text-7xl">
          Plan Your Unwind
        </h1>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-tan-light"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0-6-6m6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
