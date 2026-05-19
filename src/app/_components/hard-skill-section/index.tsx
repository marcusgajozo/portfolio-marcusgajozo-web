import { Section, SectionHeader } from "@/components/section";
import { Technology } from "@/components/technology";
import { technologyIcons } from "@/components/technology/constants/technology-icons.constant";

// TODO: ajustar espaçamentos entre as skills

interface HardSkillSectionProps {
  number: number;
}

const hardSkills: (keyof typeof technologyIcons)[] = [
  "apollo",
  "docker",
  "express",
  "git",
  "graphql",
  "jest",
  "mongodb",
  "nestjs",
  "nodejs",
  "postgresql",
  "react",
  "redis",
  "typescript",
];

export function HardSkillSection({ number }: HardSkillSectionProps) {
  return (
    <Section className="mt-30">
      <SectionHeader title="Habilidades" number={number} />
      <section className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {hardSkills.map((skill, index) => (
          <Technology key={`skill-${index}-${skill}`} technologyName={skill} />
        ))}
      </section>
    </Section>
  );
}
