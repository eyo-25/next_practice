import { Product, getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import Link from "next/link";
import ClothesImage from "../../../public/images/clothes.jpg"

export default async function ProductsPage(){
    const products = await getProducts();

    return (
        <>
            <h1>ProductsPage</h1>
            <Image src={ClothesImage} alt="옷 이미지" priority/>
            <ul>
                {products.map(({id, name}:Product)=> (
                    <li key={id}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle />
        </>
    )
}