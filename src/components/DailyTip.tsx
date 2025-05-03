
import { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DailyTipProps {
  tips?: string[];
}

// Default tips if none provided
const DEFAULT_TIPS = [
  "Sleep 7-9 hours each night for optimal recovery and health benefits.",
  "Try to include protein with each meal to support muscle repair and growth.",
  "Take short walking breaks during the day to reduce sitting time.",
  "Stay hydrated - even mild dehydration can affect your performance.",
  "Practice mindful eating by removing distractions during meals.",
  "Incorporate stretching into your daily routine for better flexibility.",
  "Consistency matters more than perfection - small daily habits add up.",
  "Listen to your body and take rest days when needed.",
  "Use the 80/20 rule: 80% nutritious foods, 20% treats for sustainability.",
  "Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)."
];

export function DailyTip({ tips = DEFAULT_TIPS }: DailyTipProps) {
  const [tip, setTip] = useState<string>("");
  
  useEffect(() => {
    // Randomly select a tip when component mounts
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  }, [tips]);
  
  return (
    <Card className="fitness-card">
      <CardContent className="py-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-sm text-gray-600 mb-1">Daily Tip</h3>
            <p className="text-sm">{tip}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
