"use client";
import React from "react";
import Link from "next/link";
import { toast } from "sonner";

const SignUpPage = () => {
  const handleSignUp = () => {
    console.log("Sign up click");
    toast("Account created!", {
      description: "Welcome aboard!",
    });
  };

  return (
    <div className="w-full h-[92vh] flex items-center justify-center bg-background text-foreground">
      <div className="p-6 border border-border rounded-2xl shadow-md w-full max-w-md bg-card">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        <div className="flex flex-col gap-4">
          {/* Username */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-foreground">
              Username <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="email (optional)"
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-foreground">
              Password <span className="text-destructive">*</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none"
              required
            />
          </div>

          <div className="mt-4 flex flex-col items-center gap-2">
            <button
              className="w-full bg-primary text-primary-foreground border border-primary py-2 rounded-lg transition-colors duration-200 hover:bg-primary/90"
              onClick={handleSignUp}
            >
              Sign Up
            </button>

            <p className="text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="hover:underline cursor-pointer text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
