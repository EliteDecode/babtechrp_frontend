import { ConfirmCodeForm } from "@/components/auth/ConfirmCodeForm";
import useConfirmCodeForm from "@/hooks/form-hooks/useConfirmCodeForm";

const ConfirmCode = () => {
  const { user } = useConfirmCodeForm();

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-primary text-xl font-bold">✉</span>
        </div>
        <h1
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Verification code
        </h1>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          A 5-digit code has been sent to{" "}
          <span className="font-semibold text-gray-700">{user?.email}</span>
        </p>
      </div>

      <ConfirmCodeForm />
    </div>
  );
};

export default ConfirmCode;
