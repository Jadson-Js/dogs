import { IHooksApiTokenPost } from "@/types/api";

export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body: IHooksApiTokenPost) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
