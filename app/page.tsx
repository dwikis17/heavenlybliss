
import HeroSection from "./components/section/HeroSection";
import BenefitsSection from "./components/section/BenefitsSection";
import TumblerGrid from "./components/section/TumblerGrid";
import { PrismaClient, Product } from '@prisma/client'



// Add this type definition
type MappedProduct = Omit<Product, 'image1' | 'image2'> & {
  imageUrl: string;
  detailImageUrl: string;
};

export default async function Home() {
  const prisma = new PrismaClient()
  const products = await prisma.product.findMany()

  const mappedProducts: MappedProduct[] = products.map((product: Product) => ({
    ...product,
    imageUrl: product.image1,
    detailImageUrl: product.image2
  }))



  return (
    <>
      <section id='home'>
        <HeroSection />
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section id='list'>
        <TumblerGrid products={mappedProducts} />
      </section>

    </>
  );
}
