import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </>
  );
}
