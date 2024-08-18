import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <Container>
      <Hero />
      <TopProducts />
    </Container>
  );
}
