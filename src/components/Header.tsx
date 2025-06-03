import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className=" border-b border-gray-200">
      <div className="flex  justify-between items-center px-8 py-6  container mx-auto">
        <Image
          src={"/assets/dogs.svg"}
          alt="Dogs"
          width={28}
          height={22}
          priority
        />
        <Link className="flex flex-row gap-2" href="/login">
          <p className="text-base text-gray-700">Login / Signup</p>
          <Image
            src={"/assets/user.svg"}
            alt="User"
            width={15}
            height={15}
            priority
          />
        </Link>
      </div>
    </nav>
  );
}
