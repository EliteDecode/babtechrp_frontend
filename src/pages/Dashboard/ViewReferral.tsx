import UpdateReferralForm from "@/components/dashboard_components/forms/UpdateReferralForm";
import ReferralDetails from "@/components/dashboard_components/ReferralDetails";
import PageHeader from "@/components/ui/PageHeader";
import Loader from "@/helpers/Loader";
import { FetchSingleReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewReferral = () => {
  const { referralId } = useParams();
  const { isLoading, singleReferral } = useSelector(
    (state: any) => state.referral
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (referralId) dispatch(FetchSingleReferralDetails(referralId));
  }, []);

  if (isLoading && !singleReferral) return <Loader />;

  return (
    <div>
      <PageHeader
        title="Referral Details"
        backHref="/dashboard/referrals"
        backLabel="Back to Referrals"
      />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2
            className="text-sm font-bold text-gray-800 mb-4"
            style={{ fontFamily: "eczar" }}>
            Information
          </h2>
          <ReferralDetails />
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2
            className="text-sm font-bold text-gray-800 mb-1"
            style={{ fontFamily: "eczar" }}>
            Edit Referral
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            Update the referral details below
          </p>
          <UpdateReferralForm />
        </div>
      </div>
    </div>
  );
};

export default ViewReferral;
