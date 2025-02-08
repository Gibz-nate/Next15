export default async function  ProductReviews({params}:{params: Promise< {productid: string, reviewid: string}>}) {
    const {productid, reviewid} = await params;
    return <h1>Product id: {productid} review id: {reviewid}</h1>;
}