import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith('en');

  return (
    <button
      onClick={() => i18n.changeLanguage(isEn ? 'fr' : 'en')}
      className="font-mono text-xs uppercase tracking-widest border border-foreground px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors duration-100"
      style={{ transition: 'all 100ms steps(2)' }}
    >
      {isEn ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
