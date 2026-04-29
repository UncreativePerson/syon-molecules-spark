import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/syon-logo.png";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/pipeline", label: "Pipeline" },
  { to: "/science", label: "Science" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="" width={36} height={36} className="size-9 object-contain" />
          <span className="font-display text-lg tracking-[0.18em] text-foreground">
            SYON <span className="text-muted-foreground">BIOSCIENCES</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full border border-foreground px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
        >
          Partner with us
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
