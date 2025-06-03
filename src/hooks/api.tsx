import { IHooksApiTokenPost, IHooksApiUserPost } from "@/types/api";

export const API_URL = "https://dogsapi.origamid.dev/json";

export function POST_TOKEN(body: IHooksApiTokenPost) {
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

export function POST_USER(body: IHooksApiUserPost) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
