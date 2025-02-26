import { content } from "@/lib/content";

export default function About() {
  return (
    <div className="container">
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {content.about.title}
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              {content.about.content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
