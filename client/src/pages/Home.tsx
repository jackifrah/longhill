import React from "react";
import { OrlySection } from "@/components/ui/orly-section";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-16">
          <div className="md:col-span-5 w-full">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <img
                alt="Jack Ifrah - Professional Photo"
                className="object-cover absolute inset-0 w-full h-full"
                src="/images/jack-ifrah-profile.jpg"
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-bold">Jack Ifrah</span> is an asset manager with experience across acquisitions, direct lending and strategic portfolio management. He has extensive underwriting experience in multifamily, commercial and land development assets. Jack is currently building <a href="https://orlyrealestate.com" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:text-purple-700">Orly</a>, a full-service AI-agent designed to automate the financial analyst role within investment firms.
            </p>
          </div>
        </div>
        {/* Only modifying the Orly section layout below */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-3xl">
            <OrlySection />
          </div>
        </div>
      </div>
    </div>
  );
}