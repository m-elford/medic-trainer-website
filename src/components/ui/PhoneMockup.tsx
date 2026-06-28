type PhoneMockupProps = {
  src: string;
  alt: string;
};

export default function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.5rem] border border-white/15 bg-black p-3 shadow-2xl shadow-black/60">
        <img
          src={src}
          alt={alt}
          className="rounded-[2rem] object-cover"
        />
      </div>
    </div>
  );
}