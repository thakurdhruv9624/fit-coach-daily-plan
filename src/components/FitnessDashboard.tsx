
import { useState } from "react";
import { UserProfileData } from "./UserProfile";
import { WorkoutPlan } from "./WorkoutPlan";
import { MealPlan } from "./MealPlan";
import { HydrationTracker } from "./HydrationTracker";
import { DailyTip } from "./DailyTip";
import { MotivationalQuote } from "./MotivationalQuote";
import { useFitnessData } from "@/hooks/useFitnessData";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Utensils, Droplet, LineChart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FitnessDashboardProps {
  userProfile: UserProfileData;
}

export function FitnessDashboard({ userProfile }: FitnessDashboardProps) {
  const fitnessData = useFitnessData(userProfile);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("workout");
  
  const handleWorkoutComplete = () => {
    toast({
      title: "Workout Completed!",
      description: "Great job! Your progress has been saved.",
    });
  };
  
  if (!fitnessData) {
    return (
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardContent className="py-10 text-center">
            <p>Generating your personalized fitness plan...</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Your Daily Plan</h2>
      
      {/* Mobile tabs */}
      <div className="md:hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="workout" className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4" />
              <span>Workout</span>
            </TabsTrigger>
            <TabsTrigger value="meals" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              <span>Meals</span>
            </TabsTrigger>
            <TabsTrigger value="hydration" className="flex items-center gap-2">
              <Droplet className="h-4 w-4" />
              <span>Hydration</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="workout" className="mt-4">
            <WorkoutPlan 
              title={fitnessData.workouts.title}
              exercises={fitnessData.workouts.exercises}
              fitnessLevel={fitnessData.workouts.fitnessLevel}
              totalDuration={fitnessData.workouts.totalDuration}
              onComplete={handleWorkoutComplete}
            />
          </TabsContent>
          
          <TabsContent value="meals" className="mt-4">
            <MealPlan 
              dietType={fitnessData.meals.dietType}
              breakfast={fitnessData.meals.breakfast}
              lunch={fitnessData.meals.lunch}
              dinner={fitnessData.meals.dinner}
              snacks={fitnessData.meals.snacks}
            />
          </TabsContent>
          
          <TabsContent value="hydration" className="mt-4">
            <HydrationTracker dailyGoal={fitnessData.hydration.dailyGoal} />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkoutPlan 
          title={fitnessData.workouts.title}
          exercises={fitnessData.workouts.exercises}
          fitnessLevel={fitnessData.workouts.fitnessLevel}
          totalDuration={fitnessData.workouts.totalDuration}
          onComplete={handleWorkoutComplete}
        />
        
        <MealPlan 
          dietType={fitnessData.meals.dietType}
          breakfast={fitnessData.meals.breakfast}
          lunch={fitnessData.meals.lunch}
          dinner={fitnessData.meals.dinner}
          snacks={fitnessData.meals.snacks}
        />
        
        <HydrationTracker dailyGoal={fitnessData.hydration.dailyGoal} />
        
        <div className="space-y-6">
          <DailyTip />
          <MotivationalQuote />
        </div>
      </div>
      
      {/* Mobile motivation section */}
      <div className="md:hidden space-y-4 mt-6">
        <DailyTip />
        <MotivationalQuote />
      </div>
    </div>
  );
}
