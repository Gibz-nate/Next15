export default async function ProductDetails({ params }: { params: Promise<{ productid: string }> }) {
    const { productid } = await params; // Await params before using it
    return <h1>Product Details {productid}</h1>;
}


