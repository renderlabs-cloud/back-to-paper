import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import SectionHeader from './SectionHeader';

const STAT_KEYS = ['lockdown', 'students', 'dom_extract', 'zero_controls'] as const;

const StatsSection = () => {
  const { t } = useTranslation();

  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stats')
        .select('key, value')
        .order('sort_order');
      if (error) throw error;
      return data;
    },
  });

  // Build a key→value map from DB, fallback to static defaults
  const valueMap: Record<string, string> = {
    lockdown: '94%',
    students: '73%',
    dom_extract: '< 5s',
    zero_controls: '0',
  };

  if (stats) {
    for (const s of stats) {
      valueMap[s.key] = s.value;
    }
  }

  return (
    <section id="evidence" className="py-24">
      <SectionHeader title={t('stats.title')} large />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground">
        {STAT_KEYS.map((key, i) => (
          <div
            key={key}
            className={`p-8 ${i < STAT_KEYS.length - 1 ? 'border-b sm:border-b lg:border-b-0 sm:border-r lg:border-r border-foreground' : ''}`}
          >
            <div className="font-mono text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">
              {valueMap[key]}
            </div>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed">
              {t(`stats.${key}.label`, { value: valueMap[key] })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
