import { IWithdrawal } from "@/types/wallet.types";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useSelector } from "react-redux";

import debitIcon from "@/assets/icons/debit.png";
import earningsIcon from "@/assets/icons/earning.png";
import walletIcon from "@/assets/icons/wallet.png";
import pendingIcon from "@/assets/icons/pending.png";

const WalletCardDisplay = () => {
  const { wallets, withdrawals } = useSelector((state: any) => state.wallet);

  const total = wallets?.total || 0;
  const withdrawn = wallets?.withdrawn || 0;
  const balance = wallets?.balance || 0;
  const withdrawableBalance = wallets?.balance - 5000 < 0 ? 0 : wallets?.balance - 5000;
  const pendingWithdrawals = withdrawals
    ?.filter((w: IWithdrawal) => w?.status === "pending")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0) || 0;

  const withdrawnPct = total > 0 ? ((withdrawn / total) * 100).toFixed(1) : "0.0";
  const balancePct = total > 0 ? ((balance / total) * 100).toFixed(1) : "0.0";
  const pendingPct = total > 0 ? ((pendingWithdrawals / total) * 100).toFixed(1) : "0.0";

  const cards = [
    {
      title: "Total Earnings",
      value: `₦${total.toLocaleString()}`,
      pct: "+100%",
      positive: true,
      icon: earningsIcon,
      color: "bg-green-50",
    },
    {
      title: "Withdrawn",
      value: `₦${withdrawn.toLocaleString()}`,
      pct: withdrawn > 0 ? `-${withdrawnPct}%` : "0%",
      positive: false,
      icon: debitIcon,
      color: "bg-red-50",
    },
    {
      title: "Balance",
      value: `₦${balance.toLocaleString()}`,
      sub: `Withdrawable: ₦${withdrawableBalance.toLocaleString()}`,
      pct: `${balancePct}%`,
      positive: parseFloat(balancePct) > 0,
      icon: walletIcon,
      color: "bg-blue-50",
    },
    {
      title: "Pending Withdrawals",
      value: `₦${pendingWithdrawals.toLocaleString()}`,
      pct: pendingWithdrawals > 0 ? `-${pendingPct}%` : "0%",
      positive: false,
      icon: pendingIcon,
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/20 hover:shadow-sm transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center`}>
              <img src={card.icon} alt="" className="w-5 h-5" />
            </div>
            <span
              className={`flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                card.positive
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-500"
              }`}>
              {card.positive ? (
                <TrendingUp size={10} />
              ) : (
                <TrendingDown size={10} />
              )}
              {card.pct}
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium">{card.title}</p>
          <p
            className="text-xl font-bold text-gray-900 mt-0.5"
            style={{ fontFamily: "eczar" }}>
            {card.value}
          </p>
          {card.sub && (
            <p className="text-[10px] text-gray-400 mt-1">{card.sub}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default WalletCardDisplay;
