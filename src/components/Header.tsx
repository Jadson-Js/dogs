"use client";

import { useUser } from "@/context/userContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Header() {
  const user = useUser().user;

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
        <Link
          className="flex flex-row gap-2"
          href={user ? "/profile" : "/login"}
        >
          <p className="text-base text-gray-700">
            {user ? user.username : "Login / Signup"}
          </p>
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
