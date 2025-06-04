"use client"; // Importante no Next.js para usar hooks
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="md:hidden">
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Ícone hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul
          className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-200 z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex gap-4 items-center">
        <li
          className={`rounded border border-gray-100 bg-gray-100 p-2 cursor-pointer ${
            pathname === "/profile" && "bg-yellow-500"
          }`}
        >
          <Link href="/profile">
            <Image src="/assets/feed.svg" alt="Feed" width={28} height={22} />
          </Link>
        </li>

        <li
          className={`rounded border border-gray-100 bg-gray-100 p-2 cursor-pointer ${
            pathname === "/metrics" && "bg-yellow-500"
          }`}
        >
          <Link href="/metrics">
            <Image
              src="/assets/metrics.svg"
              alt="Feed"
              width={28}
              height={22}
            />
          </Link>
        </li>
        <li
          className={`rounded border border-gray-100 bg-gray-100 p-2 cursor-pointer ${
            pathname === "/add-photo" && "bg-yellow-500"
          }`}
        >
          <Link href="/add-photo">
            <Image src="/assets/plus.svg" alt="Feed" width={28} height={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
