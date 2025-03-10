import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xs leading-loose text-muted-foreground">
              © 2024 Longhill Management. All rights reserved.
            </span>
          </Link>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <a 
            href="https://app.usemotion.com/meet/jack-ifrah/meeting"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm font-medium hover:underline"
          >
            Find a time to discuss your project
          </a>
        </nav>
      </div>
    </footer>
  );
}