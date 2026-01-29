import { useState } from "react";
import Google from "../../assets/register/google.png";
import User from "../../assets/register/user.png";
import Mail from "../../assets/register/mail-for-register.png";
import Lock from "../../assets/register/lock.png";
import Eye from "../../assets/register/eye.png";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignUp = () => {
    console.log("Sign up:", formData);
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  return (
    <div className=" bg-bg flex items-center justify-center py-6 md:py-8 lg:py-16 2xl:py-[100px] px-4 md:px-0">
      <div className="w-full max-w-md bg-white rounded-[10px] px-4 md:px-[30px] py-[50px]">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
          <h2 className="text-base md:text-lg lg:text-xl 2xl:text-[24px] font-bold text-dark mb-4 md:mb-5 lg:mb-6 2xl:mb-[24px]">
            Sign In
          </h2>
          <p className="text-sm text-light">
            Already have an account?
            <Link to="/register" className="text-primary hover:underline ml-1">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9 py-5  bg-bg rounded-full flex items-center justify-center gap-2.5 transition-colors"
        >
          <img src={Google} alt="Google" />
          <span className="font-bold text-dark">Sign in with Google</span>
        </button>

        {/* Divider */}
        <div className="relative mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-400">OR</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 md:space-y-4">
          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <img src={Mail} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full pl-12 pr-[22px] py-[18px] py-[18px] bg-bg border-0 rounded-[10px] focus:outline-none   text-light placeholder-gray-400"
              />
            </div>
          </div>

          {/* Your Password */}
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Your Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <img src={Lock} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="**********"
                className="w-full pl-12 pr-[22px] py-[18px] py-[18px] bg-bg border-0 rounded-[10px] focus:outline-none   text-light placeholder-gray-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <img src={Eye} />
              </div>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2.5">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 mb-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer "
              />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>
            <div>
              <label className="text-sm text-gray-600">Forget Password?</label>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            className="w-full py-5 bg-[#031E2D] text-white font-bold rounded-full transition-colors cursor-pointer "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
