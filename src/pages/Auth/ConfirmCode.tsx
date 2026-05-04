import { ConfirmCodeForm } from "@/components/auth/ConfirmCodeForm";
import useConfirmCodeForm from "@/hooks/form-hooks/useConfirmCodeForm";
import { Mail } from "lucide-react";

const ConfirmCode = () => {
  const { user } = useConfirmCodeForm();

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <Mail size={20} className="text-primary" />
        </div>
        <h1
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Verification code
        </h1>
        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
          A 5-digit code has been sent to{" "}
          <span className="font-semibold text-gray-700">{user?.email}</span>
        </p>
      </div>

      <ConfirmCodeForm />
    </div>
  );
};

export default ConfirmCode;
