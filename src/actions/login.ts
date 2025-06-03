"use server";

import { apiError } from "@/functions/apiError";
import { POST_TOKEN } from "@/hooks/api";
import { cookies } from "next/headers";

export async function login(state: unknown, formData: FormData) {
  const userName = formData.get("username") as string | FormDataEntryValue;
  const password = formData.get("password") as string | FormDataEntryValue;
  const request = POST_TOKEN({ username: userName, password: password });

  try {
    if (!userName || !password) throw new Error("Preencha os dados.");

    const response = await fetch(request.url, request.options);

    if (!response.ok) throw new Error("Senha ou usuário inválidos.");

    const data = await response.json();
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return { data: null, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
