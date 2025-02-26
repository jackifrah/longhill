import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Header() {
  const [location, navigate] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-1">  
          <Logo className="h-8 w-8" />
          <span className="font-medium">Longhill Consulting</span>
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button
                onClick={() => navigate("/")}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Home
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => navigate("/about")}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                About
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}