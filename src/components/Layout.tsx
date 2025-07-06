
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Search, Menu } from 'lucide-react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg appetizing-gradient flex items-center justify-center shadow-md">
                <Book className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">TasteTech</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search recipes and drinks..."
                className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm"
              />
            </div>
            <button className="md:hidden p-2 rounded-md hover:bg-muted">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="container py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-orange-50 to-red-50 mt-12">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded appetizing-gradient flex items-center justify-center">
                  <Book className="h-3 w-3 text-white" />
                </div>
                <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">TasteTech</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your personal recipe and meal planning companion.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-orange-700">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Recipe Collection</li>
                <li>Meal Planning</li>
                <li>Grocery Lists</li>
                <li>Nutritional Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-orange-700">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Quick Meals</li>
                <li>Healthy Options</li>
                <li>International</li>
                <li>Desserts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-orange-700">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2024 TasteTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

