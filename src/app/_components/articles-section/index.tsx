import Link from "next/link";

import { Section, SectionHeader } from "@/components/section";

// TODO: cria a rota para ler o artigoId
// TODO: criar um rota para listar e pesquisar os arquigos
// TODO: mover esses componentes para a pasta components

interface ArticlesSectionProps {
  number: number;
}

const articles: ArticleCardProps[] = [
  {
    title: "Artigo 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    link: "/artigo-1",
  },
  {
    title: "Artigo 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    link: "/artigo-2",
  },
  {
    title: "Artigo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    link: "/artigo-3",
  },
];

export function ArticlesSection({ number }: ArticlesSectionProps) {
  return (
    <Section className="mt-30">
      <SectionHeader title="Artigos e tutoriais" number={number} />
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            description={article.description}
            link={article.link}
          />
        ))}
      </section>
    </Section>
  );
}

interface ArticleCardProps {
  title: string;
  description: string;
  link: string;
}

function ArticleCard({ title, description, link }: ArticleCardProps) {
  return (
    <div className="w-full min-w-0 transform overflow-hidden rounded-lg border shadow-md transition duration-300 hover:scale-105">
      <div className="flex flex-col gap-2 p-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6">{description}</p>
        <Link href={link} className="font-bold text-amber-700 hover:underline">
          Saiba mais...
        </Link>
      </div>
    </div>
  );
}
