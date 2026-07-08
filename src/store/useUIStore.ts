import { create } from "zustand";

interface UIState {
  theme: "light" | "dark";
  isMobileMenuOpen: boolean;
  toggleTheme: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: "light",
  isMobileMenuOpen: false,
  activeSection: "hero",

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      return { theme: next };
    }),

  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  setActiveSection: (id) => set({ activeSection: id }),
}));
