import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'np' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:bg-accent transition-all duration-200 active:scale-95"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className={`text-sm font-medium text-foreground ${language === 'np' ? 'font-nepali' : ''}`}>
        {t('language_toggle')}
      </span>
    </button>
  );
};

export default LanguageToggle;
