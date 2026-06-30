import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
};

export default function DeviceFrame({ src, alt }: DeviceFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      <div className="absolute -inset-8 rounded-[3.5rem] bg-primary/10 blur-3xl" />

      <div className="relative rounded-[3.25rem] border border-white/20 bg-gradient-to-br from-[#2a2a2a] via-black to-[#111] p-3 shadow-2xl shadow-black/80">
        <div className="absolute left-1/2 top-4 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

        <div className="overflow-hidden rounded-[2.65rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={430}
            height={932}
            className="h-auto w-full"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[3.25rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-10 top-4 h-px bg-white/40" />
      </div>
    </div>
  );
}