import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import { Stethoscope, MapPin, AlertTriangle, BookOpen, Compass, Sparkles, ShieldCheck, Users } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Stethoscope,
      title: 'home_feature_symptoms',
      description: 'home_feature_symptoms_desc',
      path: '/symptoms',
      accent: 'bg-sky-100 text-sky-700',
    },
    {
      icon: MapPin,
      title: 'home_feature_nearby',
      description: 'home_feature_nearby_desc',
      path: '/nearby',
      accent: 'bg-emerald-100 text-emerald-700',
    },
    {
      icon: AlertTriangle,
      title: 'home_feature_emergency',
      description: 'home_feature_emergency_desc',
      path: '/emergency',
      accent: 'bg-rose-100 text-rose-700',
    },
    {
      icon: BookOpen,
      title: 'home_feature_awareness',
      description: 'home_feature_awareness_desc',
      path: '/awareness',
      accent: 'bg-violet-100 text-violet-700',
    },
  ];

  const quickActions = [
    {
      icon: Compass,
      title: 'Quick Care Finder',
      description: 'Search nearby care, pharmacies, and emergency support in one tap.',
      path: '/nearby',
    },
    {
      icon: Sparkles,
      title: 'Wellness Boost',
      description: 'Get fast health tips and daily self-care suggestions.',
      path: '/awareness',
    },
    {
      icon: ShieldCheck,
      title: 'Safety Guide',
      description: 'Learn immediate steps for common first aid and emergencies.',
      path: '/emergency',
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <div className="grid gap-8 xl:grid-cols-[1.6fr_1fr]">
          <section className="hero-shell p-8 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <span className="top-banner inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-sky-700">
                  Healthlink Nepal
                </span>
                <h1 className={`mt-6 text-4xl font-bold tracking-tight text-slate-950 ${language === 'np' ? 'font-nepali' : ''}`}>
                  {t('home_hero_title')}
                </h1>
                <p className={`mt-5 text-lg leading-8 text-slate-600 ${language === 'np' ? 'font-nepali' : ''}`}>
                  {t('home_hero_subtitle')}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/symptoms"
                    className="button-3d inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15"
                  >
                    <Stethoscope className="h-4 w-4" />
                    {t('home_cta_symptoms')}
                  </Link>
                  <Link
                    to="/emergency"
                    className="button-3d inline-flex items-center justify-center gap-2 rounded-full border border-rose-500 bg-rose-50 px-6 py-3 text-sm font-semibold text-rose-700"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    {t('home_cta_emergency')}
                  </Link>
                </div>
              </div>

              <div className="dashboard-card grid gap-4 rounded-[2rem] border border-slate-200/80 p-6 shadow-xl shadow-slate-900/5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Fast tools</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">Essentials</h2>
                  </div>
                  <LanguageToggle />
                </div>
                <div className="grid gap-4">
                  {quickActions.map((action) => (
                    <Link
                      key={action.title}
                      to={action.path}
                      className="quick-action-card rounded-3xl border border-slate-200/80 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900">
                          <action.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-base font-semibold text-slate-950">{action.title}</p>
                          <p className="mt-1 text-sm text-slate-500 leading-6">{action.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-5">
            {features.map((feature) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="feature-card rounded-[2rem] border border-slate-200/80 p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${feature.accent}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className={`text-xl font-semibold text-slate-950 ${language === 'np' ? 'font-nepali' : ''}`}>
                  {t(feature.title)}
                </h3>
                <p className={`mt-3 text-sm leading-6 text-slate-600 ${language === 'np' ? 'font-nepali' : ''}`}>
                  {t(feature.description)}
                </p>
              </Link>
            ))}
          </section>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="section-card rounded-[2rem] border border-slate-200/80 p-6 shadow-xl shadow-slate-900/5">
            <span className="badge-glow rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Smart</span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Tailored Guidance</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Get a streamlined care plan based on your symptoms and history.</p>
          </div>
          <div className="section-card rounded-[2rem] border border-slate-200/80 p-6 shadow-xl shadow-slate-900/5">
            <span className="badge-glow rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Reliable</span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Trusted Resources</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Access verified emergency contacts, clinics, and prevention tips anytime.</p>
          </div>
          <div className="section-card rounded-[2rem] border border-slate-200/80 p-6 shadow-xl shadow-slate-900/5">
            <span className="badge-glow rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">Instant</span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Quick Support</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Reach help fast with emergency actions and easy navigation.</p>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Why Healthlink Nepal</p>
              <h2 className={`mt-3 text-3xl font-bold text-slate-950 ${language === 'np' ? 'font-nepali' : ''}`}>
                A cleaner, faster health support experience.
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-600">
              <Users className="h-4 w-4 text-slate-700" />
              {language === 'en' ? 'Millions of users trust our guidance' : 'लाखौं प्रयोगकर्ताहरूले हाम्रो मार्गदर्शनमा विश्वास गर्छन्'}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
