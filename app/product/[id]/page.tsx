
import ProductDetail from "../../components/section/ProductDetail";
import { PrismaClient } from "@prisma/client";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const prisma = new PrismaClient()
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    const mappedProduct = {
        ...product,
        images: [product?.image1, product?.image2, product?.image3, product?.image4]
    }

    return <ProductDetail product={mappedProduct} />
}