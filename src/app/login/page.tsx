import { CallSignup } from "@/components/login/CallSignup";
import { FormLogin } from "@/components/login/FormLogin";

export default function Login() {
  return (
    <section className="flex flex-col gap-12">
      <FormLogin />

      <CallSignup />
    </section>
  );
}
