import Link from "next/link";

export default function ProductsPage(){
    const products = ["shirt", "pants", "skirt", "shoes"];

    return (
        <>
            <h1>ProductsPage</h1>
            <ul>
                {products.map((el, idx)=> (
                    <li key={idx}>
                        <Link href={`/products/${el}`}>{el}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}