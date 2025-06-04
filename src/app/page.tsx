import photosGet from "@/actions/photosGet";
import { Feed } from "@/components/feed/Feed";

export default async function Home() {
  const { data } = await photosGet();
  if (!data) {
    return <div className="text-center">No photos available</div>;
  }

  return <Feed photos={data} className="py-8" />;
}
