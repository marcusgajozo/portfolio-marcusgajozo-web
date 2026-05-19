import Link from "next/link";
import { Suspense } from "react";

import { technologyIcons } from "./constants/technology-icons.constant";
import { technologyNames } from "./constants/technology-names.constant";
import { technologyUrls } from "./constants/technology-urls.constant";

interface TechnologyProps {
  technologyName: keyof typeof technologyIcons;
}

export function Technology({ technologyName }: TechnologyProps) {
  const Icon = technologyIcons[technologyName];
  const name = technologyNames[technologyName];
  const url = technologyUrls[technologyName];

  return (
    <Link href={url} target="_blank" className="flex w-20 items-center gap-2">
      <span className="text-2xl">
        <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full" />}>
          <Icon />
        </Suspense>
      </span>
      <span className="font-bold">{name}</span>
    </Link>
  );
}
