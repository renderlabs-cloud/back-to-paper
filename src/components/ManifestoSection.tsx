import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

const ManifestoSection = () => {
  const { t } = useTranslation();

  const points = t('manifesto.points', { returnObjects: true }) as string[];

  return (
    <section id="manifesto" className="py-24">
      <SectionHeader
        title={t('manifesto.title')}
        subtitle={t('manifesto.subtitle')}
        large
      />
      <ol className="space-y-8 max-w-3xl">
        {points.map((point, i) => (
          <ScrollReveal key={i} delay={i * 80} direction="left">
            <li className="flex gap-6">
              <span className="font-mono text-3xl font-bold text-primary shrink-0 w-12">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-serif text-lg leading-relaxed pt-1">{point}</p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
};

export default ManifestoSection;
