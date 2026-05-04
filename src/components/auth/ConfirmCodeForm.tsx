import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useConfirmCodeForm from "@/hooks/form-hooks/useConfirmCodeForm";
import axiosClient from "@/services/api/axiosClient";
import toast from "react-hot-toast";
import { useState } from "react";

export function ConfirmCodeForm() {
  const { formik, isLoading, user } = useConfirmCodeForm();
  const [resending, setResending] = useState(false);

  const handleResend = async () => {
    if (!user?._id) return;
    setResending(true);
    try {
      await axiosClient.post(`/auth/resend-verification/${user._id}`);
      toast.success("A new code has been sent to your email");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to resend code");
    } finally {
      setResending(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div className="flex items-center justify-center">
        <InputOTP
          maxLength={5}
          value={formik.values.pin}
          onChange={(value) => formik.setFieldValue("pin", value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {formik.errors.pin && formik.touched.pin && (
        <p className="text-red-500 text-[10px] text-center">{formik.errors.pin}</p>
      )}

      <Button type="submit" className="w-full" disabled={isLoading} style={{ fontFamily: "eczar" }}>
        {isLoading ? <ButtonSpinners /> : "Verify Email"}
      </Button>

      <p className="text-center text-xs text-gray-400">
        Didn't receive a code?{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={resending}
          className="text-primary font-semibold hover:underline disabled:opacity-50">
          {resending ? "Sending..." : "Resend"}
        </button>
      </p>
    </form>
  );
}
