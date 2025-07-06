
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Plus } from 'lucide-react';

interface MealPlan {
  [key: string]: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

const MealPlanCalendar = () => {
  const [mealPlan, setMealPlan] = useState<MealPlan>({});
  
  const days = [
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const mealTypes = ['breakfast', 'lunch', 'dinner'];

  const addMealToDay = (day: string, mealType: string) => {
    console.log(`Adding ${mealType} to ${day}`);
    // This would open a recipe selector dialog
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Weekly Meal Plan</h2>
        <Button className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>This Week</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {days.map((day) => (
          <Card key={day} className="min-h-[400px]">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-sm font-medium">
                {day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mealTypes.map((mealType) => (
                <div key={mealType} className="space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {mealType}
                  </h4>
                  <div className="min-h-[60px] rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center hover:border-primary/50 transition-colors">
                    {mealPlan[day]?.[mealType as keyof typeof mealPlan[string]] ? (
                      <div className="text-center p-2">
                        <p className="text-sm font-medium">
                          {mealPlan[day][mealType as keyof typeof mealPlan[string]]}
                        </p>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => addMealToDay(day, mealType)}
                        className="h-auto flex-col space-y-1 text-muted-foreground hover:text-primary"
                      >
                        <Plus className="h-4 w-4" />
                        <span className="text-xs">Add Meal</span>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MealPlanCalendar;
