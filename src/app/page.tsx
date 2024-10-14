import Hero from "@/components/homepage/Hero";
import Investment from "@/components/homepage/investment";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-[55rem] md:h-[30rem] lg:h-[15rem] w-full"></div>
      <Investment/>
    </main>
  );
}
