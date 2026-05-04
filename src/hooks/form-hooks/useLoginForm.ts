import { loginSchema } from "@/lib/schemas";
import { LoginUser, reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePasswordVisibility = () => setShowPassword((p) => !p);

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && message === "Login successfully") {
      dispatch(reset());
    }

    if (isError && message) {
      // Unverified email — redirect to confirm page with userId pre-filled
      if (message.startsWith("UNVERIFIED_EMAIL:")) {
        const [, userId, email] = message.split(":");
        localStorage.setItem("BST_reg_data", JSON.stringify({ _id: userId, email }));
        dispatch(reset());
        toast("Please verify your email to continue.", { icon: "✉️" });
        navigate("/auth/confirm");
        return;
      }

      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(LoginUser(values));
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword, isLoading };
};

export default useLoginForm;
