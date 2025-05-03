
import { useState } from "react";
import { Menu, Dumbbell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { UserProfileData } from "./UserProfile";

interface AppHeaderProps {
  userProfile?: UserProfileData;
  onEditProfile: () => void;
}

export function AppHeader({ userProfile, onEditProfile }: AppHeaderProps) {
  const userName = userProfile?.name || "Fitness Enthusiast";
  
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6">
      <div className="container-app flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-fitness-primary" />
          <h1 className="font-semibold text-xl">FitCoach</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onEditProfile}
            className="text-sm font-medium hidden md:inline-flex"
          >
            {userName}
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <h3 className="text-lg font-medium">Hi, {userName}</h3>
                <Button 
                  variant="outline" 
                  onClick={onEditProfile}
                  className="justify-start"
                >
                  Edit Profile
                </Button>
                <Button variant="outline" className="justify-start">
                  Daily Workouts
                </Button>
                <Button variant="outline" className="justify-start">
                  Meal Plans
                </Button>
                <Button variant="outline" className="justify-start">
                  Progress
                </Button>
                <Button variant="outline" className="justify-start">
                  Settings
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
