import Herosection from "@/components/UI/Homepage/HeroSection/Herosection";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";
import Whyus from "@/components/UI/Homepage/WhyUs/Whyus";

export default function HomePage() {
  return (
    <div>
      <Herosection />
      <Specialist />
      <TopRatedDoctor />
      <Whyus />
    </div>
  )
}
