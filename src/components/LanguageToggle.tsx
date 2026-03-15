import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  return (
    <Select value={current} onValueChange={(val) => i18n.changeLanguage(val)}>
      <SelectTrigger className="w-[110px] font-mono text-xs uppercase tracking-widest border-foreground bg-transparent h-8">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="font-mono text-xs uppercase tracking-widest">
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;
