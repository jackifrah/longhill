import React from "react";

export function Logo(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="orly-logo-icon@2x-1.svg"
      alt="Longhill Consulting Logo"
      className="h-6 w-6 grayscale"
      {...props}
    />
  );
}