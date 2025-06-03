"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { InputText } from "@/components/ui/InputText";

export default function ResetPassword() {
  return (
    <form className="flex flex-col gap-8">
      <div className="relative mb-8">
        <div className="w-5 h-5 bg-yellow-500 absolute bottom-1 rounded z-0" />
        <h1 className="relative z-10 text-gray-700 text-5xl">Reset Password</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="loginUser" className="text-gray-600">
            Email / User
          </label>
          <InputText id="loginUser" name="username" className="text-gray-700" />
        </div>

        <Button text="Send Email" className="w-50 text-lg mb-4" />
      </div>
    </form>
  );
}
