
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RecipeFiltersProps {
  selectedCategory: string;
  selectedDifficulty: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

const RecipeFilters = ({ 
  selectedCategory, 
  selectedDifficulty, 
  onCategoryChange, 
  onDifficultyChange 
}: RecipeFiltersProps) => {
  const categories = [
    'All',
    'Italian',
    'Asian',
    'Mexican',
    'American',
    'Mediterranean',
    'Indian'
  ];

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Cuisine</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Difficulty</h4>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                size="sm"
                onClick={() => onDifficultyChange(difficulty)}
                className="text-xs"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeFilters;
