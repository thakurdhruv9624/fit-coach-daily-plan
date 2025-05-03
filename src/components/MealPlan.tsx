
import { Utensils, Coffee, Apple, Pizza } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface MealItem {
  name: string;
  calories?: number;
  protein?: number;
}

interface MealPlanProps {
  dietType: string;
  breakfast: MealItem[];
  lunch: MealItem[];
  dinner: MealItem[];
  snacks: MealItem[];
}

export function MealPlan({
  dietType,
  breakfast,
  lunch,
  dinner,
  snacks
}: MealPlanProps) {
  return (
    <Card className="fitness-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-fitness-text">Today's Meal Plan</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-fitness-muted text-fitness-primary font-medium">
                {dietType}
              </span>
            </CardDescription>
          </div>
          <Utensils className="h-7 w-7 text-fitness-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <MealSection title="Breakfast" icon={<Coffee className="h-5 w-5" />} meals={breakfast} />
        <Separator />
        <MealSection title="Lunch" icon={<Pizza className="h-5 w-5" />} meals={lunch} />
        <Separator />
        <MealSection title="Dinner" icon={<Utensils className="h-5 w-5" />} meals={dinner} />
        <Separator />
        <MealSection title="Snacks" icon={<Apple className="h-5 w-5" />} meals={snacks} />
      </CardContent>
    </Card>
  );
}

interface MealSectionProps {
  title: string;
  icon: React.ReactNode;
  meals: MealItem[];
}

function MealSection({ title, icon, meals }: MealSectionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-lg font-medium">
        <span className="text-fitness-primary">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="space-y-1 ml-7">
        {meals.map((meal, index) => (
          <div key={index} className="flex justify-between">
            <span>{meal.name}</span>
            {meal.calories && (
              <span className="text-sm text-gray-500">{meal.calories} cal</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
