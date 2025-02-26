import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <Card className="w-full overflow-hidden">
          <img
            alt="Jack Ifrah - Professional Photo"
            className="object-cover w-full h-full"
            src="/attached_assets/IMG_8670 (1).jpg"
          />
        </Card>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Jack Ifrah is an asset manager with experience across acquisitions, direct lending and strategic portfolio management. He has extensive underwriting experience in multifamily, commercial and land development assets. Jack is currently building Orly, a full-service AI-agent designed to automate the financial analyst role within investment firms.
        </p>
      </div>
    </div>
  );
}