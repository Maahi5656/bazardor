import Image from "next/image";

import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="bg-[#E1E8E1] py-3.5">
      <main className="w-full min-h-full max-w-7xl mx-auto py-5 px-16 bg-white rounded-2xl">
        <Banner />
      </main>
    </div>
  );
}
