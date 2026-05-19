import Link from "next/link";
import { ComponentProps } from "react";

import { Icon } from "@/components/icon";
import { PUBLIC_ROUTES } from "@/constants/routes";

export interface MenuItemProps {
  name: string;
  iconName: ComponentProps<typeof Icon>["name"];
  url: (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
}

export function MenuItem({ name, iconName, url }: MenuItemProps) {
  return (
    <Link
      href={url}
      className="border-primary flex w-full flex-1 flex-col items-center gap-1 px-2 py-2 text-xs font-medium md:border-r-4"
    >
      <Icon name={iconName} />
      {name}
    </Link>
  );
}
