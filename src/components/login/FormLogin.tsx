"use client";

import { login } from "@/actions/login";
import { Button } from "../ui/Button";
import { InputText } from "../ui/InputText";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import React from "react";
import Link from "next/link";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button text="Enter" className="w-50 text-lg mb-4" disabled={pending} />
  );
}

export function FormLogin() {
  const [state, action] = useActionState(login, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/";
  }, [state.ok]);

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="relative mb-8">
        <div className="w-5 h-5 bg-yellow-500 absolute bottom-1 rounded z-0" />
        <h1 className="relative z-10 text-gray-700 text-5xl">Login</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="loginUser" className="text-gray-600">
            User
          </label>
          <InputText id="loginUser" name="username" className="text-gray-700" />
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="loginPassword" className="text-gray-600">
            Password
          </label>
          <InputText
            id="loginPassword"
            type="password"
            name="password"
            className="text-gray-700"
          />
        </div>

        {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

        <div>
          <FormButton />
          <Link href={"/login/reset-password"}>
            <p className="text-gray-500 text-base underline underline-offset-4 decoration-3">
              Perdeu a senha?
            </p>
          </Link>
        </div>
      </div>
    </form>
  );
}
