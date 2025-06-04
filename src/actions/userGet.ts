import { USER_GET } from "@/functions/api";
import { apiError } from "@/functions/apiError";
import { cookies } from "next/headers";

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export async function userGet() {
  try {
    const token = (await cookies()).get("token")?.value as string;

    if (!token) throw new Error("Token não encontrado.");

    const { url } = USER_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar usuário.");
    }
    const data: IUser = await response.json();
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
