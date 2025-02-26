import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <img
      src="/orly-logo-icon@2x-1.svg"
      alt="Longhill Consulting Logo"
      className="h-6 w-6"
      {...props}
    />
  );
}