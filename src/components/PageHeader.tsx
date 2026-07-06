import LanguageToggle from './LanguageToggle';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showLanguageToggle?: boolean;
}

const PageHeader = ({ title, subtitle, showLanguageToggle = true }: PageHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">{title}</h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
          {showLanguageToggle && <LanguageToggle />}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
