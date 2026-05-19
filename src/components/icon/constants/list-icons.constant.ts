import { lazy } from "react";

export const listIconsConstant = {
  home: lazy(() =>
    import("raster-react").then(({ HomeIcon }) => ({
      default: HomeIcon,
    }))
  ),
  "file-code": lazy(() =>
    import("raster-react").then(({ FileCodeIcon }) => ({
      default: FileCodeIcon,
    }))
  ),
  suitcase: lazy(() =>
    import("raster-react").then(({ FoldersIcon }) => ({
      default: FoldersIcon,
    }))
  ),
  "mail-right": lazy(() =>
    import("raster-react").then(({ MailIcon }) => ({
      default: MailIcon,
    }))
  ),
  moon: lazy(() =>
    import("raster-react").then(({ MoonIcon }) => ({
      default: MoonIcon,
    }))
  ),
  sun: lazy(() =>
    import("raster-react").then(({ SunIcon }) => ({
      default: SunIcon,
    }))
  ),
  github: lazy(() =>
    import("raster-react").then(({ GithubIcon }) => ({
      default: GithubIcon,
    }))
  ),
  linkedin: lazy(() =>
    import("raster-react").then(({ LinkedinIcon }) => ({
      default: LinkedinIcon,
    }))
  ),
  "user-fill": lazy(() =>
    import("raster-react").then(({ UserFillIcon }) => ({
      default: UserFillIcon,
    }))
  ),
  thunder: lazy(() =>
    import("raster-react").then(({ ThunderIcon }) => ({
      default: ThunderIcon,
    }))
  ),
} as const;
