import { WithdrawalForm } from "@/components/dashboard_components/forms/WithdrawalForm";
import TransactionTable from "@/components/dashboard_components/tables/TransactionTable";
import WalletCardDisplay from "@/components/dashboard_components/WalletCardDisplay";
import Loader from "@/helpers/Loader";
import {
  FetchUserWallet,
  FetchUserWithdrawals,
} from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wallet = () => {
  const { isLoading, wallets } = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUserWallet());
    dispatch(FetchUserWithdrawals());
  }, []);

  if (isLoading && !wallets) return <Loader />;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-lg font-bold text-gray-900"
            style={{ fontFamily: "eczar" }}>
            My Wallet
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Manage your earnings and withdrawals
          </p>
        </div>
      </div>

      {/* Withdrawal form */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h2
          className="text-sm font-bold text-gray-800 mb-4"
          style={{ fontFamily: "eczar" }}>
          Request Withdrawal
        </h2>
        <WithdrawalForm />
      </div>

      {/* Wallet stat cards */}
      <WalletCardDisplay />

      {/* Transactions */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2
            className="text-sm font-bold text-gray-800"
            style={{ fontFamily: "eczar" }}>
            Transaction History
          </h2>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Wallet;
