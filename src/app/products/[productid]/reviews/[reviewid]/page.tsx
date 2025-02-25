import { notFound } from "next/navigation";

export default async function  ProductReviews({params}:{params: Promise< {productid: string, reviewid: string}>}) {
    const {productid, reviewid} = await params;
    if (parseInt(reviewid) > 1000){
        notFound();
    }
    return <h1>Product id: {productid} review id: {reviewid}</h1>;
}