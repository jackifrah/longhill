import React from "react";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl grid md:grid-cols-2 items-start">
        <div className="w-full h-[300px] overflow-hidden">
          <img
            alt="Jack Ifrah - Professional Photo"
            className="object-contain w-full h-full"
            src="/images/jack-ifrah-profile.jpg"
          />
        </div>
        <div className="w-full h-[300px] flex flex-col justify-center -ml-6">
          <div className="max-w-[280px]">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-bold">Jack Ifrah</span> is an asset manager with experience across acquisitions, direct lending and strategic portfolio management. He has extensive underwriting experience in multifamily, commercial and land development assets. Jack is currently building <span className="font-bold text-purple-600">Orly</span>, a full-service AI-agent designed to automate the financial analyst role within investment firms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}