import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { emergencyContacts, hospitals } from '@/data/healthData';
import { Phone, AlertTriangle, MapPin, Navigation, Building2, Shield, Share, Loader2, ShieldAlert, Ambulance, Cross } from 'lucide-react';

const Emergency = () => {
  const { t, language } = useLanguage();
  const [calling, setCalling] = useState<string | null>(null);
  const [locationStatus, setLocationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [locationData, setLocationData] = useState<{lat: number, lng: number, accuracy: number} | null>(null);

  const emergencyHospital = hospitals.find(h => h.is_emergency);

  const handleCall = (number: string, name: string) => {
    setCalling(name);
    // Simulate call initiation
    setTimeout(() => {
      window.location.href = `tel:${number}`;
      setCalling(null);
    }, 500);
  };

  const shareLocation = async () => {
    setLocationStatus('loading');
    
    // Mock location data for demo purposes
    setTimeout(() => {
      const mockLocationData = {
        lat: 27.7172,
        lng: 85.3240,
        accuracy: 15
      };
      
      setLocationData(mockLocationData);
      setLocationStatus('success');
      
      // Create location message with mock data
      const locationMessage = `🚨 EMERGENCY LOCATION 🚨\nLatitude: ${mockLocationData.lat.toFixed(6)}\nLongitude: ${mockLocationData.lng.toFixed(6)}\nAccuracy: ${mockLocationData.accuracy}m\nGoogle Maps: https://maps.google.com/?q=${mockLocationData.lat},${mockLocationData.lng}\n\n`;
      
      // Try to share via Web Share API if available
      if (navigator.share) {
        navigator.share({
          title: 'Emergency Location',
          text: locationMessage,
        }).catch(() => {
          // Fallback to copying to clipboard
          copyToClipboard(locationMessage);
        });
      } else {
        // Fallback to copying to clipboard
        copyToClipboard(locationMessage);
      }
    }, 2000); // 2 second delay to simulate GPS acquisition
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert(language === 'en' 
          ? 'Location copied to clipboard! Share this with emergency services.'
          : 'स्थान क्लिपबोर्डमा कपी भयो! यो आपतकालीन सेवाहरूसँग साझा गर्नुहोस्।'
        );
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(language === 'en' 
        ? 'Location copied to clipboard! Share this with emergency services.'
        : 'स्थान क्लिपबोर्डमा कपी भयो! यो आपतकालीन सेवाहरूसँग साझा गर्नुहोस्।'
      );
    }
  };

  const getEmergencyIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      ShieldAlert,
      Ambulance,
      Cross,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-primary" /> : null;
  };

  return (
    <div className="min-h-screen bg-background pb-24 page-container-3d">
      <div className="background-layer">
        <PageHeader title={t('emergency_title')} subtitle={t('emergency_subtitle')} />
      </div>

      <main className="container py-6 space-y-6 content-layer">
        {/* Main Emergency Button */}
        <div className="animate-scale-in floating-3d">
          <button
            onClick={() => handleCall('102', 'Ambulance')}
            className="w-full relative overflow-hidden rounded-3xl p-8 gradient-emergency text-emergency-foreground button-3d emergency-glow active:scale-98 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 animate-pulse-emergency glass-morphism">
                <Phone className="w-10 h-10 icon-3d" />
              </div>
              <span className={`text-2xl font-bold ${language === 'np' ? 'font-nepali' : ''}`}>
                {t('emergency_call')}
              </span>
              <span className="text-lg opacity-90 mt-1">102</span>
            </div>
          </button>
        </div>

        {/* Send Location Button */}
        <div className="animate-fade-in stagger-1" style={{ opacity: 0, animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <button
            onClick={shareLocation}
            disabled={locationStatus === 'loading'}
            className={`w-full relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-200 button-3d glass-morphism ${
              locationStatus === 'success' 
                ? 'border-success bg-success-light text-success depth-shadow' 
                : locationStatus === 'error'
                ? 'border-destructive bg-destructive-light text-destructive'
                : 'border-primary bg-primary-light text-primary hover:shadow-lg'
            }`}
          >
            <div className="flex items-center justify-center gap-3">
              {locationStatus === 'loading' ? (
                <div className="medical-cross"></div>
              ) : locationStatus === 'success' ? (
                <MapPin className="w-6 h-6 icon-3d" />
              ) : (
                <Share className="w-6 h-6 icon-3d" />
              )}
              <div className="text-center">
                <div className={`text-lg font-semibold ${language === 'np' ? 'font-nepali' : ''}`}>
                  {locationStatus === 'loading' 
                    ? (language === 'en' ? 'Getting Location...' : 'स्थान प्राप्त गर्दै...')
                    : locationStatus === 'success'
                    ? (language === 'en' ? 'Location Shared!' : 'स्थान साझा गरियो!')
                    : locationStatus === 'error'
                    ? (language === 'en' ? 'Location Failed' : 'स्थान असफल')
                    : (language === 'en' ? 'Send My Location' : 'मेरो स्थान पठाउनुहोस्')
                  }
                </div>
                {locationStatus === 'idle' && (
                  <div className={`text-sm opacity-80 ${language === 'np' ? 'font-nepali' : ''}`}>
                    {language === 'en' 
                      ? 'Share your exact location with emergency services'
                      : 'आपतकालीन सेवाहरूसँग आफ्नो सही स्थान साझा गर्नुहोस्'
                    }
                  </div>
                )}
                {locationStatus === 'success' && locationData && (
                  <div className="text-sm opacity-80 mt-1">
                    {language === 'en' 
                      ? `Accuracy: ${locationData.accuracy.toFixed(0)}m `
                      : `सटीकता: ${locationData.accuracy.toFixed(0)}मि `
                    }
                  </div>
                )}
                {locationStatus === 'error' && (
                  <div className={`text-sm opacity-80 mt-1 ${language === 'np' ? 'font-nepali' : ''}`}>
                    {language === 'en' 
                      ? 'Demo mode - Location sharing simulated'
                      : 'डेमो मोड - स्थान साझाकरण सिमुलेटेड'
                    }
                  </div>
                )}
              </div>
            </div>
          </button>
          {locationStatus === 'success' && (
            <button
              onClick={() => {
                setLocationStatus('idle');
                setLocationData(null);
              }}
              className="mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {language === 'en' ? 'Send Again' : 'फेरि पठाउनुहोस्'}
            </button>
          )}
        </div>

        {/* Emergency Contacts Grid */}
        <div className="grid grid-cols-3 gap-3 animate-fade-in stagger-2" style={{ opacity: 0, animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {emergencyContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleCall(contact.number, contact.name.en)}
              disabled={calling !== null}
              className={`card-3d rounded-2xl p-4 border border-border/50 transition-all duration-200 glass-morphism ${
                calling === contact.name.en ? 'ring-2 ring-emergency emergency-glow' : ''
              }`}
            >
              <div className="flex justify-center mb-2">{getEmergencyIcon(contact.icon)}</div>
              <div className={`text-sm font-medium text-foreground ${language === 'np' ? 'font-nepali' : ''}`}>
                {language === 'en' ? contact.name.en : contact.name.np}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{contact.number}</div>
              {calling === contact.name.en && (
                <div className="text-xs text-emergency font-medium mt-2 animate-pulse">
                  {t('emergency_calling')}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Nearest Emergency Hospital */}
        {emergencyHospital && (
          <div className="animate-fade-in stagger-3" style={{ opacity: 0, animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h3 className={`text-lg font-semibold text-foreground mb-4 flex items-center gap-2 ${language === 'np' ? 'font-nepali' : ''}`}>
              <Building2 className="w-5 h-5 text-emergency icon-3d" />
              {t('emergency_nearest')}
            </h3>
            
            <div className="card-3d rounded-3xl p-5 border-2 border-emergency/20 glass-morphism depth-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emergency/10 flex items-center justify-center glass-morphism">
                  <AlertTriangle className="w-7 h-7 text-emergency icon-3d" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-foreground text-lg ${language === 'np' ? 'font-nepali' : ''}`}>
                    {language === 'en' ? emergencyHospital.name.en : emergencyHospital.name.np}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className={language === 'np' ? 'font-nepali' : ''}>
                      {language === 'en' ? emergencyHospital.address.en : emergencyHospital.address.np}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full bg-success-light text-success text-xs font-medium">
                      24/7
                    </span>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium">
                      <Navigation className="w-4 h-4" />
                      {emergencyHospital.distance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <a
                  href={`tel:${emergencyHospital.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emergency text-emergency-foreground font-semibold button-3d emergency-glow transition-all"
                >
                  <Phone className="w-5 h-5 icon-3d" />
                  Call Now
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(emergencyHospital.name.en + ' ' + emergencyHospital.address.en)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-border bg-card text-foreground font-semibold button-3d glass-morphism transition-all"
                >
                  <Navigation className="w-5 h-5 icon-3d" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Safety Tips */}
        <div className="card-3d rounded-2xl p-5 border border-border/50 animate-fade-in stagger-4 glass-morphism gradient-3d" style={{ opacity: 0, animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-primary icon-3d" />
            <h4 className="font-semibold text-foreground">
              {language === 'en' ? 'In an Emergency' : 'आपतकालीनमा'}
            </h4>
          </div>
          <ul className={`space-y-2 text-sm text-muted-foreground ${language === 'np' ? 'font-nepali' : ''}`}>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              {language === 'en' 
                ? 'Stay calm and speak clearly when calling for help'
                : 'मद्दतको लागि फोन गर्दा शान्त रहनुहोस् र स्पष्ट बोल्नुहोस्'}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              {language === 'en'
                ? 'Provide your exact location and describe the situation'
                : 'आफ्नो ठीक स्थान दिनुहोस् र अवस्था वर्णन गर्नुहोस्'}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              {language === 'en'
                ? 'Do not move injured persons unless necessary for safety'
                : 'सुरक्षाको लागि आवश्यक नभएसम्म घाइतेलाई नसार्नुहोस्'}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
