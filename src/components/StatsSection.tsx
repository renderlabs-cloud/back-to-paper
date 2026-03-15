import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const StatsSection = () => {
  const { t } = useTranslation();

  const items = t('stats.items', { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <section id="evidence" className="py-24">
      <SectionHeader title={t('stats.title')} large />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground">
        {items.map((item, i) => (
          <div
            key={i}
            className={`p-8 ${i < items.length - 1 ? 'border-b sm:border-b lg:border-b-0 sm:border-r lg:border-r border-foreground' : ''}`}
          >
            <div className="font-mono text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">
              {item.value}
            </div>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
