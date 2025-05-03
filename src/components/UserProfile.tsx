
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface UserProfileData {
  name: string;
  age: number;
  gender: string;
  height: number; // in cm
  weight: number; // in kg
  goal: string;
  fitnessLevel: string;
  equipment: string;
  dietType: string;
  duration: number; // in minutes
  restrictions: string;
}

interface UserProfileProps {
  onSave: (profileData: UserProfileData) => void;
  initialProfile?: UserProfileData;
}

const DEFAULT_PROFILE: UserProfileData = {
  name: "",
  age: 30,
  gender: "not-specified",
  height: 170,
  weight: 70,
  goal: "general-wellness",
  fitnessLevel: "beginner",
  equipment: "none",
  dietType: "balanced",
  duration: 30,
  restrictions: ""
};

export function UserProfile({ onSave, initialProfile = DEFAULT_PROFILE }: UserProfileProps) {
  const [profile, setProfile] = useState<UserProfileData>(initialProfile);

  const handleChange = (field: keyof UserProfileData, value: string | number) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(profile);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>
          Fill in your details to get a personalized fitness plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={profile.age}
                onChange={(e) => handleChange("age", parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select 
                value={profile.gender} 
                onValueChange={(value) => handleChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="not-specified">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                value={profile.height}
                onChange={(e) => handleChange("height", parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={profile.weight}
                onChange={(e) => handleChange("weight", parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal">Goal</Label>
            <Select 
              value={profile.goal} 
              onValueChange={(value) => handleChange("goal", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weight-loss">Weight Loss</SelectItem>
                <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                <SelectItem value="general-wellness">General Wellness</SelectItem>
                <SelectItem value="endurance">Endurance</SelectItem>
                <SelectItem value="flexibility">Flexibility</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fitnessLevel">Fitness Level</Label>
              <Select 
                value={profile.fitnessLevel} 
                onValueChange={(value) => handleChange("fitnessLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="equipment">Available Equipment</Label>
              <Select 
                value={profile.equipment} 
                onValueChange={(value) => handleChange("equipment", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select equipment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="dumbbells">Dumbbells</SelectItem>
                  <SelectItem value="resistance-bands">Resistance Bands</SelectItem>
                  <SelectItem value="full-gym">Full Gym Access</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dietType">Diet Preference</Label>
              <Select 
                value={profile.dietType} 
                onValueChange={(value) => handleChange("dietType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select diet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="balanced">Balanced</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="keto">Keto</SelectItem>
                  <SelectItem value="paleo">Paleo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Workout Duration (minutes)</Label>
              <Select 
                value={profile.duration.toString()} 
                onValueChange={(value) => handleChange("duration", parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="restrictions">Injuries or Restrictions</Label>
            <Input
              id="restrictions"
              value={profile.restrictions}
              onChange={(e) => handleChange("restrictions", e.target.value)}
              placeholder="List any injuries or restrictions"
            />
          </div>

          <Button type="submit" className="w-full fitness-button-primary">
            Save Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
