"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  PieChart,
  Sparkles,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema } from "@/schemas/auth.schema";
import type { SignupData } from "@/types/auth";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    try {
      const result = await api.signup(data);

      toast.success(result.message || "Account created successfully!");
      router.push("/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-950 text-slate-100">
      {/* Left Column: Finora Brand Showcase */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-r border-slate-800/60 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 -left-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Brand Logo Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 font-bold text-xl">
            F
          </div>

          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Finora
          </span>
        </div>

        {/* Main Banner Text & Value Props */}
        <div className="relative z-10 max-w-lg my-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            Start Free 14-Day Trial
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Join the Next Gen of <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Smart Money Management
            </span>
          </h1>

          <p className="text-slate-400 text-base leading-relaxed">
            Create your account to unlock automated expense tracking, custom
            financial reports, and seamless team collaboration.
          </p>

          {/* Feature Bullets */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />

              <span className="text-sm font-medium text-slate-200">
                No credit card required for trial
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <PieChart className="w-5 h-5 text-blue-400" />

              <span className="text-sm font-medium text-slate-200">
                Instant access to real-time analytics
              </span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Finora Inc. All rights reserved.
        </div>
      </div>

      {/* Right Column: Signup Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-slate-950">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo View */}
          <div className="flex lg:hidden items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-lg">
              F
            </div>

            <span className="text-xl font-bold text-white">Finora</span>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Create an account
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Get started with your free Finora account today
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Full Name
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <User className="w-5 h-5" />
                </div>

                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>

              {errors.name && (
                <p className="text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Email Address
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-5 h-5" />
                </div>

                <input
                  type="email"
                  placeholder="name@company.com"
                  {...register("email")}
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Lock className="w-5 h-5" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  {...register("password")}
                  className="w-full pl-11 pr-11 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start pt-1">
              <input
                id="terms"
                type="checkbox"
                {...register("terms")}
                className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-950"
              />

              <label
                htmlFor="terms"
                className="ml-2 text-xs text-slate-400 leading-relaxed"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Privacy Policy
                </a>
                {errors.terms && (
                  <span className="block text-red-400 mt-1">
                    {errors.terms.message}
                  </span>
                )}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl text-sm shadow-lg shadow-indigo-600/25 transition-all cursor-pointer mt-2"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}

              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
