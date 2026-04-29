import { Link } from "@tanstack/react-router";
import logo from "@/assets/syon-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={32} height={32} className="size-8 object-contain" />
            <span className="font-display tracking-[0.18em] text-sm">SYON BIOSCIENCES</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Designing precise small molecule therapeutics for diseases that demand a deeper answer.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline underline-offset-4">About</Link></li>
            <li><Link to="/science" className="hover:underline underline-offset-4">Science</Link></li>
            <li><Link to="/pipeline" className="hover:underline underline-offset-4">Pipeline</Link></li>
            <li><Link to="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Address</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One Kendall Square<br />
            Cambridge, MA 02139<br />
            United States
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Syon Biosciences, Inc. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Precision · Patience · Proof</p>
        </div>
      </div>
    </footer>
  );
}
