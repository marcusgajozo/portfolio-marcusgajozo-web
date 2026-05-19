import { Button } from "../button";

export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t p-5 text-sm">
      <div className="flex w-full max-w-4xl flex-wrap-reverse items-center justify-center gap-4 sm:justify-between">
        <span className="text-center text-xs sm:text-left">
          Copyright © 2026 Marcus Gajozo. <br />
          Todos os direitos reservados.
        </span>

        <div className="flex items-center justify-center gap-1">
          <Button iconName="github" variant="ghost" />
          <Button iconName="linkedin" variant="ghost" />
        </div>
      </div>
    </footer>
  );
}
