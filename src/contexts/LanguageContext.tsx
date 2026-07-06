import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'np';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_symptoms: "Symptoms",
    nav_nearby: "Nearby",
    nav_emergency: "Emergency",
    nav_awareness: "Health Tips",
    
    // Home
    home_hero_title: "Your Health, Our Priority",
    home_hero_subtitle: "Because access to healthcare should never depend on location or connectivity.",
    home_cta_symptoms: "Check Symptoms",
    home_cta_emergency: "Emergency Help",
    home_feature_symptoms: "Symptom Checker",
    home_feature_symptoms_desc: "Get guidance based on your symptoms",
    home_feature_nearby: "Nearby Healthcare",
    home_feature_nearby_desc: "Find hospitals & clinics near you",
    home_feature_emergency: "Emergency Help",
    home_feature_emergency_desc: "Quick access to emergency services",
    home_feature_awareness: "Health Awareness",
    home_feature_awareness_desc: "Stay informed with health tips",
    
    // Symptom Checker
    symptoms_title: "Symptom Checker",
    symptoms_subtitle: "Tell us how you're feeling",
    symptoms_age: "Your Age",
    symptoms_gender: "Gender",
    symptoms_gender_male: "Male",
    symptoms_gender_female: "Female",
    symptoms_gender_other: "Other",
    symptoms_select: "Select your symptoms",
    symptoms_check: "Check Symptoms",
    symptoms_result_mild: "Mild Condition",
    symptoms_result_mild_desc: "Your symptoms suggest a mild condition. Rest, stay hydrated, and monitor your symptoms.",
    symptoms_result_care: "Needs Medical Care",
    symptoms_result_care_desc: "Consider visiting a healthcare provider within the next few days.",
    symptoms_result_emergency: "Seek Emergency Care",
    symptoms_result_emergency_desc: "Please seek immediate medical attention or call emergency services.",
    symptoms_guidance: "Recommended Steps",
    symptoms_reset: "Check Again",
    symptoms_disease_info: "About This Condition",
    symptoms_prevention: "Prevention Tips",
    symptoms_ai_assessment: "AI Assessment",
    symptoms_ai_analyzing: "AI is analyzing your symptoms...",
    
    // Nearby Healthcare
    nearby_title: "Nearby Healthcare",
    nearby_subtitle: "Find healthcare facilities near you",
    nearby_hospitals: "Hospitals",
    nearby_clinics: "Clinics",
    nearby_pharmacies: "Pharmacies",
    nearby_open: "Open Now",
    nearby_closed: "Closed",
    nearby_emergency_available: "Emergency Available",
    nearby_services: "Services",
    nearby_hours: "Hours",
    nearby_distance: "Distance",
    nearby_get_directions: "Get Directions",
    
    // Emergency
    emergency_title: "Emergency Help",
    emergency_subtitle: "Get immediate assistance",
    emergency_call: "Call Emergency",
    emergency_police: "Police",
    emergency_ambulance: "Ambulance",
    
    emergency_nearest: "Nearest Emergency Hospital",
    emergency_calling: "Calling...",
    
    // Health Awareness
    awareness_title: "Health Awareness Hub",
    awareness_subtitle: "Stay informed, stay healthy",
    awareness_read_more: "Read More",
    awareness_categories_all: "All",
    awareness_categories_prevention: "Prevention",
    awareness_categories_nutrition: "Nutrition",
    awareness_categories_mental: "Mental Health",
    awareness_categories_firstaid: "First Aid",
    
    // Common
    common_back: "Back",
    common_loading: "Loading...",
    common_error: "Something went wrong",
    language_toggle: "नेपाली",
  },
  np: {
    // Navigation
    nav_home: "गृह",
    nav_symptoms: "लक्षण",
    nav_nearby: "नजिक",
    nav_emergency: "आपतकालीन",
    nav_awareness: "स्वास्थ्य सुझाव",
    
    // Home
    home_hero_title: "तपाईंको स्वास्थ्य, हाम्रो प्राथमिकता",
    home_hero_subtitle: "किनभने स्वास्थ्य सेवामा पहुँच कहिल्यै पनि स्थान वा कनेक्टिभिटीमा निर्भर हुनु हुँदैन।",
    home_cta_symptoms: "लक्षण जाँच",
    home_cta_emergency: "आपतकालीन सहायता",
    home_feature_symptoms: "लक्षण जाँचकर्ता",
    home_feature_symptoms_desc: "तपाईंको लक्षणहरूमा आधारित मार्गदर्शन पाउनुहोस्",
    home_feature_nearby: "नजिकैको स्वास्थ्य सेवा",
    home_feature_nearby_desc: "नजिकैको अस्पताल र क्लिनिक खोज्नुहोस्",
    home_feature_emergency: "आपतकालीन सहायता",
    home_feature_emergency_desc: "आपतकालीन सेवाहरूमा छिटो पहुँच",
    home_feature_awareness: "स्वास्थ्य जागरूकता",
    home_feature_awareness_desc: "स्वास्थ्य सुझावहरूसँग जानकार रहनुहोस्",
    
    // Symptom Checker
    symptoms_title: "लक्षण जाँचकर्ता",
    symptoms_subtitle: "हामीलाई भन्नुहोस् तपाईं कस्तो महसुस गर्दै हुनुहुन्छ",
    symptoms_age: "तपाईंको उमेर",
    symptoms_gender: "लिङ्ग",
    symptoms_gender_male: "पुरुष",
    symptoms_gender_female: "महिला",
    symptoms_gender_other: "अन्य",
    symptoms_select: "तपाईंको लक्षणहरू छान्नुहोस्",
    symptoms_check: "लक्षण जाँच गर्नुहोस्",
    symptoms_result_mild: "हल्का अवस्था",
    symptoms_result_mild_desc: "तपाईंको लक्षणहरूले हल्का अवस्था देखाउँछ। आराम गर्नुहोस्, पानी पिउनुहोस्, र आफ्नो लक्षणहरू निगरानी गर्नुहोस्।",
    symptoms_result_care: "चिकित्सा हेरचाह चाहिन्छ",
    symptoms_result_care_desc: "अर्को केही दिनभित्र स्वास्थ्य सेवा प्रदायकलाई भेट्ने विचार गर्नुहोस्।",
    symptoms_result_emergency: "आपतकालीन हेरचाह खोज्नुहोस्",
    symptoms_result_emergency_desc: "कृपया तुरुन्त चिकित्सा सहायता लिनुहोस् वा आपतकालीन सेवाहरूमा फोन गर्नुहोस्।",
    symptoms_guidance: "सिफारिस गरिएका कदमहरू",
    symptoms_reset: "फेरि जाँच गर्नुहोस्",
    symptoms_disease_info: "यो अवस्थाको बारेमा",
    symptoms_prevention: "रोकथाम सुझावहरू",
    symptoms_ai_assessment: "AI मूल्याङ्कन",
    symptoms_ai_analyzing: "AI ले तपाईंको लक्षणहरूको विश्लेषण गर्दैछ...",
    
    // Nearby Healthcare
    nearby_title: "नजिकैको स्वास्थ्य सेवा",
    nearby_subtitle: "तपाईं नजिकैको स्वास्थ्य सुविधाहरू खोज्नुहोस्",
    nearby_hospitals: "अस्पतालहरू",
    nearby_clinics: "क्लिनिकहरू",
    nearby_pharmacies: "औषधि पसलहरू",
    nearby_open: "अहिले खुला",
    nearby_closed: "बन्द",
    nearby_emergency_available: "आपतकालीन उपलब्ध",
    nearby_services: "सेवाहरू",
    nearby_hours: "समय",
    nearby_distance: "दूरी",
    nearby_get_directions: "दिशा पाउनुहोस्",
    
    // Emergency
    emergency_title: "आपतकालीन सहायता",
    emergency_subtitle: "तुरुन्त सहायता पाउनुहोस्",
    emergency_call: "आपतकालीन कल",
    emergency_police: "प्रहरी",
    emergency_ambulance: "एम्बुलेन्स",
    emergency_fire: "दमकल",
    emergency_nearest: "नजिकैको आपतकालीन अस्पताल",
    emergency_calling: "कल गर्दै...",
    
    // Health Awareness
    awareness_title: "स्वास्थ्य जागरूकता केन्द्र",
    awareness_subtitle: "जानकार रहनुहोस्, स्वस्थ रहनुहोस्",
    awareness_read_more: "थप पढ्नुहोस्",
    awareness_categories_all: "सबै",
    awareness_categories_prevention: "रोकथाम",
    awareness_categories_nutrition: "पोषण",
    awareness_categories_mental: "मानसिक स्वास्थ्य",
    awareness_categories_firstaid: "प्राथमिक उपचार",
    
    // Common
    common_back: "पछाडि",
    common_loading: "लोड हुँदैछ...",
    common_error: "केही गलत भयो",
    language_toggle: "English",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('healthlinknepal-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('healthlinknepal-language', language);
    document.body.classList.toggle('nepali', language === 'np');
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
