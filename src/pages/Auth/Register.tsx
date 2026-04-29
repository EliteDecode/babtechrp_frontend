import RegisterForm from "@/components/auth/RegisterForm";
import SignUpOptions from "@/components/auth/SignUpOptions";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Refer and Earn
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Create your BST account
        </p>
      </div>

      <SignUpOptions />

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-3 text-gray-400">
            or continue with email
          </span>
        </div>
      </div>

      <RegisterForm />

      <div className="mt-5">
        <p className="text-xs text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
