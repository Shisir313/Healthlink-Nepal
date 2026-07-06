import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Stethoscope, MapPin, AlertTriangle, BookOpen } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', icon: Home, label: 'nav_home' },
    { path: '/symptoms', icon: Stethoscope, label: 'nav_symptoms' },
    { path: '/nearby', icon: MapPin, label: 'nav_nearby' },
    { path: '/emergency', icon: AlertTriangle, label: 'nav_emergency' },
    { path: '/awareness', icon: BookOpen, label: 'nav_awareness' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-50 pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          const isEmergency = path === '/emergency';
          
          return (
            <Link
              key={path}
              to={path}
              className={`nav-item flex-1 max-w-[80px] ${isActive ? 'active' : ''} ${
                isEmergency && isActive ? '!bg-emergency-light !text-emergency' : ''
              } ${isEmergency && !isActive ? 'hover:!bg-emergency-light hover:!text-emergency' : ''}`}
            >
              <Icon 
                className={`w-5 h-5 ${isEmergency ? 'text-emergency' : ''}`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[10px] font-medium truncate">{t(label)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
