"use client";
import React from "react";
import { toast } from "sonner";
import Link from "next/link";

type Props = {};

const LoginPage = (props: Props) => {
  const handleClick = () => {
    console.log("click");
    toast("ur shit", {
      description: "nice",
    });
  };

  return (
    <div className="w-full h-[92vh] flex items-center justify-center bg-background text-foreground">
      <div className="p-6 border border-border rounded-2xl shadow-md w-full max-w-md bg-card">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-foreground">
              Username <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="username or email"
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
            />
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 my-3 mt-4 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              className="w-full bg-primary text-primary-foreground border border-primary py-2 rounded-lg transition-colors duration-200 hover:bg-primary/90"
              onClick={handleClick}
            >
              Login
            </button>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="hover:underline cursor-pointer text-primary"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
