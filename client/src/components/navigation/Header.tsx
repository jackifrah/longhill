import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Header() {
  const [location, navigate] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">  
          <Logo className="h-8 w-8" />
          <span className="font-medium">Longhill Consulting</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-x-2">
            <NavigationMenuItem>
              <button
                onClick={() => navigate("/ai-agent")}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-purple-800 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Orly AI Agent
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => navigate("/underwriting")}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Underwriting Advisory
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}