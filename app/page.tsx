
import HeroSection from "./components/section/HeroSection";
import BenefitsSection from "./components/section/BenefitsSection";
import TumblerGrid from "./components/section/TumblerGrid";
import { PrismaClient, Product } from '@prisma/client'
import { Suspense } from "react";



// Add this type definition
type MappedProduct = Omit<Product, 'image1' | 'image2'> & {
  imageUrl: string;
  detailImageUrl: string;
};

async function ProductGrid() {
  const prisma = new PrismaClient()
  const products = await prisma.product.findMany()

  const mappedProducts: MappedProduct[] = products.map((product: Product) => ({
    ...product,
    imageUrl: product.image1,
    detailImageUrl: product.image2
  }))

  return <TumblerGrid products={mappedProducts} />;
}

export default async function Home() {

  return (
    <>
      <section id='home'>
        <HeroSection />
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section id='list'>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid />
        </Suspense>
      </section>

    </>
  );
}
