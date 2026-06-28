import Button from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden px-6 pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071109] via-[#071109]/85 to-[#071109]/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-[#a8d99e]">
          {eyebrow}
        </p>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-8xl">
          {title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d8cf] md:text-xl">
          {text}
        </p>

        {(primaryLabel || secondaryLabel) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryLabel && primaryHref && (
              <Button href={primaryHref}>{primaryLabel}</Button>
            )}
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}