import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, ArrowRight } from "lucide-react";

export default function UnderwritingAdvisory() {
  return (
    <div className="container py-12 flex justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8">
          {/* Calendar Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <iframe
              src="https://motion.com/forms/f/62c375"
              className="w-full h-[600px] border-0"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          {/* Financial Models Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <CardHeader className="px-0">
              <CardTitle className="text-2xl font-semibold">Financial Models</CardTitle>
              <CardDescription>Professional-grade financial models for real estate analysis</CardDescription>
            </CardHeader>
            <div className="grid gap-6 mt-4">
              <Card className="border-2 border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-semibold">Multifamily Acquisition</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive financial model for multifamily property analysis and valuation
                      </p>
                      <div className="pt-4">
                        <Button size="lg" className="w-full">
                          Buy Now - $149
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="/MLCFs screenshot.png"
                        alt="Master Leasing Cash Flows"
                        className="w-full h-auto rounded-lg shadow-lg hover:scale-[1.02] transition-transform cursor-pointer object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}