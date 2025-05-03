
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MotivationalQuoteProps {
  quotes?: Array<{text: string, author?: string}>;
}

// Default quotes if none provided
const DEFAULT_QUOTES = [
  { text: "The only bad workout is the one that didn't happen.", author: "Unknown" },
  { text: "Strength does not come from the body. It comes from the will.", author: "Gandhi" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "Your health is an investment, not an expense.", author: "Unknown" },
  { text: "Success is usually the culmination of controlling failure.", author: "Sylvester Stallone" },
  { text: "The difference between try and triumph is just a little umph!", author: "Marvin Phillips" },
  { text: "The hard days are the best because that's when champions are made.", author: "Gabby Douglas" },
  { text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
  { text: "Strive for progress, not perfection.", author: "Unknown" },
  { text: "The only way to define your limits is by going beyond them.", author: "Arthur C. Clarke" }
];

export function MotivationalQuote({ quotes = DEFAULT_QUOTES }: MotivationalQuoteProps) {
  const [quote, setQuote] = useState<{text: string, author?: string}>({ text: "", author: "" });
  
  useEffect(() => {
    // Randomly select a quote when component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, [quotes]);
  
  return (
    <Card className="fitness-card bg-fitness-primary text-white">
      <CardContent className="py-4">
        <div className="flex items-start gap-3">
          <Quote className="h-5 w-5 flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm font-medium italic">"{quote.text}"</p>
            {quote.author && (
              <p className="text-xs mt-1 text-blue-100">— {quote.author}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
