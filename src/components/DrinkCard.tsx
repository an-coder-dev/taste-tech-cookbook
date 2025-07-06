
import React from 'react';
import { Clock, Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Drink {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  category: string;
  calories: number;
}

interface DrinkCardProps {
  drink: Drink;
  onClick?: () => void;
}

const DrinkCard = ({ drink, onClick }: DrinkCardProps) => {
  return (
    <Card 
      className="overflow-hidden recipe-card-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={drink.image}
          alt={drink.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop';
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-900 backdrop-blur-sm">
            {drink.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center space-x-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-gray-900">{drink.rating}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2">{drink.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{drink.description}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{drink.prepTime}m</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{drink.servings}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-primary">{drink.calories} cal</span>
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                drink.difficulty === 'Easy'
                  ? 'bg-green-100 text-green-800'
                  : drink.difficulty === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {drink.difficulty}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DrinkCard;
