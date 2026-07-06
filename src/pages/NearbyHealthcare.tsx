import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { hospitals } from '@/data/healthData';
import { Building2, Pill, Stethoscope, Clock, MapPin, Phone, Navigation, AlertTriangle } from 'lucide-react';

type FilterType = 'all' | 'hospital' | 'clinic' | 'pharmacy';

const NearbyHealthcare = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');

  const filters: { type: FilterType; icon: React.ElementType; label: string }[] = [
    { type: 'all', icon: MapPin, label: 'All' },
    { type: 'hospital', icon: Building2, label: language === 'en' ? 'Hospitals' : 'अस्पतालहरू' },
    { type: 'clinic', icon: Stethoscope, label: language === 'en' ? 'Clinics' : 'क्लिनिकहरू' },
    { type: 'pharmacy', icon: Pill, label: language === 'en' ? 'Pharmacies' : 'फार्मेसीहरू' },
  ];

  const filteredHospitals = hospitals.filter(
    (h) => filter === 'all' || h.type === filter
  );

  const isOpen = (hours: string) => {
    if (hours === '24/7') return true;
    // Simplified check - in production would parse actual hours
    const currentHour = new Date().getHours();
    return currentHour >= 7 && currentHour < 22;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hospital':
        return Building2;
      case 'clinic':
        return Stethoscope;
      case 'pharmacy':
        return Pill;
      default:
        return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title={t('nearby_title')} subtitle={t('nearby_subtitle')} />

      <main className="container py-6 space-y-6">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {filters.map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 active:scale-95 ${
                filter === type
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card border border-border text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className={`text-sm font-medium ${language === 'np' ? 'font-nepali' : ''}`}>{label}</span>
            </button>
          ))}
        </div>

        {/* Healthcare List */}
        <div className="space-y-4">
          {filteredHospitals.map((facility, index) => {
            const TypeIcon = getTypeIcon(facility.type);
            const facilityIsOpen = isOpen(facility.opening_hours);

            return (
              <div
                key={facility.id}
                className="card-healthcare animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    facility.type === 'hospital' ? 'bg-primary/10 text-primary' :
                    facility.type === 'clinic' ? 'bg-info/10 text-info' :
                    'bg-success/10 text-success'
                  }`}>
                    <TypeIcon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-semibold text-foreground ${language === 'np' ? 'font-nepali' : ''}`}>
                        {language === 'en' ? facility.name.en : facility.name.np}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                        facilityIsOpen
                          ? 'bg-success-light text-success'
                          : 'bg-destructive/10 text-destructive'
                      }`}>
                        {facilityIsOpen ? t('nearby_open') : t('nearby_closed')}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className={language === 'np' ? 'font-nepali' : ''}>
                        {language === 'en' ? facility.address.en : facility.address.np}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {facility.opening_hours}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-medium">
                        <Navigation className="w-3.5 h-3.5" />
                        {facility.distance}
                      </span>
                    </div>

                    {/* Emergency Badge */}
                    {facility.is_emergency && (
                      <div className="flex items-center gap-1 mt-2 text-xs font-medium text-emergency">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {t('nearby_emergency_available')}
                      </div>
                    )}

                    {/* Services */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {(language === 'en' ? facility.services.en : facility.services.np).slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground ${language === 'np' ? 'font-nepali' : ''}`}
                        >
                          {service}
                        </span>
                      ))}
                      {facility.services.en.length > 3 && (
                        <span className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
                          +{facility.services.en.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">
                      <a
                        href={`tel:${facility.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors active:scale-98"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(facility.name.en + ' ' + facility.address.en)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors active:scale-98"
                      >
                        <Navigation className="w-4 h-4" />
                        {t('nearby_get_directions')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default NearbyHealthcare;
