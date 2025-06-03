import { CallSignup } from "@/components/login/CallSignup";
import { FormLogin } from "@/components/login/FormLogin";

export default function Login() {
  return (
    <div className="py-24 px-4 md:px-16 max-w-xl">
      <section className="flex flex-col gap-12">
        <FormLogin />

        <CallSignup />
      </section>
    </div>
  );
}
