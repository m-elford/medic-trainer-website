import DeviceFrame from "@/components/ui/DeviceFrame";
import FadeIn from "@/components/animations/FadeIn";

type DeviceShowcaseProps = {
  variant?: "single" | "triple" | "stack" | "spotlight";
  images: {
    src: string;
    alt: string;
  }[];
};

export default function DeviceShowcase({
  variant = "single",
  images,
}: DeviceShowcaseProps) {
  if (variant === "triple") {
    return (
      <FadeIn className="relative mx-auto grid max-w-6xl items-end gap-8 md:grid-cols-3">
        <div className="absolute inset-x-0 bottom-10 mx-auto hidden h-40 max-w-4xl rounded-full bg-primary/10 blur-3xl md:block" />

        {images.slice(0, 3).map((image, index) => (
          <div
            key={image.src}
            className={`relative transition duration-500 ${
              index === 1
                ? "z-20 md:-translate-y-12 md:scale-110"
                : "z-10 md:translate-y-10 md:scale-95 md:opacity-85"
            }`}
          >
            <DeviceFrame src={image.src} alt={image.alt} />
          </div>
        ))}
      </FadeIn>
    );
  }

  if (variant === "stack") {
    return (
      <FadeIn className="relative mx-auto flex min-h-[620px] max-w-[620px] items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

        {images.slice(0, 3).map((image, index) => {
          const classes =
            index === 0
              ? "z-30 translate-x-0 translate-y-0 scale-100"
              : index === 1
              ? "z-20 translate-x-24 translate-y-10 scale-90 opacity-75"
              : "z-10 -translate-x-24 translate-y-20 scale-85 opacity-55";

          return (
            <div key={image.src} className={`absolute ${classes}`}>
              <DeviceFrame src={image.src} alt={image.alt} />
            </div>
          );
        })}
      </FadeIn>
    );
  }

  if (variant === "spotlight") {
    return (
      <FadeIn className="relative mx-auto max-w-[420px]">
        <div className="absolute -inset-12 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative">
          <DeviceFrame src={images[0].src} alt={images[0].alt} />
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <DeviceFrame src={images[0].src} alt={images[0].alt} />
    </FadeIn>
  );
}