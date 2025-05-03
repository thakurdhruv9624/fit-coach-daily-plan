
import { useState, useEffect } from 'react';
import { UserProfileData } from '@/components/UserProfile';

export interface FitnessData {
  workouts: {
    title: string;
    exercises: Array<{
      name: string;
      duration: string;
      reps?: string;
      sets?: number;
      notes?: string;
    }>;
    fitnessLevel: string;
    totalDuration: number;
  },
  meals: {
    dietType: string;
    breakfast: Array<{name: string, calories?: number}>;
    lunch: Array<{name: string, calories?: number}>;
    dinner: Array<{name: string, calories?: number}>;
    snacks: Array<{name: string, calories?: number}>;
  },
  hydration: {
    dailyGoal: number;
  }
}

// Generate a sample workout plan based on user profile
function generateWorkoutPlan(profile: UserProfileData): FitnessData['workouts'] {
  // This is a simplified example - in a real app, you'd have more sophisticated logic
  const { fitnessLevel, equipment, duration, goal, restrictions } = profile;
  
  // Different workouts based on equipment
  let exercises = [];
  
  if (equipment === 'none') {
    exercises = [
      {
        name: "Jumping Jacks",
        duration: "3 mins",
        notes: "Great for warming up"
      },
      {
        name: "Push-ups",
        duration: "5 mins",
        sets: 3,
        reps: "10-15 reps",
        notes: fitnessLevel === 'beginner' ? "Try on knees if needed" : undefined
      },
      {
        name: "Bodyweight Squats",
        duration: "5 mins",
        sets: 3,
        reps: "15-20 reps"
      },
      {
        name: "Plank",
        duration: "5 mins",
        sets: 3,
        reps: fitnessLevel === 'beginner' ? "30 sec hold" : "45-60 sec hold"
      },
      {
        name: "Mountain Climbers",
        duration: "5 mins",
        sets: 3,
        reps: "30 sec"
      },
      {
        name: "Cool Down Stretches",
        duration: "5 mins",
        notes: "Focus on major muscle groups"
      }
    ];
  } else if (equipment === 'dumbbells') {
    exercises = [
      {
        name: "Dumbbell Squat",
        duration: "5 mins",
        sets: 3,
        reps: "12-15 reps"
      },
      {
        name: "Dumbbell Rows",
        duration: "5 mins",
        sets: 3,
        reps: "10-12 reps per arm"
      },
      {
        name: "Dumbbell Chest Press",
        duration: "5 mins",
        sets: 3,
        reps: "10-12 reps"
      },
      {
        name: "Dumbbell Lunges",
        duration: "5 mins",
        sets: 3,
        reps: "10 reps each leg"
      },
      {
        name: "Dumbbell Shoulder Press",
        duration: "5 mins",
        sets: 3,
        reps: "10-12 reps"
      }
    ];
  } else {
    exercises = [
      {
        name: "Barbell Squats",
        duration: "5 mins",
        sets: 4,
        reps: "8-10 reps"
      },
      {
        name: "Bench Press",
        duration: "5 mins",
        sets: 4,
        reps: "8-10 reps"
      },
      {
        name: "Deadlift",
        duration: "5 mins",
        sets: 4,
        reps: "6-8 reps",
        notes: "Focus on form"
      },
      {
        name: "Lat Pulldown",
        duration: "5 mins",
        sets: 3,
        reps: "10-12 reps"
      },
      {
        name: "Cable Tricep Extension",
        duration: "5 mins",
        sets: 3,
        reps: "12-15 reps"
      }
    ];
  }
  
  // Title based on goal
  let title = "";
  switch (goal) {
    case 'weight-loss':
      title = "Fat Burning Workout";
      break;
    case 'muscle-gain':
      title = "Muscle Building Workout";
      break;
    case 'endurance':
      title = "Endurance Training";
      break;
    case 'flexibility':
      title = "Flexibility & Mobility";
      break;
    default:
      title = "Full Body Workout";
  }
  
  return {
    title,
    exercises,
    fitnessLevel,
    totalDuration: duration
  };
}

// Generate meal plans based on user profile
function generateMealPlan(profile: UserProfileData): FitnessData['meals'] {
  const { dietType } = profile;
  
  let breakfast, lunch, dinner, snacks;
  
  // Basic meal suggestions based on diet type
  if (dietType === 'vegetarian') {
    breakfast = [
      { name: "Greek yogurt with berries and honey", calories: 320 },
      { name: "Whole grain toast", calories: 180 }
    ];
    lunch = [
      { name: "Quinoa salad with vegetables", calories: 410 },
      { name: "Fruit side", calories: 120 }
    ];
    dinner = [
      { name: "Vegetable stir fry with tofu", calories: 380 },
      { name: "Brown rice", calories: 220 }
    ];
    snacks = [
      { name: "Hummus with carrot sticks", calories: 150 },
      { name: "Mixed nuts", calories: 170 }
    ];
  } else if (dietType === 'vegan') {
    breakfast = [
      { name: "Overnight oats with almond milk", calories: 290 },
      { name: "Chia seeds and fruits", calories: 120 }
    ];
    lunch = [
      { name: "Buddha bowl with chickpeas", calories: 440 },
      { name: "Avocado", calories: 160 }
    ];
    dinner = [
      { name: "Lentil soup", calories: 320 },
      { name: "Whole grain bread", calories: 180 }
    ];
    snacks = [
      { name: "Energy balls", calories: 130 },
      { name: "Apple with almond butter", calories: 200 }
    ];
  } else if (dietType === 'keto') {
    breakfast = [
      { name: "Eggs with avocado and bacon", calories: 450 }
    ];
    lunch = [
      { name: "Chicken salad with olive oil dressing", calories: 380 },
      { name: "Olives", calories: 100 }
    ];
    dinner = [
      { name: "Salmon with asparagus", calories: 410 },
      { name: "Cauliflower rice", calories: 120 }
    ];
    snacks = [
      { name: "Cheese and nuts", calories: 230 },
      { name: "Pork rinds", calories: 160 }
    ];
  } else {
    // Balanced diet
    breakfast = [
      { name: "Scrambled eggs", calories: 220 },
      { name: "Whole grain toast", calories: 180 },
      { name: "Fruit", calories: 100 }
    ];
    lunch = [
      { name: "Grilled chicken sandwich", calories: 420 },
      { name: "Side salad", calories: 120 }
    ];
    dinner = [
      { name: "Baked fish", calories: 280 },
      { name: "Steamed vegetables", calories: 120 },
      { name: "Quinoa", calories: 220 }
    ];
    snacks = [
      { name: "Greek yogurt", calories: 150 },
      { name: "Apple", calories: 95 }
    ];
  }
  
  return {
    dietType,
    breakfast,
    lunch,
    dinner,
    snacks
  };
}

// Calculate hydration needs based on weight
function calculateHydration(profile: UserProfileData): FitnessData['hydration'] {
  // A common rule is 30-35ml per kg of body weight
  const dailyGoal = Math.round(profile.weight * 33); // using 33ml per kg as an average
  
  return {
    dailyGoal
  };
}

export function useFitnessData(profile: UserProfileData | null) {
  const [fitnessData, setFitnessData] = useState<FitnessData | null>(null);
  
  useEffect(() => {
    if (profile) {
      // Generate a personalized fitness plan based on the user's profile
      const workouts = generateWorkoutPlan(profile);
      const meals = generateMealPlan(profile);
      const hydration = calculateHydration(profile);
      
      setFitnessData({
        workouts,
        meals,
        hydration
      });
    }
  }, [profile]);
  
  return fitnessData;
}
