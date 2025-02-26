import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar } from "lucide-react";

export default function UnderwritingAdvisory() {
  return (
    <div className="container py-12 flex justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Underwriting Advisory Services</h1>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Access institutional-quality financial models and schedule a consultation to discuss your real estate investment project.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Financial Models Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Financial Models
            </h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-medium">Multifamily Acquisition Model</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Comprehensive model for multifamily property analysis</p>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
            </div>
          </div>

          {/* Consultation Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Schedule a Consultation
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Book a time to discuss your project and get personalized underwriting advice.
            </p>
            <iframe
              src="https://app.cal.com/jackifrah/30min"
              className="w-full h-[600px] border-0"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}