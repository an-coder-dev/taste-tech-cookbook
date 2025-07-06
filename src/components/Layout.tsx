
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Calendar, List, Search, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Recipes', href: '/', icon: Book },
    { name: 'Meal Plan', href: '/meal-plan', icon: Calendar },
    { name: 'Grocery List', href: '/grocery', icon: List },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg food-gradient flex items-center justify-center">
                <Book className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">TasteTech</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search recipes..."
                className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b">
        <div className="container">
          <div className="flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 py-4 text-sm font-medium transition-colors hover:text-primary ${
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

      {/* Main Content */}
      <main className="container py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
