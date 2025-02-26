import React from "react";

export function Logo(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/attached_assets/image_1740584907644.png"
      alt="Longhill Consulting Logo"
      className="h-8 w-auto"
      {...props}
    />
  );
}