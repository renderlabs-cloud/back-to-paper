import { useTranslation } from 'react-i18next';

const DownloadSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="border border-foreground p-8 md:p-16 relative">
        <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 -z-10" />
        <h2 className="font-mono text-3xl md:text-5xl uppercase tracking-tighter mb-4">
          {t('download.title')}
        </h2>
        <p className="font-serif text-lg text-muted-foreground mb-8 max-w-[50ch]">
          {t('download.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <button
            className="bg-primary text-primary-foreground font-mono py-4 px-10 text-lg hover:bg-foreground hover:text-background"
            style={{ transition: 'all 100ms steps(2)' }}
          >
            {t('download.cta')}
          </button>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground self-center">
            {t('download.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
