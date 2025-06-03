"use server";

import { apiError } from "@/functions/apiError";
import { POST_USER } from "@/hooks/api";

export async function signup(state: unknown, formData: FormData) {
  const userName = formData.get("username") as string | FormDataEntryValue;
  const email = formData.get("email") as string | FormDataEntryValue;
  const password = formData.get("password") as string | FormDataEntryValue;
  const request = POST_USER({
    username: userName,
    email: email,
    password: password,
  });

  try {
    if (!userName || !email || !password) throw new Error("Preencha os dados.");

    const response = await fetch(request.url, request.options);

    if (!response.ok) throw new Error("Usuário, email ou senha inválidos.");

    return { data: null, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
