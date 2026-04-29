import AddReferralForm from "@/components/dashboard_components/forms/AddReferralForm";
import PageHeader from "@/components/ui/PageHeader";

const AddReferral = () => {
  return (
    <div className="max-w-lg">
      <PageHeader
        title="Add New Referral"
        subtitle="Enter the referral's details below"
        backHref="/dashboard/referrals"
        backLabel="Back to Referrals"
      />
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <AddReferralForm />
      </div>
    </div>
  );
};

export default AddReferral;
