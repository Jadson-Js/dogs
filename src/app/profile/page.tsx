import { Menu } from "@/components/profile/Menu";

export default function Profile() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl text-gray-700">Post your photo</h1>
        <Menu />
      </div>
    </div>
  );
}
