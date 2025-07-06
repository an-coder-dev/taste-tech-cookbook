
import React from 'react';
import { Clock, Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  cuisine: string;
  calories: number;
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <Card 
      className="overflow-hidden recipe-card-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-900 backdrop-blur-sm">
            {recipe.cuisine}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center space-x-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-gray-900">{recipe.rating}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2">{recipe.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{recipe.cookTime}m</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{recipe.servings}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-primary">{recipe.calories} cal</span>
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                recipe.difficulty === 'Easy'
                  ? 'bg-green-100 text-green-800'
                  : recipe.difficulty === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
