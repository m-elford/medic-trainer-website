import DeviceFrame from "@/components/ui/DeviceFrame";
import FadeIn from "@/components/animations/FadeIn";

type DeviceShowcaseProps = {
  variant?: "single" | "triple" | "stack";
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
      <FadeIn className="relative mx-auto grid max-w-5xl items-end gap-8 md:grid-cols-3">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={image.src}
            className={`${
              index === 1
                ? "md:-translate-y-10 md:scale-105"
                : "md:translate-y-8 md:scale-95"
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
      <FadeIn className="relative mx-auto max-w-[520px]">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={image.src}
            className={`${
              index === 0
                ? "relative z-30"
                : index === 1
                ? "absolute left-16 top-10 z-20 scale-90 opacity-70"
                : "absolute right-16 top-20 z-10 scale-80 opacity-50"
            }`}
          >
            <DeviceFrame src={image.src} alt={image.alt} />
          </div>
        ))}
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <DeviceFrame src={images[0].src} alt={images[0].alt} />
    </FadeIn>
  );
}