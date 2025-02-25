"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productid = pathname.split("/")[2];
    const reviewid = pathname.split("/")[4];
    return (
        <div>
            <h1>Review {reviewid} Not Found for product {productid}</h1>
            <p>could not find requested resource</p>

        </div>
        
    );
}