import { IconProps as IconPropsRasterReact } from "raster-react";
import { Suspense } from "react";

import { listIconsConstant } from "./constants/list-icons.constant";

interface IconProps extends IconPropsRasterReact {
  name: keyof typeof listIconsConstant;
}

export function Icon({ name, strokeWidth = 6, size = 28, ...props }: IconProps) {
  const IconComponent = listIconsConstant[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent strokeWidth={strokeWidth} size={size} {...props} />
    </Suspense>
  );
}
