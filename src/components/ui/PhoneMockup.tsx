import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
};

export default function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-[#a8d99e]/10 blur-3xl" />

      <div className="relative rounded-[3rem] border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-black p-3 shadow-2xl shadow-black/70">
        <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

        <div className="overflow-hidden rounded-[2.35rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={430}
            height={932}
            className="h-auto w-full"
            priority={false}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
      </div>
    </div>
  );
}