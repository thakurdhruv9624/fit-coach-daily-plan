
import { Dumbbell, Clock, RotateCcw, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface Exercise {
  name: string;
  duration: string;
  reps?: string;
  sets?: number;
  notes?: string;
}

interface WorkoutPlanProps {
  title: string;
  exercises: Exercise[];
  fitnessLevel: string;
  totalDuration: number;
  onComplete: () => void;
}

export function WorkoutPlan({
  title,
  exercises,
  fitnessLevel,
  totalDuration,
  onComplete
}: WorkoutPlanProps) {
  return (
    <Card className="fitness-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-fitness-text">{title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-fitness-secondary" />
              <span>{totalDuration} mins</span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-fitness-muted text-fitness-primary font-medium">
                {fitnessLevel}
              </span>
            </CardDescription>
          </div>
          <Dumbbell className="h-7 w-7 text-fitness-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-sm font-medium">Progress</div>
            <Progress value={0} className="fitness-progress">
              <div className="fitness-progress-bar w-0"></div>
            </Progress>
          </div>
          
          <div className="bg-fitness-muted rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-lg">Today's Exercises</h3>
            
            {exercises.map((exercise, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-fitness-text">{exercise.name}</span>
                  <span className="text-sm text-gray-500">{exercise.duration}</span>
                </div>
                
                {(exercise.sets && exercise.reps) && (
                  <div className="text-sm text-gray-600">
                    {exercise.sets} sets × {exercise.reps}
                  </div>
                )}
                
                {exercise.notes && (
                  <div className="flex items-start gap-2 bg-white p-2 rounded border border-gray-100 text-sm">
                    <AlertCircle className="h-4 w-4 text-fitness-primary flex-shrink-0 mt-0.5" />
                    <span>{exercise.notes}</span>
                  </div>
                )}
                
                {index < exercises.length - 1 && (
                  <Separator className="my-2" />
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button variant="outline" className="flex gap-2">
              <RotateCcw className="h-4 w-4" />
              Skip Today
            </Button>
            <Button onClick={onComplete} className="fitness-button-primary">
              Complete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
