import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-yellow-500 h-36 flex flex-col justify-center items-center gap-4">
      <Image src="/assets/dogs-footer.svg" alt="Logo" width={50} height={50} />
      <p className="text-yellow-900 text-lg ml-4">© 2023 Your Company</p>
    </footer>
  );
}
