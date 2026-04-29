import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/images/Logo.png";
import Footer from "../GeneralLayout/Footer";

const AuthLayout = () => {
  return (
    <>
      <div className="auth-root">
        {/* Mobile: gradient background */}
        <div className="auth-bg-mobile sm:hidden">
          <div className="p-6 pt-14">
            <Link to="/">
              <img
                src={logo}
                alt="BST Logo"
                className="w-24 brightness-0 invert"
              />
            </Link>
            <div className="mt-8">
              <h2
                className="text-white text-2xl font-bold leading-snug"
                style={{ fontFamily: "eczar" }}>
                Refer. Earn. Grow.
              </h2>
              <p className="text-blue-300 text-sm mt-2 leading-relaxed">
                Join thousands earning through the BST referral platform.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: left brand panel */}
        <div className="auth-brand-panel">
          <Link to="/">
            <img
              src={logo}
              alt="BST Logo"
              className="w-28 brightness-0 invert"
            />
          </Link>
          <div className="mt-auto mb-16">
            <div className="mb-4 w-10 h-0.5 bg-white/30 rounded-full" />
            <h1
              className="text-white text-4xl font-bold leading-tight mb-4"
              style={{ fontFamily: "eczar" }}>
              Refer.
              <br />
              Earn.
              <br />
              Grow.
            </h1>
            <p className="text-blue-300 text-base leading-relaxed max-w-xs">
              Join thousands of users earning rewards through the BST referral
              platform.
            </p>
          </div>
          <p className="text-blue-400/60 text-xs">
            © 2025 BST. All rights reserved.
          </p>
        </div>

        {/* Form panel — bottom drawer on mobile, right panel on desktop */}
        <div className="auth-form-panel">
          <div className="auth-drawer-pill" />
          <div className="w-full max-w-sm mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
