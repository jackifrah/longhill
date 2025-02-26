import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <div className="container">
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {content.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}