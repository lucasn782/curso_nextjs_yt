import Link from "next/link"
import Navbar from "@/components/Navbar";

export default function Product() {
    return (
    <>
        <Navbar/>
        <h1>Página de Produtos</h1>
        <Link href="/">Voltar</Link>
    </>
);
}