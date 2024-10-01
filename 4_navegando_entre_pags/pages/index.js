import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
          <br></br>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>

      <h1>Hello World Next.js</h1>
    </div>
    </>
  );
}
