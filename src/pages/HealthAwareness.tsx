import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { healthArticles } from '@/data/healthData';
import { Shield, Apple, Brain, Heart, ChevronRight, X } from 'lucide-react';

type Category = 'all' | 'prevention' | 'nutrition' | 'mental' | 'firstaid';

const HealthAwareness = () => {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState<Category>('all');
  const [selectedArticle, setSelectedArticle] = useState<typeof healthArticles[0] | null>(null);

  const categories: { type: Category; icon: React.ElementType; label: string }[] = [
    { type: 'all', icon: Heart, label: t('awareness_categories_all') },
    { type: 'prevention', icon: Shield, label: t('awareness_categories_prevention') },
    { type: 'nutrition', icon: Apple, label: t('awareness_categories_nutrition') },
    { type: 'mental', icon: Brain, label: t('awareness_categories_mental') },
    { type: 'firstaid', icon: Heart, label: t('awareness_categories_firstaid') },
  ];

  const filteredArticles = healthArticles.filter(
    (a) => category === 'all' || a.category === category
  );

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'prevention':
        return 'bg-primary/10 text-primary';
      case 'nutrition':
        return 'bg-success/10 text-success';
      case 'mental':
        return 'bg-info/10 text-info';
      case 'firstaid':
        return 'bg-emergency/10 text-emergency';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'prevention':
        return Shield;
      case 'nutrition':
        return Apple;
      case 'mental':
        return Brain;
      case 'firstaid':
        return Heart;
      default:
        return Heart;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title={t('awareness_title')} subtitle={t('awareness_subtitle')} />

      <main className="container py-6 space-y-6">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {categories.map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => setCategory(type)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 active:scale-95 ${
                category === type
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card border border-border text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className={`text-sm font-medium ${language === 'np' ? 'font-nepali' : ''}`}>{label}</span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredArticles.map((article, index) => {
            const CategoryIcon = getCategoryIcon(article.category);
            
            return (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="card-healthcare text-left animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${getCategoryColor(article.category)} mb-3`}>
                  <CategoryIcon className="w-3.5 h-3.5" />
                  <span className={`text-xs font-medium capitalize ${language === 'np' ? 'font-nepali' : ''}`}>
                    {t(`awareness_categories_${article.category}`)}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-semibold text-foreground mb-2 line-clamp-2 ${language === 'np' ? 'font-nepali' : ''}`}>
                  {language === 'en' ? article.title.en : article.title.np}
                </h3>

                {/* Preview Content */}
                <p className={`text-sm text-muted-foreground line-clamp-3 ${language === 'np' ? 'font-nepali' : ''}`}>
                  {language === 'en' ? article.content.en : article.content.np}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
                  {t('awareness_read_more')}
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-card rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${getCategoryColor(selectedArticle.category)}`}>
                {(() => {
                  const Icon = getCategoryIcon(selectedArticle.category);
                  return <Icon className="w-3.5 h-3.5" />;
                })()}
                <span className={`text-xs font-medium capitalize ${language === 'np' ? 'font-nepali' : ''}`}>
                  {t(`awareness_categories_${selectedArticle.category}`)}
                </span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 overflow-y-auto max-h-[60vh]">
              <h2 className={`text-xl font-bold text-foreground mb-4 ${language === 'np' ? 'font-nepali' : ''}`}>
                {language === 'en' ? selectedArticle.title.en : selectedArticle.title.np}
              </h2>
              <p className={`text-foreground/80 leading-relaxed ${language === 'np' ? 'font-nepali' : ''}`}>
                {language === 'en' ? selectedArticle.content.en : selectedArticle.content.np}
              </p>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-border">
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all active:scale-98"
              >
                {t('common_back')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthAwareness;
