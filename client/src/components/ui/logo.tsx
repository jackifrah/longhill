import React from "react";

export function Logo(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/attached_assets/orly-logo-icon-1.png"
      alt="Longhill Consulting Logo"
      className="h-6 w-6 grayscale"
      {...props}
    />
  );
}