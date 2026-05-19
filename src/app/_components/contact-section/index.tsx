import { ContactLinks } from "@/components/contact-links";
import { Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section className="flex h-[80%] flex-col items-center justify-center gap-3">
      <h2 className="text-center text-3xl font-medium">Formas de contato</h2>
      <p className="max-w-2xl text-center">
        Sinta-se à vontade para entrar em contato e conversarmos mais sobre seus projetos.
      </p>
      <ContactLinks />
    </Section>
  );
}
