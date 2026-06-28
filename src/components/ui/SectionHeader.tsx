type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  text,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a8d99e]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
        {title}
      </h2>

      {text && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#b8b8aa]">
          {text}
        </p>
      )}
    </div>
  );
}