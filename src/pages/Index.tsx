
import { useState } from "react";
import { UserProfile, UserProfileData } from "@/components/UserProfile";
import { FitnessDashboard } from "@/components/FitnessDashboard";
import { AppHeader } from "@/components/AppHeader";

const Index = () => {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [showProfileForm, setShowProfileForm] = useState(true);

  const handleProfileSave = (profileData: UserProfileData) => {
    setUserProfile(profileData);
    setShowProfileForm(false);
  };

  const handleEditProfile = () => {
    setShowProfileForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader 
        userProfile={userProfile || undefined} 
        onEditProfile={handleEditProfile} 
      />
      
      <main className="flex-1 container-app py-6">
        {showProfileForm || !userProfile ? (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {userProfile ? "Edit Your Profile" : "Welcome to FitCoach"}
            </h2>
            <UserProfile 
              onSave={handleProfileSave} 
              initialProfile={userProfile || undefined} 
            />
          </div>
        ) : (
          <FitnessDashboard userProfile={userProfile} />
        )}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container-app text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FitCoach Daily Plan App</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
