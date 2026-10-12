import Banner from "@/components/Banner";
import PriceSection from "@/components/PriceSection";
import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <div className="w-full min-h-full max-w-7xl mx-auto py-5">
      {/* <main className="w-full min-h-full max-w-7xl mx-auto py-5"> */}
        <Banner />
        <PriceSection />
        <ProductList />
      {/* </main> */}
    </div>
  );
}
