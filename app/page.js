import Image from "next/image";
import BrandSlider from "./components/BrandSlider";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div>
      {" "}
      <BrandSlider />
      <HomeBanner />
    </div>
  );
}
