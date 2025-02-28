import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function UnderwritingAdvisory() {
  const scheduleLink = 'https://app.usemotion.com/meet/jack-ifrah/meeting';

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Institutional-Level Underwriting, Market & Financial Due Diligence</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-purple-600">✓</div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">LPs & Investors</span> – Gain visibility into a sponsor's operating assumptions and their practicality
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-purple-600">✓</div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">GPs</span> – Build institutional-quality models & pitch decks for capital raising
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-purple-600">✓</div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Lenders</span> – Assess risk with detailed financial due diligence & market analysis
              </p>
            </div>
          </div>

          {/* Pricing and Booking Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              Starting at <span className="text-xl font-bold">$149</span>
            </div>
            <Button 
              className="gap-2 px-4 text-sm font-medium bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 transition-all duration-300 rounded-full text-white"
              onClick={() => window.open(scheduleLink, '_blank')}
            >
              <Calendar className="h-4 w-4" />
              Book Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}