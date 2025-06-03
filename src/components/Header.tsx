import Image from "next/image";

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
        <div className="flex flex-row gap-2">
          <p className="text-base text-gray-700">Login / Signup</p>
          <Image
            src={"/assets/user.svg"}
            alt="User"
            width={15}
            height={15}
            priority
          />
        </div>
      </div>
    </nav>
  );
}
