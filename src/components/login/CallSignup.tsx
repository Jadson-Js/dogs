import { Button } from "../ui/Button";

export function CallSignup() {
  return (
    <div className="flex flex-col">
      <h2 className="text-gray-700 text-3xl mb-1">Signup</h2>
      <div className="w-10 h-2 bg-gray-200 rounded-full mb-4" />

      <p className="text-gray-600 mb-8 text-xs">
        Don&#39;t have an account? Sign up
      </p>

      <Button text="Sign Up" className="w-25  mb-4" />
    </div>
  );
}
