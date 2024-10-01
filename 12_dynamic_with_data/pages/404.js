import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">
        Voltar para a página inicial
      </Link>
    </>
  );
}
