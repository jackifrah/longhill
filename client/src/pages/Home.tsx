import React from "react";
import { OrlySection } from "@/components/ui/orly-section";

export default function Home() {
  return (
    <div className="container py-12 flex justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 items-center gap-8 mb-8 rounded-xl p-4">
          <div className="w-full max-h-[300px] overflow-hidden rounded-lg">
            <img
              alt="Jack Ifrah - Professional Photo"
              className="object-contain w-full h-full"
              src="/images/jack-ifrah-profile.jpg"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                <span className="font-bold">Jack Ifrah</span> is an asset manager with experience across acquisitions, direct lending and strategic portfolio management. He has extensive underwriting experience in multifamily, commercial and land development assets. Jack is currently building <a href="https://orlyrealestate.com" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-900 hover:text-purple-950 transition-colors">Orly</a>, a full-service AI-agent designed to automate the financial analyst role within investment firms.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-3xl bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <OrlySection />
          </div>
        </div>
      </div>
    </div>
  );
}