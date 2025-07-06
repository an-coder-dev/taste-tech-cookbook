
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { List, Plus, Trash } from 'lucide-react';

interface GroceryItem {
  id: string;
  name: string;
  quantity: string;
  category: string;
  checked: boolean;
  fromRecipe?: string;
}

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([
    {
      id: '1',
      name: 'Chicken Breast',
      quantity: '2 lbs',
      category: 'Meat',
      checked: false,
      fromRecipe: 'Grilled Chicken Salad'
    },
    {
      id: '2',
      name: 'Mixed Greens',
      quantity: '1 bag',
      category: 'Produce',
      checked: false,
      fromRecipe: 'Grilled Chicken Salad'
    },
    {
      id: '3',
      name: 'Olive Oil',
      quantity: '1 bottle',
      category: 'Pantry',
      checked: true
    },
    {
      id: '4',
      name: 'Pasta',
      quantity: '2 boxes',
      category: 'Pantry',
      checked: false,
      fromRecipe: 'Spaghetti Carbonara'
    }
  ]);

  const categories = ['Produce', 'Meat', 'Dairy', 'Pantry', 'Frozen', 'Other'];

  const toggleItem = (id: string) => {
    setGroceryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setGroceryItems(items => items.filter(item => item.id !== id));
  };

  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = groceryItems.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, GroceryItem[]>);

  const totalItems = groceryItems.length;
  const completedItems = groceryItems.filter(item => item.checked).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Grocery List</h2>
          <p className="text-muted-foreground">
            {completedItems} of {totalItems} items completed
          </p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Item</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const items = groupedItems[category];
          if (items.length === 0) return null;

          return (
            <Card key={category}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <List className="h-5 w-5 text-primary" />
                  <span>{category}</span>
                  <span className="text-sm text-muted-foreground">
                    ({items.length})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center space-x-3 p-2 rounded-lg border ${
                      item.checked
                        ? 'bg-muted/50 border-muted'
                        : 'border-transparent hover:bg-muted/25'
                    }`}
                  >
                    <Checkbox
                      checked={item.checked}
                      onCheckedChange={() => toggleItem(item.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        item.checked ? 'line-through text-muted-foreground' : ''
                      }`}>
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity}
                        {item.fromRecipe && (
                          <span className="ml-1 text-primary">
                            • {item.fromRecipe}
                          </span>
                        )}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GroceryList;
