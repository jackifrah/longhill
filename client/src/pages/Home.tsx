import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <div className="container">
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {content.hero.title}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {content.hero.description}
                </p>
              </div>
            </div>
            <div className="mx-auto aspect-video lg:aspect-square">
              <Card className="w-full h-full overflow-hidden">
                <img
                  alt="Jack Ifrah - Professional Photo"
                  className="object-cover w-full h-full"
                  src="/attached_assets/IMG_8670 (1).jpg"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              About Jack Ifrah
            </h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Jack Ifrah is an asset manager with experience across acquisitions, direct lending and strategic portfolio management. He has extensive underwriting experience in multifamily, commercial and land development assets. Jack is currently building Orly, a full-service AI-agent designed to automate the financial analyst role within investment firms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}