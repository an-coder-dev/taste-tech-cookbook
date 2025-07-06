
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import DrinkCard from '@/components/DrinkCard';
import VideoHero from '@/components/VideoHero';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { sampleDrinks } from '@/data/drinks';

const Drinks = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cocktail', 'Coffee', 'Tea', 'Smoothie', 'Juice', 'Hot Drink'];

  const filteredDrinks = sampleDrinks.filter(drink => {
    return selectedCategory === 'All' || drink.category === selectedCategory;
  });

  const handleDrinkClick = (drink: typeof sampleDrinks[0]) => {
    console.log('Clicked drink:', drink.title);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Video Hero Section */}
        <VideoHero
          title="Craft Perfect Beverages"
          subtitle="Learn the art of mixology and beverage creation from expert bartenders and baristas."
          videoUrl="https://cdn.coverr.co/videos/coverr-pouring-cocktail-into-a-glass-4669/1080p.mp4"
          type="drink"
        />

        {/* Hero Section */}
        <div className="text-center space-y-4 py-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Refreshing Drinks Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing beverages from cocktails to smoothies, perfect for any occasion.
          </p>
          <Button size="lg" className="appetizing-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Plus className="h-5 w-5 mr-2" />
            Add New Drink
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-24 shadow-md">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'appetizing-gradient text-white shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Drinks Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">
                {filteredDrinks.length} Drink{filteredDrinks.length !== 1 ? 's' : ''}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDrinks.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  drink={drink}
                  onClick={() => handleDrinkClick(drink)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Drinks;

