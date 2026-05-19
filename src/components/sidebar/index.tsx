import { PUBLIC_ROUTES } from "@/constants/routes";

import { MenuItem, MenuItemProps } from "./components/menu-item";
import { ToogleTheme } from "./components/toggle-theme";

// TODO: ajustar styles dos itens do menu

const listMenu: MenuItemProps[] = [
  { name: "Home", iconName: "home", url: PUBLIC_ROUTES.HOME },
  { name: "Projetos", iconName: "suitcase", url: PUBLIC_ROUTES.PROJECTS },
  { name: "Artigos", iconName: "file-code", url: PUBLIC_ROUTES.EXPERIENCE },
];

export function Sidebar() {
  return (
    <nav className="bg-sidebar-background relative flex w-full items-center justify-between p-4 md:h-full md:w-24 md:flex-col md:justify-center md:p-0">
      <ul className="flex flex-row items-center gap-4 md:flex-col md:gap-6">
        {listMenu.map((item, index) => (
          <li key={`${item.name}-menu-item-${index}`} className="md:w-full">
            <MenuItem name={item.name} iconName={item.iconName} url={item.url} />
          </li>
        ))}
      </ul>

      <div className="md:absolute md:top-4">
        <ToogleTheme />
      </div>
    </nav>
  );
}
