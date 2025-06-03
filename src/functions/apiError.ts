export function apiError(error: unknown): {
  data: null;
  ok: false;
  error: string;
} {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else if (typeof error === "string") {
    return { data: null, ok: false, error };
  } else {
    return { data: null, ok: false, error: "An unknown error occurred" };
  }
}
