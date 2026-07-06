import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { symptoms, symptomRules, diseaseInfo, getAIAssessment } from '@/data/healthData';
import { Check, AlertTriangle, AlertCircle, CheckCircle2, RefreshCw, User, Calendar, Brain, Info, Thermometer, Waves, Battery, Frown, Zap, Mic, Wind, Heart, RotateCcw, ArrowUp, ArrowDown } from 'lucide-react';

type ConditionLevel = 'mild' | 'needs_care' | 'emergency' | null;

interface AssessmentResult {
  level: ConditionLevel;
  guidance: string[];
  disease?: string | null;
  aiResponse?: string;
}

const SymptomChecker = () => {
  const { t, language } = useLanguage();
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const renderMarkdown = (text: string) => {
    // Simple markdown renderer for basic formatting
    let formatted = text;
    
    // Bold: **text** or __text__
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // Italic: *text* or _text_
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/_(.*?)_/g, '<em>$1</em>');
    
    // Code: `text`
    formatted = formatted.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br />');
    
    // Lists: - item or * item
    formatted = formatted.replace(/^[\-\*]\s(.+)$/gm, '<li class="ml-4">• $1</li>');
    
    // Numbers: 1. item
    formatted = formatted.replace(/^\d+\.\s(.+)$/gm, '<li class="ml-4 list-decimal">$1</li>');
    
    return formatted;
  };

  const getSymptomIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Brain,
      Thermometer,
      Waves,
      Battery,
      Frown,
      Zap,
      Mic,
      Wind,
      Heart,
      RotateCcw,
      ArrowUp,
      ArrowDown,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-primary" /> : null;
  };

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const checkSymptoms = async () => {
    if (selectedSymptoms.length === 0) return;

    setIsChecking(true);

    // Simulate checking delay
    setTimeout(async () => {
      // Find matching rule with highest severity
      let matchedRule = null;
      let highestSeverity = 0;

      const severityMap: Record<string, number> = {
        mild: 1,
        needs_care: 2,
        emergency: 3,
      };

      for (const rule of symptomRules) {
        const matchCount = rule.symptoms.filter(s => selectedSymptoms.includes(s)).length;
        if (matchCount === rule.symptoms.length) {
          const severity = severityMap[rule.level];
          if (severity > highestSeverity) {
            highestSeverity = severity;
            matchedRule = rule;
          }
        }
      }

      // If no rule matches, use AI assessment as fallback
      if (!matchedRule) {
        try {
          const aiResult = await getAIAssessment(selectedSymptoms, age, gender, language);
          setResult({
            level: aiResult.level,
            guidance: aiResult.guidance,
            disease: aiResult.disease,
            aiResponse: aiResult.aiResponse,
          });
        } catch (error) {
          console.error('AI Assessment failed:', error);
          // Final fallback
          setResult({
            level: 'mild',
            guidance: language === 'en'
              ? ['Rest and monitor your symptoms', 'Stay hydrated', 'Consult a doctor if symptoms persist']
              : ['आराम गर्नुहोस् र लक्षणहरू निगरानी गर्नुहोस्', 'पानी पिउनुहोस्', 'लक्षणहरू रहिरहे डाक्टरलाई भेट्नुहोस्'],
          });
        }
      } else {
        setResult({
          level: matchedRule.level as ConditionLevel,
          guidance: matchedRule.guidance[language],
          disease: matchedRule.disease,
        });
      }

      setIsChecking(false);
    }, 1000);
  };

  const resetChecker = () => {
    setAge('');
    setGender('');
    setSelectedSymptoms([]);
    setResult(null);
  };

  const getLevelConfig = (level: ConditionLevel) => {
    switch (level) {
      case 'mild':
        return {
          icon: CheckCircle2,
          title: t('symptoms_result_mild'),
          description: t('symptoms_result_mild_desc'),
          bgColor: 'bg-success-light',
          textColor: 'text-success',
          borderColor: 'border-success/30',
        };
      case 'needs_care':
        return {
          icon: AlertCircle,
          title: t('symptoms_result_care'),
          description: t('symptoms_result_care_desc'),
          bgColor: 'bg-warning-light',
          textColor: 'text-warning',
          borderColor: 'border-warning/30',
        };
      case 'emergency':
        return {
          icon: AlertTriangle,
          title: t('symptoms_result_emergency'),
          description: t('symptoms_result_emergency_desc'),
          bgColor: 'bg-emergency-light',
          textColor: 'text-emergency',
          borderColor: 'border-emergency/30',
        };
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24 page-container-3d">
      <div className="background-layer">
        <PageHeader title={t('symptoms_title')} subtitle={t('symptoms_subtitle')} />
      </div>

      <main className="container py-6 space-y-6 content-layer">
        {!result ? (
          <>
            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="card-3d rounded-2xl p-4 border border-border/50 glass-morphism">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Calendar className="w-4 h-4 text-primary icon-3d" />
                  {t('symptoms_age')}
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="25"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                />
              </div>

              <div className="card-3d rounded-2xl p-4 border border-border/50 glass-morphism">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <User className="w-4 h-4 text-primary icon-3d" />
                  {t('symptoms_gender')}
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                >
                  <option value="">{t('symptoms_gender')}</option>
                  <option value="male">{t('symptoms_gender_male')}</option>
                  <option value="female">{t('symptoms_gender_female')}</option>
                  <option value="other">{t('symptoms_gender_other')}</option>
                </select>
              </div>
            </div>

            {/* Symptoms Selection */}
            <div className="animate-fade-in stagger-1" style={{ opacity: 0, animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <h3 className={`text-lg font-semibold text-foreground mb-4 ${language === 'np' ? 'font-nepali' : ''}`}>
                {t('symptoms_select')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {symptoms.map((symptom) => {
                  const isSelected = selectedSymptoms.includes(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-200 symptom-card-3d glass-morphism ${
                        isSelected
                          ? 'border-primary bg-primary-light depth-shadow'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center glass-morphism">
                          <Check className="w-3 h-3 text-primary-foreground icon-3d" />
                        </div>
                      )}
                      <div className="flex justify-center mb-2">{getSymptomIcon(symptom.icon)}</div>
                      <div className={`text-sm font-medium text-foreground ${language === 'np' ? 'font-nepali' : ''}`}>
                        {language === 'en' ? symptom.en : symptom.np}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Check Button */}
            <div className="pt-4">
              <button
                onClick={checkSymptoms}
                disabled={selectedSymptoms.length === 0 || isChecking}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 button-3d ${
                  selectedSymptoms.length > 0
                    ? 'gradient-hero text-primary-foreground depth-shadow emergency-glow'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                {isChecking ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="brain-wave"></div>
                    {selectedSymptoms.length > 0 ? t('symptoms_ai_analyzing') : t('common_loading')}
                  </span>
                ) : (
                  t('symptoms_check')
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-scale-in floating-3d">
            {/* Result Card */}
            {result.level && (() => {
              const config = getLevelConfig(result.level);
              if (!config) return null;
              const Icon = config.icon;

              return (
                <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-3xl p-6 card-3d glass-morphism depth-shadow`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${config.textColor} bg-card flex items-center justify-center glass-morphism`}>
                      <Icon className="w-7 h-7 icon-3d" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${config.textColor} mb-2 ${language === 'np' ? 'font-nepali' : ''}`}>
                        {config.title}
                      </h3>
                      <p className={`text-foreground/80 ${language === 'np' ? 'font-nepali' : ''}`}>
                        {config.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Guidance */}
            <div className="card-3d rounded-3xl p-6 border border-border/50 glass-morphism depth-shadow">
              <h4 className={`text-lg font-semibold text-foreground mb-4 ${language === 'np' ? 'font-nepali' : ''}`}>
                {t('symptoms_guidance')}
              </h4>
              <ul className="space-y-3">
                {result.guidance.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div 
                      className={`text-foreground markdown-content ${language === 'np' ? 'font-nepali' : ''}`}
                      dangerouslySetInnerHTML={{ 
                        __html: renderMarkdown(step) 
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Disease Information */}
            {result.disease && diseaseInfo[result.disease] && (
              <div className="card-3d rounded-3xl p-6 border border-border/50 glass-morphism depth-shadow">
                <h4 className={`text-lg font-semibold text-foreground mb-4 flex items-center gap-2 ${language === 'np' ? 'font-nepali' : ''}`}>
                  <Info className="w-5 h-5 text-primary icon-3d" />
                  {t('symptoms_disease_info')}
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className={`font-semibold text-foreground mb-2 ${language === 'np' ? 'font-nepali' : ''}`}>
                      {diseaseInfo[result.disease].name[language]}
                    </h5>
                    <p className={`text-foreground/80 ${language === 'np' ? 'font-nepali' : ''}`}>
                      {diseaseInfo[result.disease].description[language]}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className={`font-semibold text-foreground mb-3 ${language === 'np' ? 'font-nepali' : ''}`}>
                      {t('symptoms_prevention')}
                    </h5>
                    <ul className="space-y-2">
                      {diseaseInfo[result.disease].prevention[language].map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <div 
                            className={`text-foreground/80 markdown-content ${language === 'np' ? 'font-nepali' : ''}`}
                            dangerouslySetInnerHTML={{ 
                              __html: renderMarkdown(tip) 
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* AI Assessment Display */}
            {result.aiResponse && (
              <div className="card-3d rounded-3xl p-6 border border-blue-200/50 glass-morphism depth-shadow gradient-3d">
                <h4 className={`text-lg font-semibold text-foreground mb-4 flex items-center gap-2 ${language === 'np' ? 'font-nepali' : ''}`}>
                  <Brain className="w-5 h-5 text-blue-600 icon-3d" />
                  {t('symptoms_ai_assessment')}
                </h4>
                <div 
                  className={`text-foreground/80 whitespace-pre-wrap markdown-content ${language === 'np' ? 'font-nepali' : ''}`}
                  dangerouslySetInnerHTML={{ 
                    __html: renderMarkdown(result.aiResponse) 
                  }}
                />
              </div>
            )}

            {/* Emergency CTA for emergency level */}
            {result.level === 'emergency' && (
              <a
                href="tel:102"
                className="btn-emergency w-full flex items-center justify-center gap-2 text-lg animate-pulse-emergency"
              >
                <AlertTriangle className="w-6 h-6" />
                {t('emergency_call')} - 102
              </a>
            )}

            {/* Reset Button */}
            <button
              onClick={resetChecker}
              className="w-full py-4 rounded-2xl border-2 border-border bg-card text-foreground font-semibold button-3d glass-morphism transition-all duration-200"
            >
              <span className="flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5 icon-3d" />
                {t('symptoms_reset')}
              </span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default SymptomChecker;
