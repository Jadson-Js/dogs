import { IHooksApiPhotosGet } from "@/types/api";
import Image from "next/image";

export interface IFeedProps {
  photos: IHooksApiPhotosGet[];
  className?: string;
}

export function Feed({ photos, className = "" }: IFeedProps) {
  function showPhotos() {
    return photos.map((photo, index) => {
      return (
        <li
          key={photo.id}
          className={`rounded relative group transition-opacity duration-300 ${
            index % 6 === 0 && "col-span-2 row-span-2"
          }`}
        >
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.title}
            width={1500}
            height={1500}
            className="rounded"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 rounded" />
          <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs p-2 rounded group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-10">
            <Image src="/assets/view.svg" alt="View" width={20} height={20} />
            666
          </span>
        </li>
      );
    });
  }

  return (
    <section>
      <ul
        className={`container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-5xl ${className}`}
      >
        {showPhotos()}
      </ul>
    </section>
  );
}
