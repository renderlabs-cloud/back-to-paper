import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="border-b border-foreground">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm uppercase tracking-widest font-bold">
          Back to Paper
        </span>
        <div className="hidden md:flex items-center gap-6">
          <a href="#manifesto" className="font-mono text-xs uppercase tracking-widest no-underline hover:text-primary">
            {t('nav.manifesto')}
          </a>
          <a href="#exploits" className="font-mono text-xs uppercase tracking-widest no-underline hover:text-primary">
            {t('nav.exploits')}
          </a>
          <a href="#evidence" className="font-mono text-xs uppercase tracking-widest no-underline hover:text-primary">
            {t('nav.evidence')}
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
