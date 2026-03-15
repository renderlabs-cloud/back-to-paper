import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest">
          {t('footer.line1')}
        </p>
        <p className="font-serif text-sm text-muted-foreground">
          {t('footer.line2')}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {t('footer.line3')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
