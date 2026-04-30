import LoginForm from "@/components/auth/LoginForm";
import SignUpOptions from "@/components/auth/SignUpOptions";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full">
      <div className="mb-3">
        <h1
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: "eczar" }}>
          Welcome back
        </h1>
        <p className="text-gray-400 text-xs mt-0.5">
          Sign in to your BST account
        </p>
      </div>

      <SignUpOptions />

      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-3 text-gray-400">
            or continue with email
          </span>
        </div>
      </div>

      <LoginForm />

      <div className="mt-3 space-y-1.5">
        <p className="text-xs text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="text-xs text-gray-500">
          <Link
            to="/auth/forgot-password"
            className="text-primary font-semibold hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
