import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
            <Button size="lg" className="mt-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Financial Models</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access institutional-quality financial models for your real estate investments.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Underwriting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get expert underwriting services tailored to your portfolio needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Due Diligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive financial due diligence for real estate transactions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
