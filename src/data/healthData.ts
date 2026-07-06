// Symptom data
export const symptoms = [
  { id: 'headache', icon: 'Brain', en: 'Headache', np: 'टाउको दुख्ने' },
  { id: 'fever', icon: 'Thermometer', en: 'Fever', np: 'ज्वरो' },
  { id: 'cough', icon: 'Waves', en: 'Cough', np: 'खोकी' },
  { id: 'fatigue', icon: 'Battery', en: 'Fatigue', np: 'थकान' },
  { id: 'nausea', icon: 'Frown', en: 'Nausea', np: 'वाकवाकी' },
  { id: 'bodyache', icon: 'Zap', en: 'Body Ache', np: 'शरीर दुख्ने' },
  { id: 'sorethroat', icon: 'Mic', en: 'Sore Throat', np: 'घाँटी दुख्ने' },
  { id: 'breathing', icon: 'Wind', en: 'Difficulty Breathing', np: 'सास फेर्न गाह्रो' },
  { id: 'chestpain', icon: 'Heart', en: 'Chest Pain', np: 'छातीमा दुखाइ' },
  { id: 'dizziness', icon: 'RotateCcw', en: 'Dizziness', np: 'रिंगटा लाग्ने' },
  { id: 'vomiting', icon: 'ArrowUp', en: 'Vomiting', np: 'बान्ता' },
  { id: 'diarrhea', icon: 'ArrowDown', en: 'Diarrhea', np: 'पखाला' },
];

// Disease information with prevention tips
export const diseaseInfo = {
  'heart_attack': {
    name: { en: 'Heart Attack', np: 'हृदयघात' },
    description: {
      en: 'A heart attack occurs when blood flow to the heart is blocked, usually by a blood clot.',
      np: 'हृदयघात तब हुन्छ जब हृदयमा रगतको प्रवाह अवरुद्ध हुन्छ, सामान्यतया रगतको थक्काले।'
    },
    prevention: {
      en: [
        'Maintain a healthy diet low in saturated fats',
        'Exercise regularly (at least 30 minutes daily)',
        'Don\'t smoke and avoid secondhand smoke',
        'Manage stress through relaxation techniques',
        'Control blood pressure and cholesterol',
        'Limit alcohol consumption',
        'Get regular health checkups'
      ],
      np: [
        'संतृप्त बोसो कम भएको स्वस्थ आहार लिनुहोस्',
        'नियमित व्यायाम गर्नुहोस् (दैनिक कम्तिमा ३० मिनेट)',
        'धुम्रपान नगर्नुहोस् र अरूको धुवाँबाट टाढा रहनुहोस्',
        'आराम तकनीकहरूद्वारा तनाव व्यवस्थापन गर्नुहोस्',
        'रक्तचाप र कोलेस्ट्रोल नियन्त्रण गर्नुहोस्',
        'मदिराको सेवन सीमित गर्नुहोस्',
        'नियमित स्वास्थ्य जाँच गराउनुहोस्'
      ]
    }
  },
  'respiratory_infection': {
    name: { en: 'Respiratory Infection', np: 'श्वासप्रश्वास संक्रमण' },
    description: {
      en: 'An infection affecting the respiratory system, including lungs, throat, and airways.',
      np: 'श्वासप्रश्वास प्रणालीलाई असर गर्ने संक्रमण, जसमा फोक्सो, घाँटी र श्वासनली समावेश छ।'
    },
    prevention: {
      en: [
        'Wash hands frequently with soap and water',
        'Avoid close contact with sick people',
        'Get vaccinated (flu, pneumonia vaccines)',
        'Don\'t touch your face with unwashed hands',
        'Maintain good hygiene and clean environment',
        'Boost immunity with healthy diet and exercise',
        'Get adequate sleep and manage stress'
      ],
      np: [
        'साबुन र पानीले बारम्बार हात धुनुहोस्',
        'बिरामी व्यक्तिहरूसँग नजिकको सम्पर्कबाट बच्नुहोस्',
        'खोप लगाउनुहोस् (फ्लू, निमोनिया खोप)',
        'नधोएको हातले आफ्नो अनुहार नछुनुहोस्',
        'राम्रो सरसफाइ र सफा वातावरण कायम गर्नुहोस्',
        'स्वस्थ आहार र व्यायामले प्रतिरक्षा बढाउनुहोस्',
        'पर्याप्त निद्रा लिनुहोस् र तनाव व्यवस्थापन गर्नुहोस्'
      ]
    }
  },
  'flu_cold': {
    name: { en: 'Flu/Cold', np: 'रुघाखोकी/फ्लू' },
    description: {
      en: 'Common viral infections affecting the upper respiratory system.',
      np: 'माथिल्लो श्वासप्रश्वास प्रणालीलाई असर गर्ने सामान्य भाइरल संक्रमण।'
    },
    prevention: {
      en: [
        'Get annual flu vaccination',
        'Wash hands regularly',
        'Avoid touching eyes, nose, and mouth',
        'Stay away from sick individuals',
        'Maintain healthy lifestyle with good nutrition',
        'Get enough sleep to boost immunity',
        'Stay hydrated and exercise regularly'
      ],
      np: [
        'वार्षिक फ्लू खोप लगाउनुहोस्',
        'नियमित हात धुनुहोस्',
        'आँखा, नाक र मुख छुनबाट बच्नुहोस्',
        'बिरामी व्यक्तिहरूबाट टाढा रहनुहोस्',
        'राम्रो पोषणसहित स्वस्थ जीवनशैली कायम गर्नुहोस्',
        'प्रतिरक्षा बढाउन पर्याप्त निद्रा लिनुहोस्',
        'हाइड्रेटेड रहनुहोस् र नियमित व्यायाम गर्नुहोस्'
      ]
    }
  },
  'migraine': {
    name: { en: 'Migraine', np: 'माइग्रेन' },
    description: {
      en: 'A severe headache disorder characterized by intense, throbbing pain.',
      np: 'तीव्र, धड्कने दुखाइद्वारा विशेषता भएको गम्भीर टाउको दुखाइको विकार।'
    },
    prevention: {
      en: [
        'Identify and avoid personal triggers',
        'Maintain regular sleep schedule',
        'Stay hydrated throughout the day',
        'Manage stress with relaxation techniques',
        'Eat regular, balanced meals',
        'Limit caffeine and alcohol intake',
        'Exercise regularly but avoid overexertion'
      ],
      np: [
        'व्यक्तिगत ट्रिगरहरू पहिचान गर्नुहोस् र बच्नुहोस्',
        'नियमित निद्रा तालिका कायम गर्नुहोस्',
        'दिनभर हाइड्रेटेड रहनुहोस्',
        'आराम तकनीकहरूले तनाव व्यवस्थापन गर्नुहोस्',
        'नियमित, सन्तुलित खाना खानुहोस्',
        'क्याफिन र मदिराको सेवन सीमित गर्नुहोस्',
        'नियमित व्यायाम गर्नुहोस् तर अधिक परिश्रमबाट बच्नुहोस्'
      ]
    }
  },
  'gastroenteritis': {
    name: { en: 'Gastroenteritis', np: 'ग्यास्ट्रोएन्टेराइटिस' },
    description: {
      en: 'Inflammation of the stomach and intestines, often caused by infection.',
      np: 'पेट र आन्द्राको सूजन, प्रायः संक्रमणको कारणले हुन्छ।'
    },
    prevention: {
      en: [
        'Practice good hand hygiene',
        'Drink clean, safe water',
        'Eat properly cooked and fresh food',
        'Avoid raw or undercooked foods',
        'Store food at proper temperatures',
        'Avoid sharing utensils with sick people',
        'Get vaccinated against rotavirus (for children)'
      ],
      np: [
        'राम्रो हात सरसफाइ अभ्यास गर्नुहोस्',
        'सफा, सुरक्षित पानी पिउनुहोस्',
        'राम्ररी पकाएको र ताजा खाना खानुहोस्',
        'काँचो वा कम पकाएको खानाबाट बच्नुहोस्',
        'खानालाई उचित तापक्रममा भण्डारण गर्नुहोस्',
        'बिरामी व्यक्तिहरूसँग भाँडाकुँडा साझा नगर्नुहोस्',
        'रोटाभाइरस विरुद्ध खोप लगाउनुहोस् (बच्चाहरूको लागि)'
      ]
    }
  },
  'tension_headache': {
    name: { en: 'Tension Headache', np: 'तनावजन्य टाउको दुखाइ' },
    description: {
      en: 'The most common type of headache, often caused by stress and muscle tension.',
      np: 'सबैभन्दा सामान्य प्रकारको टाउको दुखाइ, प्रायः तनाव र मांसपेशी तनावको कारणले हुन्छ।'
    },
    prevention: {
      en: [
        'Practice stress management techniques',
        'Maintain good posture',
        'Take regular breaks from screen time',
        'Get adequate sleep (7-9 hours)',
        'Stay hydrated throughout the day',
        'Exercise regularly to reduce tension',
        'Avoid skipping meals'
      ],
      np: [
        'तनाव व्यवस्थापन तकनीकहरू अभ्यास गर्नुहोस्',
        'राम्रो मुद्रा कायम गर्नुहोस्',
        'स्क्रिन समयबाट नियमित विश्राम लिनुहोस्',
        'पर्याप्त निद्रा लिनुहोस् (७-९ घण्टा)',
        'दिनभर हाइड्रेटेड रहनुहोस्',
        'तनाव कम गर्न नियमित व्यायाम गर्नुहोस्',
        'खाना नछोड्नुहोस्'
      ]
    }
  }
};

// Symptom rules for assessment
export const symptomRules = [
  {
    id: 1,
    symptoms: ['chestpain', 'breathing'],
    level: 'emergency',
    disease: 'heart_attack',
    guidance: {
      en: ['Call emergency services immediately', 'Stay calm and avoid physical exertion', 'Loosen tight clothing', 'If available, chew an aspirin'],
      np: ['तुरुन्त आपतकालीन सेवामा फोन गर्नुहोस्', 'शान्त रहनुहोस् र शारीरिक परिश्रम नगर्नुहोस्', 'कस्सिएको लुगा खोल्नुहोस्', 'उपलब्ध भएमा एस्पिरिन चबाउनुहोस्']
    }
  },
  {
    id: 2,
    symptoms: ['fever', 'breathing', 'chestpain'],
    level: 'emergency',
    disease: 'respiratory_infection',
    guidance: {
      en: ['Seek immediate medical care', 'Monitor oxygen levels if possible', 'Keep hydrated', 'Isolate to prevent spread'],
      np: ['तुरुन्त चिकित्सा सेवा लिनुहोस्', 'सम्भव भएमा अक्सिजन स्तर निगरानी गर्नुहोस्', 'हाइड्रेटेड रहनुहोस्', 'फैलावट रोक्न अलग बस्नुहोस्']
    }
  },
  {
    id: 3,
    symptoms: ['fever', 'cough', 'bodyache'],
    level: 'needs_care',
    disease: 'flu_cold',
    guidance: {
      en: ['Rest at home', 'Take fever-reducing medication', 'Stay hydrated', 'Monitor symptoms for 2-3 days', 'Visit a doctor if symptoms worsen'],
      np: ['घरमा आराम गर्नुहोस्', 'ज्वरो घटाउने औषधि लिनुहोस्', 'पानी धेरै पिउनुहोस्', '२-३ दिन लक्षणहरू निगरानी गर्नुहोस्', 'लक्षण बिग्रिए डाक्टरलाई भेट्नुहोस्']
    }
  },
  {
    id: 4,
    symptoms: ['headache', 'dizziness', 'vomiting'],
    level: 'needs_care',
    disease: 'migraine',
    guidance: {
      en: ['Rest in a quiet, dark room', 'Stay hydrated', 'Avoid screens and bright lights', 'See a doctor within 24 hours if persistent'],
      np: ['शान्त, अँध्यारो कोठामा आराम गर्नुहोस्', 'पानी पिउनुहोस्', 'स्क्रिन र उज्यालो बत्तीबाट टाढा रहनुहोस्', 'लगातार भएमा २४ घण्टाभित्र डाक्टरलाई भेट्नुहोस्']
    }
  },
  {
    id: 5,
    symptoms: ['diarrhea', 'vomiting'],
    level: 'needs_care',
    disease: 'gastroenteritis',
    guidance: {
      en: ['Drink oral rehydration solution (ORS)', 'Eat bland foods when able', 'Rest and avoid dairy products', 'Seek care if symptoms last more than 2 days'],
      np: ['जीवनजल (ORS) पिउनुहोस्', 'सकिने बेला साधारण खाना खानुहोस्', 'आराम गर्नुहोस् र दुग्ध पदार्थबाट टाढा रहनुहोस्', '२ दिनभन्दा बढी लक्षण रहे सेवा लिनुहोस्']
    }
  },
  {
    id: 6,
    symptoms: ['headache'],
    level: 'mild',
    disease: 'tension_headache',
    guidance: {
      en: ['Rest in a comfortable position', 'Stay hydrated', 'Take over-the-counter pain relief if needed', 'Reduce screen time'],
      np: ['आरामदायी स्थितिमा आराम गर्नुहोस्', 'पानी पिउनुहोस्', 'आवश्यक परे दुखाइ कम गर्ने औषधि लिनुहोस्', 'स्क्रिन समय घटाउनुहोस्']
    }
  },
  {
    id: 7,
    symptoms: ['fatigue'],
    level: 'mild',
    disease: null,
    guidance: {
      en: ['Get adequate sleep (7-9 hours)', 'Eat balanced meals', 'Stay hydrated', 'Light exercise can help'],
      np: ['पर्याप्त निद्रा लिनुहोस् (७-९ घण्टा)', 'सन्तुलित खाना खानुहोस्', 'पानी पिउनुहोस्', 'हल्का व्यायामले मद्दत गर्न सक्छ']
    }
  },
  {
    id: 8,
    symptoms: ['cough', 'sorethroat'],
    level: 'mild',
    disease: 'flu_cold',
    guidance: {
      en: ['Drink warm fluids', 'Gargle with salt water', 'Use honey for sore throat', 'Rest your voice'],
      np: ['न्यानो तरल पदार्थ पिउनुहोस्', 'नुनको पानीले गर्गल गर्नुहोस्', 'घाँटी दुखेकोमा मह प्रयोग गर्नुहोस्', 'आवाजलाई आराम दिनुहोस्']
    }
  },
];

// Hospital data
export const hospitals = [
  {
    id: 1,
    name: { en: 'Tribhuvan University Teaching Hospital', np: 'त्रिभुवन विश्वविद्यालय शिक्षण अस्पताल' },
    address: { en: 'Maharajgunj, Kathmandu', np: 'महाराजगंज, काठमाडौं' },
    services: { en: ['Emergency', 'ICU', 'Surgery', 'Pediatrics', 'Cardiology'], np: ['आपतकालीन', 'आईसीयू', 'शल्यक्रिया', 'बाल रोग', 'हृदय रोग'] },
    opening_hours: '24/7',
    is_emergency: true,
    distance: '2.3 km',
    phone: '01-4412303',
    type: 'hospital'
  },
  {
    id: 2,
    name: { en: 'Bir Hospital', np: 'वीर अस्पताल' },
    address: { en: 'Tundikhel, Kathmandu', np: 'टुँडिखेल, काठमाडौं' },
    services: { en: ['Emergency', 'General Medicine', 'Orthopedics', 'ENT'], np: ['आपतकालीन', 'सामान्य चिकित्सा', 'हड्डी रोग', 'कान नाक घाँटी'] },
    opening_hours: '24/7',
    is_emergency: true,
    distance: '1.5 km',
    phone: '01-4221119',
    type: 'hospital'
  },
  {
    id: 3,
    name: { en: 'Grande International Hospital', np: 'ग्राण्डी अन्तर्राष्ट्रिय अस्पताल' },
    address: { en: 'Tokha, Kathmandu', np: 'टोखा, काठमाडौं' },
    services: { en: ['Emergency', 'ICU', 'Neurology', 'Oncology', 'Dialysis'], np: ['आपतकालीन', 'आईसीयू', 'स्नायु रोग', 'क्यान्सर', 'डायलाइसिस'] },
    opening_hours: '24/7',
    is_emergency: true,
    distance: '5.1 km',
    phone: '01-5159266',
    type: 'hospital'
  },
  {
    id: 4,
    name: { en: 'City Clinic', np: 'सिटी क्लिनिक' },
    address: { en: 'New Road, Kathmandu', np: 'न्यू रोड, काठमाडौं' },
    services: { en: ['General Checkup', 'Lab Tests', 'Vaccination'], np: ['सामान्य जाँच', 'प्रयोगशाला परीक्षण', 'खोप'] },
    opening_hours: '8:00 AM - 8:00 PM',
    is_emergency: false,
    distance: '0.8 km',
    phone: '01-4223344',
    type: 'clinic'
  },
  {
    id: 5,
    name: { en: 'Health First Pharmacy', np: 'हेल्थ फर्स्ट फार्मेसी' },
    address: { en: 'Putalisadak, Kathmandu', np: 'पुतलीसडक, काठमाडौं' },
    services: { en: ['Medicines', 'Health Products', 'Blood Pressure Check'], np: ['औषधि', 'स्वास्थ्य उत्पादन', 'रक्तचाप जाँच'] },
    opening_hours: '7:00 AM - 10:00 PM',
    is_emergency: false,
    distance: '0.5 km',
    phone: '01-4234567',
    type: 'pharmacy'
  },
  {
    id: 6,
    name: { en: 'Medicare Pharmacy', np: 'मेडिकेयर फार्मेसी' },
    address: { en: 'Balkhu, Kathmandu', np: 'बल्खु, काठमाडौं' },
    services: { en: ['Medicines', 'Medical Equipment', 'Home Delivery'], np: ['औषधि', 'चिकित्सा उपकरण', 'घर डेलिभरी'] },
    opening_hours: '6:00 AM - 11:00 PM',
    is_emergency: false,
    distance: '3.2 km',
    phone: '01-4276543',
    type: 'pharmacy'
  },
];

// Health articles
export const healthArticles = [
  {
    id: 1,
    title: { en: 'Staying Hydrated: Why Water Matters', np: 'हाइड्रेटेड रहनुहोस्: पानी किन महत्त्वपूर्ण छ' },
    content: {
      en: 'Drinking enough water is essential for your body to function properly. Aim for 8 glasses a day, more if you\'re active or in hot weather. Proper hydration helps with digestion, circulation, and temperature regulation.',
      np: 'पर्याप्त पानी पिउनु तपाईंको शरीरलाई ठीकसँग काम गर्नको लागि आवश्यक छ। दिनमा ८ गिलास पिउने लक्ष्य राख्नुहोस्, सक्रिय हुनुहुन्छ वा गर्मीमा हुनुहुन्छ भने बढी। उचित हाइड्रेसनले पाचन, रक्त संचार र तापमान नियन्त्रणमा मद्दत गर्छ।'
    },
    category: 'nutrition',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: { en: 'Hand Washing: Your First Defense', np: 'हात धुने: तपाईंको पहिलो रक्षा' },
    content: {
      en: 'Regular hand washing with soap for at least 20 seconds can prevent the spread of many diseases. Wash before eating, after using the toilet, and after touching public surfaces.',
      np: 'कम्तिमा २० सेकेन्डको लागि साबुनले नियमित हात धुनाले धेरै रोगहरूको फैलावट रोक्न सक्छ। खाना खानुअघि, शौचालय प्रयोग गरेपछि र सार्वजनिक सतहहरू छोएपछि हात धुनुहोस्।'
    },
    category: 'prevention',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: { en: 'Managing Stress for Better Health', np: 'राम्रो स्वास्थ्यको लागि तनाव व्यवस्थापन' },
    content: {
      en: 'Chronic stress can affect your physical and mental health. Practice deep breathing, regular exercise, and adequate sleep. Don\'t hesitate to seek support from loved ones or professionals.',
      np: 'दीर्घकालीन तनावले तपाईंको शारीरिक र मानसिक स्वास्थ्यलाई असर गर्न सक्छ। गहिरो सास फेर्ने, नियमित व्यायाम र पर्याप्त निद्रा अभ्यास गर्नुहोस्। प्रियजनहरू वा पेशेवरहरूबाट सहयोग खोज्न नहिचकिचाउनुहोस्।'
    },
    category: 'mental',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: { en: 'Basic First Aid: Burns', np: 'आधारभूत प्राथमिक उपचार: जलेको घाउ' },
    content: {
      en: 'For minor burns: Cool the burn under running water for at least 10 minutes. Cover with a clean bandage. Don\'t apply ice, butter, or toothpaste. Seek medical help for severe burns.',
      np: 'साना जलेको घाउको लागि: कम्तिमा १० मिनेटको लागि बगिरहेको पानीमुनि जलेको ठाउँ चिसो गर्नुहोस्। सफा पट्टीले ढाक्नुहोस्। बरफ, घिउ वा टुथपेस्ट नलगाउनुहोस्। गम्भीर जलेको घाउको लागि चिकित्सा सहायता लिनुहोस्।'
    },
    category: 'firstaid',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: { en: 'The Importance of Balanced Diet', np: 'सन्तुलित आहारको महत्त्व' },
    content: {
      en: 'A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, sugar, and salt. Eating well supports your immune system and energy levels.',
      np: 'सन्तुलित आहारमा फलफूल, तरकारी, साबुत अन्न, कम बोसो भएको प्रोटीन र स्वस्थ बोसो समावेश हुन्छ। प्रशोधित खाना, चिनी र नुन सीमित गर्नुहोस्। राम्रो खानाले तपाईंको प्रतिरक्षा प्रणाली र ऊर्जा स्तरलाई समर्थन गर्छ।'
    },
    category: 'nutrition',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: { en: 'Sleep Hygiene Tips', np: 'निद्रा स्वच्छता सुझावहरू' },
    content: {
      en: 'Good sleep is crucial for health. Maintain a regular sleep schedule, avoid screens before bed, keep your room cool and dark, and limit caffeine after noon.',
      np: 'राम्रो निद्रा स्वास्थ्यको लागि महत्त्वपूर्ण छ। नियमित निद्रा तालिका कायम गर्नुहोस्, सुत्नुअघि स्क्रिनबाट टाढा रहनुहोस्, कोठा चिसो र अँध्यारो राख्नुहोस्, र दिउँसोपछि क्याफिन सीमित गर्नुहोस्।'
    },
    category: 'mental',
    image: '/placeholder.svg'
  },
  {
    id: 7,
    title: { en: 'Preventing Common Cold', np: 'सामान्य रुघा रोक्ने' },
    content: {
      en: 'Wash hands frequently, avoid touching your face, get enough sleep, and maintain a healthy diet. If sick, rest at home to prevent spreading to others.',
      np: 'बारम्बार हात धुनुहोस्, आफ्नो अनुहार नछुनुहोस्, पर्याप्त निद्रा लिनुहोस् र स्वस्थ आहार कायम गर्नुहोस्। बिरामी भएमा, अरूमा फैलिनबाट रोक्न घरमा आराम गर्नुहोस्।'
    },
    category: 'prevention',
    image: '/placeholder.svg'
  },
  {
    id: 8,
    title: { en: 'First Aid: Choking', np: 'प्राथमिक उपचार: गला अड्किनु' },
    content: {
      en: 'If someone is choking: Encourage them to cough. If they can\'t breathe, perform back blows and abdominal thrusts (Heimlich maneuver). Call emergency services if the object doesn\'t dislodge.',
      np: 'कसैको गला अड्किएमा: खोक्न प्रोत्साहित गर्नुहोस्। सास फेर्न नसकेमा, पीठमा हान्नुहोस् र पेटमा दबाउनुहोस् (हाइमलिक म्यान्युभर)। वस्तु नहटेमा आपतकालीन सेवामा फोन गर्नुहोस्।'
    },
    category: 'firstaid',
    image: '/placeholder.svg'
  },
];

// Emergency contacts
export const emergencyContacts = [
  { id: 1, name: { en: 'Police', np: 'प्रहरी' }, number: '100', icon: 'ShieldAlert' },
  { id: 2, name: { en: 'Ambulance', np: 'एम्बुलेन्स' }, number: '102', icon: 'Ambulance' },
  { id: 4, name: { en: 'Nepal Red Cross', np: 'नेपाल रेडक्रस' }, number: '01-4270650', icon: 'Cross' },
];

// AI-powered symptom assessment function
export const getAIAssessment = async (symptomIds: string[], age: string, gender: string, language: 'en' | 'np') => {
  const symptomNames = symptomIds.map(id => {
    const symptom = symptoms.find(s => s.id === id);
    return symptom ? (language === 'en' ? symptom.en : symptom.np) : id;
  }).join(', ');

  const prompt = language === 'en' 
    ? `As a medical AI assistant, assess these symptoms for a ${age}-year-old ${gender}: ${symptomNames}. 
       Provide: 1) Severity level (mild/needs_care/emergency), 2) Possible condition, 3) 3-4 immediate care steps, 4) 3-4 prevention tips.
       Keep response concise and always recommend consulting healthcare professionals for serious concerns.`
    : `चिकित्सा AI सहायकको रूपमा, ${age} वर्षीय ${gender}को यी लक्षणहरूको मूल्याङ्कन गर्नुहोस्: ${symptomNames}।
       प्रदान गर्नुहोस्: १) गम्भीरता स्तर (हल्का/हेरचाह चाहिन्छ/आपतकालीन), २) सम्भावित अवस्था, ३) ३-४ तत्काल हेरचाह कदमहरू, ४) ३-४ रोकथाम सुझावहरू।
       जवाफ संक्षिप्त राख्नुहोस् र गम्भीर चिन्ताहरूको लागि सधैं स्वास्थ्य पेशेवरहरूसँग सल्लाह गर्न सिफारिस गर्नुहोस्।`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY || 'your-api-key-here'}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: language === 'en' 
              ? 'You are a medical AI assistant. Provide structured, helpful health assessments while always recommending professional medical consultation for serious concerns.'
              : 'तपाईं एक चिकित्सा AI सहायक हुनुहुन्छ। गम्भीर चिन्ताहरूको लागि सधैं पेशेवर चिकित्सा परामर्शको सिफारिस गर्दै संरचित, उपयोगी स्वास्थ्य मूल्याङ्कन प्रदान गर्नुहोस्।'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 300,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || '';

    // Parse AI response to extract structured information
    const lines = aiResponse.split('\n').filter(line => line.trim());
    
    // Try to extract severity level
    let level: 'mild' | 'needs_care' | 'emergency' = 'mild';
    const severityLine = lines.find(line => 
      line.toLowerCase().includes('severity') || 
      line.toLowerCase().includes('गम्भीरता') ||
      line.includes('1)')
    );
    
    if (severityLine) {
      if (severityLine.toLowerCase().includes('emergency') || severityLine.includes('आपतकालीन')) {
        level = 'emergency';
      } else if (severityLine.toLowerCase().includes('care') || severityLine.includes('हेरचाह')) {
        level = 'needs_care';
      }
    }

    // Extract guidance steps
    const guidance = lines.filter(line => 
      line.includes('•') || 
      line.includes('-') || 
      line.match(/^\d+[\.)]/)||
      line.includes('३)') || 
      line.includes('४)')
    ).slice(0, 4);

    return {
      level,
      guidance: guidance.length > 0 ? guidance : [
        language === 'en' 
          ? 'Rest and monitor your symptoms carefully'
          : 'आराम गर्नुहोस् र आफ्नो लक्षणहरू ध्यानपूर्वक निगरानी गर्नुहोस्',
        language === 'en'
          ? 'Stay well hydrated'
          : 'राम्ररी हाइड्रेटेड रहनुहोस्',
        language === 'en'
          ? 'Consult a healthcare professional if symptoms persist'
          : 'लक्षणहरू रहिरहे स्वास्थ्य पेशेवरसँग सल्लाह गर्नुहोस्'
      ],
      aiResponse,
      disease: null
    };
  } catch (error) {
    console.error('AI Assessment Error:', error);
    
    // Fallback assessment based on symptom patterns
    const hasEmergencySymptoms = symptomIds.some(s => ['chestpain', 'breathing'].includes(s));
    const hasSevereSymptoms = symptomIds.some(s => ['fever', 'vomiting', 'dizziness'].includes(s));
    
    let fallbackLevel: 'mild' | 'needs_care' | 'emergency' = 'mild';
    if (hasEmergencySymptoms) fallbackLevel = 'emergency';
    else if (hasSevereSymptoms) fallbackLevel = 'needs_care';

    return {
      level: fallbackLevel,
      guidance: language === 'en' ? [
        'Rest and monitor your symptoms',
        'Stay hydrated with plenty of fluids',
        'Avoid strenuous activities',
        'Consult a doctor if symptoms worsen or persist'
      ] : [
        'आराम गर्नुहोस् र लक्षणहरू निगरानी गर्नुहोस्',
        'धेरै तरल पदार्थ पिएर हाइड्रेटेड रहनुहोस्',
        'कडा गतिविधिहरूबाट बच्नुहोस्',
        'लक्षण बिग्रिए वा रहिरहे डाक्टरसँग सल्लाह गर्नुहोस्'
      ],
      aiResponse: language === 'en' 
        ? 'AI assessment temporarily unavailable. Please consult a healthcare professional for proper evaluation.'
        : 'AI मूल्याङ्कन अस्थायी रूपमा उपलब्ध छैन। उचित मूल्याङ्कनको लागि कृपया स्वास्थ्य पेशेवरसँग सल्लाह गर्नुहोस्।',
      disease: null
    };
  }
};
