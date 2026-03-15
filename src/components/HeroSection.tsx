import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-24">
      <h1 className="font-mono text-[clamp(3rem,10vw,8rem)] leading-[0.85] tracking-tighter uppercase mb-12">
        {t('hero.title_1')} <br />
        <span className="text-primary">{t('hero.title_2')}</span>
      </h1>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <p className="font-serif text-xl md:text-2xl leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <a
            href="#manifesto"
            className="bg-foreground text-background font-mono py-4 px-8 text-xl hover:bg-primary hover:text-primary-foreground no-underline text-center"
            style={{ transition: 'all 100ms steps(2)' }}
          >
            {t('hero.cta')}
          </a>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t('hero.version')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
