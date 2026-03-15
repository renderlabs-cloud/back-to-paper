interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  large?: boolean;
}

const SectionHeader = ({ title, subtitle, large }: SectionHeaderProps) => (
  <header className="mb-16 border-l-4 border-primary pl-8 py-2">
    <h2
      className={`font-mono uppercase tracking-tighter leading-none ${
        large ? 'text-5xl md:text-7xl mb-4' : 'text-3xl md:text-4xl mb-2'
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="font-serif text-lg md:text-xl italic text-muted-foreground max-w-[60ch]">
        {subtitle}
      </p>
    )}
  </header>
);

export default SectionHeader;
