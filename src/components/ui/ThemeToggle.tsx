"use client";

import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useUIStore } from "@/store/useUIStore";

export function ThemeToggle() {
  const theme = useUIStore((state) => state.theme);
  const toggleTheme = useUIStore((state) => state.toggleTheme);

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      variant="outline"
      size="default"
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Toggle>
  );
}
