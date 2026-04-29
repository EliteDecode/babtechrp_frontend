import AllReferralsTables from "@/components/dashboard_components/tables/AllReferralsTables";
import PageHeader from "@/components/ui/PageHeader";
import Loader from "@/helpers/Loader";
import { FetchReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Referrals = () => {
  const { isLoading, referrals } = useSelector((state: any) => state.referral);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchReferralDetails());
  }, []);

  return (
    <div>
      <PageHeader
        title="All Referrals"
        subtitle={`${referrals?.length ?? 0} referral${referrals?.length !== 1 ? "s" : ""} total`}
        action={
          <Link
            to="/dashboard/add-referral"
            className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all">
            <RiUserAddFill size={14} />
            Add Referral
          </Link>
        }
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <AllReferralsTables />
        </div>
      )}
    </div>
  );
};

export default Referrals;
