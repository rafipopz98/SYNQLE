"use client";
import React from "react";
import { toast } from "sonner";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission, e.g., send email to reset password
    toast("Password reset link has been sent to your email.", {
      description: "Check your inbox for instructions.",
    });
  };

  return (
    <div className="w-full h-[92vh] flex items-center justify-center bg-background text-foreground">
      <div className="p-6 border border-border rounded-2xl shadow-md w-full max-w-md bg-card">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Forgot Password
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground border border-primary py-2 rounded-lg transition-colors duration-200 hover:bg-primary/90"
            >
              Send Reset Link
            </button>
            <p className="text-sm mt-2">
              Back to{" "}
              <Link href="/login" className="text-primary hover:underline">
                sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
