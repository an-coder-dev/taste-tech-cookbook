
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import RecipeCard from '@/components/RecipeCard';
import RecipeFilters from '@/components/RecipeFilters';
import VideoHero from '@/components/VideoHero';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// Sample recipe data with beautiful food images
const sampleRecipes = [
  {
    id: '1',
    title: 'Grilled Chicken Caesar Salad',
    description: 'Fresh romaine lettuce with perfectly grilled chicken, parmesan cheese, and homemade caesar dressing.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop',
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy' as const,
    rating: 4.8,
    cuisine: 'American',
    calories: 320
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
    cookTime: 20,
    servings: 2,
    difficulty: 'Medium' as const,
    rating: 4.9,
    cuisine: 'Italian',
    calories: 580
  },
  {
    id: '3',
    title: 'Thai Green Curry',
    description: 'Aromatic and spicy Thai curry with coconut milk, vegetables, and fragrant herbs.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop',
    cookTime: 35,
    servings: 4,
    difficulty: 'Medium' as const,
    rating: 4.7,
    cuisine: 'Asian',
    calories: 420
  },
  {
    id: '4',
    title: 'Beef Tacos',
    description: 'Seasoned ground beef in soft tortillas with fresh toppings and homemade salsa.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    cookTime: 30,
    servings: 4,
    difficulty: 'Easy' as const,
    rating: 4.6,
    cuisine: 'Mexican',
    calories: 380
  },
  {
    id: '5',
    title: 'Mediterranean Salmon',
    description: 'Baked salmon with herbs, olives, tomatoes, and a drizzle of olive oil.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop',
    cookTime: 25,
    servings: 2,
    difficulty: 'Easy' as const,
    rating: 4.8,
    cuisine: 'Mediterranean',
    calories: 450
  },
  {
    id: '6',
    title: 'Butter Chicken',
    description: 'Rich and creamy Indian curry with tender chicken in a spiced tomato sauce.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop',
    cookTime: 45,
    servings: 4,
    difficulty: 'Hard' as const,
    rating: 4.9,
    cuisine: 'Indian',
    calories: 520
  },
  {
    id: '7',
    title: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh tomatoes, mozzarella, and basil on crispy crust.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop',
    cookTime: 40,
    servings: 3,
    difficulty: 'Medium' as const,
    rating: 4.7,
    cuisine: 'Italian',
    calories: 480
  },
  {
    id: '8',
    title: 'Chicken Pad Thai',
    description: 'Stir-fried rice noodles with chicken, bean sprouts, and tamarind sauce.',
    image: 'https://images.unsplash.com/photo-1559314809-0f31657dcc5e?w=800&h=600&fit=crop',
    cookTime: 25,
    servings: 2,
    difficulty: 'Medium' as const,
    rating: 4.6,
    cuisine: 'Asian',
    calories: 420
  },
  {
    id: '9',
    title: 'Greek Salad',
    description: 'Fresh cucumber, tomatoes, olives, and feta cheese with olive oil dressing.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop',
    cookTime: 10,
    servings: 4,
    difficulty: 'Easy' as const,
    rating: 4.5,
    cuisine: 'Mediterranean',
    calories: 220
  },
  {
    id: '10',
    title: 'Beef Stir Fry',
    description: 'Tender beef strips with crisp vegetables in a savory soy-based sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
    cookTime: 20,
    servings: 3,
    difficulty: 'Easy' as const,
    rating: 4.4,
    cuisine: 'Asian',
    calories: 380
  },
  {
    id: '11',
    title: 'Chicken Enchiladas',
    description: 'Rolled tortillas filled with seasoned chicken and topped with cheese and sauce.',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop',
    cookTime: 50,
    servings: 6,
    difficulty: 'Medium' as const,
    rating: 4.7,
    cuisine: 'Mexican',
    calories: 440
  },
  {
    id: '12',
    title: 'Mushroom Risotto',
    description: 'Creamy arborio rice cooked with wild mushrooms and parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop',
    cookTime: 35,
    servings: 4,
    difficulty: 'Hard' as const,
    rating: 4.8,
    cuisine: 'Italian',
    calories: 520
  },
  {
    id: '13',
    title: 'Chicken Tikka Masala',
    description: 'Marinated chicken in a rich, creamy tomato-based curry sauce.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop',
    cookTime: 55,
    servings: 4,
    difficulty: 'Hard' as const,
    rating: 4.9,
    cuisine: 'Indian',
    calories: 550
  },
  {
    id: '14',
    title: 'Fish and Chips',
    description: 'Beer-battered cod with crispy fries and mushy peas.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
    cookTime: 40,
    servings: 2,
    difficulty: 'Medium' as const,
    rating: 4.3,
    cuisine: 'American',
    calories: 680
  },
  {
    id: '15',
    title: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&h=600&fit=crop',
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy' as const,
    rating: 4.6,
    cuisine: 'Italian',
    calories: 280
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredRecipes = sampleRecipes.filter(recipe => {
    const categoryMatch = selectedCategory === 'All' || recipe.cuisine === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const handleRecipeClick = (recipe: typeof sampleRecipes[0]) => {
    console.log('Clicked recipe:', recipe.title);
    // This would navigate to recipe detail page
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Video Hero Section */}
        <VideoHero
          title="Master the Art of Cooking"
          subtitle="Watch professional chefs create amazing dishes step by step. Get inspired and learn new techniques."
          videoUrl="https://cdn.coverr.co/videos/coverr-cooking-pasta-in-a-pan-4047/1080p.mp4"
          type="recipe"
        />

        {/* Hero Section */}
        <div className="text-center space-y-4 py-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Your Personal Recipe Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover, organize, and cook amazing meals with our comprehensive recipe management system.
          </p>
          <Button size="lg" className="appetizing-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Plus className="h-5 w-5 mr-2" />
            Add New Recipe
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <RecipeFilters
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              onCategoryChange={setSelectedCategory}
              onDifficultyChange={setSelectedDifficulty}
            />
          </div>

          {/* Recipe Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">
                {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => handleRecipeClick(recipe)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

