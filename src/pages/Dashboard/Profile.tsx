import ProfileDetails from "@/components/dashboard_components/ProfileDetails";
import { FetchReferralDetails } from "@/services/features/referral/referralSlice";
import { FetchUserWallet } from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: any) => state.user);

  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  useEffect(() => {
    dispatch(FetchUserWallet());
    dispatch(FetchReferralDetails());
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 rounded-2xl h-32 relative mb-14">
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 rounded-full bg-primary border-4 border-white flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {initials}
          </div>
        </div>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Profile;
