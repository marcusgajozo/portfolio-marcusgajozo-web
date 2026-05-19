import { ComponentProps } from "react";

import { Icon } from "../icon";

// TODO: Ajustar espaçamento de button para usar no max o tamanho do conteúdo, e não um tamanho fixo

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  iconName?: ComponentProps<typeof Icon>["name"];
}

export function Button({ variant = "primary", iconName, children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded px-4 py-2 ${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : variant === "secondary"
            ? "bg-gray-500 text-white"
            : "bg-transparent"
      }`}
      {...props}
    >
      {iconName && <Icon name={iconName} className="mr-2" />}
      {children}
    </button>
  );
}
