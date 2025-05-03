
import { useState } from "react";
import { Droplet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface HydrationTrackerProps {
  dailyGoal: number; // in ml
}

export function HydrationTracker({ dailyGoal = 2000 }: HydrationTrackerProps) {
  const [hydrationLevel, setHydrationLevel] = useState(0);
  
  const addWater = (amount: number) => {
    setHydrationLevel(prev => Math.min(prev + amount, dailyGoal));
  };
  
  const percentage = Math.round((hydrationLevel / dailyGoal) * 100);
  
  return (
    <Card className="fitness-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-fitness-text">
              Hydration Tracker
            </CardTitle>
            <CardDescription>
              Stay hydrated throughout the day
            </CardDescription>
          </div>
          <Droplet className="h-7 w-7 text-blue-400 fill-blue-200" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{hydrationLevel} ml</span>
              <span className="text-gray-500">Goal: {dailyGoal} ml</span>
            </div>
            <Progress value={percentage} className="h-4 rounded-full">
              <div 
                className="h-full bg-blue-400 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </Progress>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              onClick={() => addWater(200)}
              className="flex flex-col items-center border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Droplet className="h-5 w-5 text-blue-400 fill-blue-100" />
              <span className="text-sm">200ml</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => addWater(500)}
              className="flex flex-col items-center border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Droplet className="h-6 w-6 text-blue-400 fill-blue-100" />
              <span className="text-sm">500ml</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => addWater(1000)}
              className="flex flex-col items-center border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Droplet className="h-7 w-7 text-blue-400 fill-blue-100" />
              <span className="text-sm">1000ml</span>
            </Button>
          </div>
          
          <div className="text-center text-sm text-gray-500 pt-2">
            Tip: Keep a water bottle with you throughout the day
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
