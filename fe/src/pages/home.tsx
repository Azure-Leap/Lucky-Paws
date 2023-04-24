import CategoryCards from "@/components/CategoryCards/CategoryCards";
import Dogs from "@/components/DogsCard/DogsCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import Shop from "@/components/Shop/Shop";
import Story from "@/components/Story/Story";

export default function HomePage() {
  return (
    <section className="relative">
      <HeroSection />
      <CategoryCards />
      <img
        src="/orange_cat.png"
        alt="orange cat"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[1] orange-cat"
      />
      <Dogs />
      <Story />
      <Shop />
    </section>
  );
}
