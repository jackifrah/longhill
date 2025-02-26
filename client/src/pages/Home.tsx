import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-stretch">
        <Card className="w-full h-[400px] overflow-hidden">
          <img
            alt="Jack Ifrah - Professional Photo"
            className="object-cover w-full h-full object-top"
            src="/images/jack-ifrah-profile.jpg"
          />
        </Card>
        <Card className="w-full h-[400px] flex items-center p-8">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Jack Ifrah is an asset manager with experience across acquisitions, direct lending and strategic portfolio management. He has extensive underwriting experience in multifamily, commercial and land development assets. Jack is currently building Orly, a full-service AI-agent designed to automate the financial analyst role within investment firms.
          </p>
        </Card>
      </div>
    </div>
  );
}