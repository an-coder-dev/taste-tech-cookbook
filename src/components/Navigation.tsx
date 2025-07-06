
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Calendar, List, User, Coffee } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Recipes', href: '/', icon: Book },
    { name: 'Drinks', href: '/drinks', icon: Coffee },
    { name: 'Meal Plan', href: '/meal-plan', icon: Calendar },
    { name: 'Grocery List', href: '/grocery', icon: List },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-16 z-40">
      <div className="container">
        <div className="flex space-x-8 overflow-x-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 py-4 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
