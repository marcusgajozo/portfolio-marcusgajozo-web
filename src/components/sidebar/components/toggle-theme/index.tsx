"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

import { Button } from "@/components/button";

export function ToogleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return <Button variant="ghost" iconName={isDark ? "sun" : "moon"} onClick={handleToggleTheme} />;
}
