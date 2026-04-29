import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Reset Password
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Enter your new password below.
        </p>
      </div>

      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
