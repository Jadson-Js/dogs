"use client";

import photosGet from "@/actions/photosGet";
import { Feed } from "@/components/feed/Feed";
import { IHooksApiPhotosGet } from "@/types/api";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState<IHooksApiPhotosGet[] | null>(null);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const getPhotos = async () => {
      const { data } = await photosGet({ page, total: 6 });
      setData((prevData) => [...(prevData || []), ...(data || [])]);
    };

    getPhotos();
  }, [page]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= documentHeight - 100) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) {
    return <div className="text-center">No photos available</div>;
  }

  return <Feed photos={data} className="py-8" />;
}
