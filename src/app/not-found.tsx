import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold">Página não encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
