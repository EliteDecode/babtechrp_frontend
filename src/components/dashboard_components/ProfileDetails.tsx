import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineVerified } from "react-icons/md";
import { FaNairaSign } from "react-icons/fa6";
import { Button } from "../ui/button";

const ProfileDetails = () => {
  const { user } = useSelector((state: any) => state.user);
  const { referrals } = useSelector((state: any) => state.referral);
  const { wallets } = useSelector((state: any) => state.wallet);

  const stats = [
    { label: "Total Referrals", value: referrals?.length ?? 0 },
    {
      label: "Matched",
      value:
        referrals?.filter((item: any) => item?.isMatched === true)?.length ?? 0,
    },
    {
      label: "Total Earnings",
      value: (
        <span className="flex items-center justify-center gap-1">
          <FaNairaSign size={11} />
          {wallets?.total?.toLocaleString() ?? "0"}
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Name + email */}
      <div className="mb-4">
        <h2
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          {user?.fullname}
        </h2>
        <p className="text-sm text-gray-400 mt-0.5">@{user?.email}</p>
      </div>

      {/* Info rows */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400 w-24 shrink-0">Status</span>
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              user?.isProfileUpdated ? "text-green-600" : "text-red-500"
            }`}>
            <MdOutlineVerified size={14} />
            {user?.isProfileUpdated ? "Verified" : "Not Verified"}
          </span>
        </div>
        {user?.bstId && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 w-24 shrink-0">BST ID</span>
            <span className="text-gray-800 font-medium font-mono text-xs">
              {user.bstId}
            </span>
          </div>
        )}
        {user?.username && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 w-24 shrink-0">Username</span>
            <span className="text-gray-800 font-medium">@{user.username}</span>
          </div>
        )}
        {(user?.phone || user?.address) && (
          <div className="flex items-start gap-2 text-sm">
            <span className="text-gray-400 w-24 shrink-0">Contact</span>
            <span className="text-gray-700">
              {[user?.phone, user?.address].filter(Boolean).join(" · ")}
            </span>
          </div>
        )}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border rounded-xl overflow-hidden mb-5">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`py-4 text-center ${i < stats.length - 1 ? "border-r" : ""}`}>
            <p
              className="text-lg font-bold text-gray-900"
              style={{ fontFamily: "eczar" }}>
              {stat.value}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <Link to="/dashboard/profile/update-profile">
        <Button size="sm">Update Profile</Button>
      </Link>
    </div>
  );
};

export default ProfileDetails;
