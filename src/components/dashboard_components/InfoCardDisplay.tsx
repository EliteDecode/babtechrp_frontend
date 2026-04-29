import { InfoCardDisplayProps } from "@/types/majorTypes";
import { modelReferralDataToChart } from "@/lib/referralChartData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AreaChartComp from "./AreaChartComp";
import { ArrowRight } from "lucide-react";

import registeredUsersIcon from "@/assets/icons/document.png";
import usersIcon from "@/assets/icons/team.png";
import walletIcon from "@/assets/icons/wallet.png";
import { FaNairaSign } from "react-icons/fa6";

const InfoCardDisplay = () => {
  const { referrals } = useSelector((state: any) => state.referral);
  const { wallets } = useSelector((state: any) => state.wallet);

  const referralChart = modelReferralDataToChart(referrals);

  const HomeCardContents: InfoCardDisplayProps[] = [
    {
      title: "All Referrals",
      description: referrals?.length ?? 0,
      buttonText: "View Referrals",
      link: "/dashboard/referrals",
      image: usersIcon,
    },
    {
      title: "Matched Referrals",
      description:
        referrals?.filter((item: any) => item.isMatched === true).length ?? 0,
      buttonText: "View Referrals",
      link: "/dashboard/referrals",
      image: registeredUsersIcon,
    },
    {
      title: "Wallet Balance",
      description: (
        <span className="flex items-center gap-1">
          <FaNairaSign size={16} />
          {wallets?.balance?.toLocaleString() ?? "0"}
        </span>
      ),
      buttonText: "View Wallet",
      link: "/dashboard/wallet",
      image: walletIcon,
    },
    {
      title: "Total Withdrawn",
      description: (
        <span className="flex items-center gap-1">
          <FaNairaSign size={16} />
          {wallets?.withdrawn?.toLocaleString() ?? "0"}
        </span>
      ),
      buttonText: "View Wallet",
      link: "/dashboard/wallet",
      image: walletIcon,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {HomeCardContents.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/20 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                <img src={item.image} alt="" className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-gray-500 font-medium">{item.title}</p>
            <p
              className="text-2xl font-bold text-gray-900 mt-0.5 mb-3"
              style={{ fontFamily: "eczar" }}>
              {item.description}
            </p>
            <Link
              to={item.link}
              className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline">
              {item.buttonText}
              <ArrowRight size={11} />
            </Link>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <div className="mb-4">
          <h3
            className="text-sm font-bold text-gray-800"
            style={{ fontFamily: "eczar" }}>
            Referral Overview
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">Monthly referral activity</p>
        </div>
        <div className="h-[42vh]">
          <AreaChartComp
            data={referralChart}
            stroke="hsl(240 100% 20%)"
            fill="hsl(240 100% 20%)"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCardDisplay;
