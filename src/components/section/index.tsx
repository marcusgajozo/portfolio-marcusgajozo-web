import { ComponentProps } from "react";

export function Section({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section className={`px-5 sm:px-10 lg:px-32 ${className}`} {...props}>
      {children}
    </section>
  );
}

interface SectionHeaderProps extends ComponentProps<"h2"> {
  title: string;
  number: number;
}

export function SectionHeader({ title, number, ...props }: SectionHeaderProps) {
  return (
    <h2 className="mb-4 text-2xl font-bold" {...props}>
      <span className="mr-1 text-sm">0{number}.</span>
      {title}
    </h2>
  );
}
