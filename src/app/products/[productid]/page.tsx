import { Metadata } from "next";

type props = {
    params: Promise<{productid: string}>
}

export const generateMetadata = async ({params}: props): Promise<Metadata> => {
    const id = (await params).productid;
    return {
        title: `Product ${id}`,
        description: `This is the product ${id} page`
    }
}

export default async function ProductDetails({ params }: props) {
    const { productid } = await params; // Await params before using it
    return <h1>Product Details {productid}</h1>;
}


