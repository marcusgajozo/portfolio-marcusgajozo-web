import { lazy } from "react";

export const technologyIcons = {
  nextjs: lazy(() =>
    import("react-icons/ri").then(({ RiNextjsFill }) => ({
      default: RiNextjsFill,
    }))
  ),
  react: lazy(() =>
    import("react-icons/si").then(({ SiReact }) => ({
      default: SiReact,
    }))
  ),
  nestjs: lazy(() =>
    import("react-icons/si").then(({ SiNestjs }) => ({
      default: SiNestjs,
    }))
  ),
  docker: lazy(() =>
    import("react-icons/di").then(({ DiDocker }) => ({
      default: DiDocker,
    }))
  ),
  postgresql: lazy(() =>
    import("react-icons/si").then(({ SiPostgresql }) => ({
      default: SiPostgresql,
    }))
  ),
  vite: lazy(() =>
    import("react-icons/si").then(({ SiVite }) => ({
      default: SiVite,
    }))
  ),
  express: lazy(() =>
    import("react-icons/si").then(({ SiExpress }) => ({
      default: SiExpress,
    }))
  ),
  typescript: lazy(() =>
    import("react-icons/si").then(({ SiTypescript }) => ({
      default: SiTypescript,
    }))
  ),
  dbeaver: lazy(() =>
    import("react-icons/si").then(({ SiDbeaver }) => ({
      default: SiDbeaver,
    }))
  ),
  javascript: lazy(() =>
    import("react-icons/si").then(({ SiJavascript }) => ({
      default: SiJavascript,
    }))
  ),
  threejs: lazy(() =>
    import("react-icons/tb").then(({ TbBrandThreejs }) => ({
      default: TbBrandThreejs,
    }))
  ),
  git: lazy(() =>
    import("react-icons/si").then(({ SiGit }) => ({
      default: SiGit,
    }))
  ),
  github: lazy(() =>
    import("react-icons/si").then(({ SiGithub }) => ({
      default: SiGithub,
    }))
  ),
  gitlab: lazy(() =>
    import("react-icons/si").then(({ SiGitlab }) => ({
      default: SiGitlab,
    }))
  ),
  html: lazy(() =>
    import("react-icons/si").then(({ SiHtml5 }) => ({
      default: SiHtml5,
    }))
  ),
  tailwind: lazy(() =>
    import("react-icons/si").then(({ SiTailwindcss }) => ({
      default: SiTailwindcss,
    }))
  ),
  bootstrap: lazy(() =>
    import("react-icons/si").then(({ SiBootstrap }) => ({
      default: SiBootstrap,
    }))
  ),
  graphql: lazy(() =>
    import("react-icons/si").then(({ SiGraphql }) => ({
      default: SiGraphql,
    }))
  ),
  "react-router": lazy(() =>
    import("react-icons/si").then(({ SiReactrouter }) => ({
      default: SiReactrouter,
    }))
  ),
  "tanstack-query": lazy(() =>
    import("react-icons/si").then(({ SiReactquery }) => ({
      default: SiReactquery,
    }))
  ),
  storybook: lazy(() =>
    import("react-icons/si").then(({ SiStorybook }) => ({
      default: SiStorybook,
    }))
  ),
  pnpm: lazy(() =>
    import("react-icons/si").then(({ SiPnpm }) => ({
      default: SiPnpm,
    }))
  ),
  yarn: lazy(() =>
    import("react-icons/si").then(({ SiYarn }) => ({
      default: SiYarn,
    }))
  ),
  oracle: lazy(() =>
    import("react-icons/gr").then(({ GrOracle }) => ({
      default: GrOracle,
    }))
  ),
  nvm: lazy(() =>
    import("react-icons/si").then(({ SiNvm }) => ({
      default: SiNvm,
    }))
  ),
  vscode: lazy(() =>
    import("react-icons/vsc").then(({ VscVscode }) => ({
      default: VscVscode,
    }))
  ),
  apollo: lazy(() =>
    import("react-icons/si").then(({ SiApollographql }) => ({
      default: SiApollographql,
    }))
  ),
  jest: lazy(() =>
    import("react-icons/si").then(({ SiJest }) => ({
      default: SiJest,
    }))
  ),
  "google-cloud": lazy(() =>
    import("react-icons/si").then(({ SiGooglecloud }) => ({
      default: SiGooglecloud,
    }))
  ),
  mongodb: lazy(() =>
    import("react-icons/si").then(({ SiMongodb }) => ({
      default: SiMongodb,
    }))
  ),
  redis: lazy(() =>
    import("react-icons/si").then(({ SiRedis }) => ({
      default: SiRedis,
    }))
  ),
  nodejs: lazy(() =>
    import("react-icons/si").then(({ SiNodedotjs }) => ({
      default: SiNodedotjs,
    }))
  ),
} as const;
