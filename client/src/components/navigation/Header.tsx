import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";

export default function Header() {
  const [location, navigate] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-1">  
          <Logo className="h-8 w-8" />
          <span className="font-medium">Longhill Consulting</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-6">
          <button
            onClick={() => navigate("/underwriting")}
            className="text-sm font-medium text-foreground hover:text-foreground/80"
          >
            Underwriting Advisory
          </button>
          <button
            onClick={() => navigate("/ai-agent")}
            className="text-sm font-medium text-purple-800 hover:text-purple-900"
          >
            Orly AI Agent
          </button>
        </nav>
      </div>
    </header>
  );
}