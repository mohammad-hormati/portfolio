import Link from "next/link";

interface LogoProps {
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ showWordmark = true, className }: LogoProps) {
  return (
    <Link
      href="#hero"
      aria-label="Mohamad Hormati — home"
      className={`flex items-center gap-3 ${className ?? ""}`}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-sm font-medium text-white"
        style={{ backgroundColor: "var(--brand)" }}
      >
        MH
      </span>

      {showWordmark && (
        <span className="hidden flex-col sm:flex">
          <span className="text-sm font-medium leading-tight text-foreground">
            Mohamad Hormati
          </span>
          <span className="text-xs leading-tight text-muted-foreground">
            Programmer · Web developer
          </span>
        </span>
      )}
    </Link>
  );
}
