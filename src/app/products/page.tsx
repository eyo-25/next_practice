import { Product, getProducts } from "@/api/products";
import Link from "next/link";

export default async function ProductsPage(){
    const products = await getProducts();

    return (
        <>
            <h1>ProductsPage</h1>
            <ul>
                {products.map(({id, name}:Product)=> (
                    <li key={id}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}