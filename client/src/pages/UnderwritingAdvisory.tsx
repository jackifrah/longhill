import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, ArrowRight, Calendar } from "lucide-react";
import modelScreenshot from "../../../MLCFs screenshot.png";

export default function UnderwritingAdvisory() {
  const scheduleLink = 'https://app.usemotion.com/meet/jack-ifrah';

  return (
    <div className="container py-12 flex justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8">
          {/* Calendar Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <CardHeader className="px-0">
              <CardTitle className="text-2xl font-semibold">Schedule a Consultation</CardTitle>
              <CardDescription>Book a time to discuss your real estate investment needs</CardDescription>
            </CardHeader>

            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open(scheduleLink, '_blank')}
              >
                <Calendar className="h-5 w-5" />
                Book Your Consultation
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                You'll be redirected to our secure scheduling platform to select a time that works best for you.
              </p>
            </div>
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
                        src={modelScreenshot}
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