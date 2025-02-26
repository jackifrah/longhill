import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-sm leading-loose text-muted-foreground">
              © 2024 Longhill Management. All rights reserved.
            </span>
          </Link>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline">
            Institutional-grade models for sale
          </Link>
          <Separator orientation="vertical" className="hidden h-6 md:block" />
          <Link href="#" className="text-sm font-medium hover:underline">
            Find a time to discuss your project
          </Link>
        </nav>
      </div>
    </footer>
  );
}