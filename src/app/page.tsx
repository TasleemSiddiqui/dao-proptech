import Award from "@/components/homepage/Award";
import Counter from "@/components/homepage/counter";
import FeatureSlider from "@/components/homepage/FeatureSlider";
import Hero from "@/components/homepage/Hero";
import Investment from "@/components/homepage/investment";
import LatestBlogs from "@/components/homepage/LatestBlogs";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <main className="space-y-6 w-full">
      <Hero />
      <div className="h-[55rem] md:h-[30rem] lg:h-[15rem] w-full"></div>
      <Investment/>
      <Testimonials/>
      <Counter/>
      <FeatureSlider/>
      <LatestBlogs/>
      <Award/>
    </main>
  );
}
