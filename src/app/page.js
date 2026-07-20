import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
    </>
  );
}
