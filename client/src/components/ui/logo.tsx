import React from "react";

export function Logo(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/assets/logo.png"
      alt="Longhill Consulting Logo"
      className="h-8 w-auto"
      {...props}
    />
  );
}