import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Building2, Landmark, Calculator, BarChart3, FileSpreadsheet } from "lucide-react";

export default function UnderwritingAdvisory() {
  const scheduleLink = 'https://app.usemotion.com/meet/jack-ifrah/meeting';

  return (
    <div className="container py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
            Institutional-Level Underwriting, Market & Financial Due Diligence
          </h2>

          {/* Services Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
            {/* LPs & Investors */}
            <div className="space-y-4 text-center p-4 sm:p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">LPs & Investors</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Gain visibility into sponsor's operating assumptions and their practicality with detailed underwriting analysis
              </p>
            </div>

            {/* GPs */}
            <div className="space-y-4 text-center p-4 sm:p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">GPs</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Build institutional-quality models & pitch decks for successful capital raising campaigns
              </p>
            </div>

            {/* Lenders */}
            <div className="space-y-4 text-center p-4 sm:p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Lenders</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Assess risk with detailed financial due diligence & comprehensive market analysis
              </p>
            </div>
          </div>

          {/* Pricing and Booking Section - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-base sm:text-lg font-medium">
              Starting at <span className="text-lg sm:text-xl font-bold">$199</span>
            </div>
            <Button 
              className="w-full sm:w-auto gap-2 px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 transition-all duration-300 rounded-full text-white"
              onClick={() => window.open(scheduleLink, '_blank')}
            >
              <Calendar className="h-4 w-4" />
              Book Your Consultation
            </Button>
          </div>

          {/* Analysis Features - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Analysis Features:</h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  icon: <Calculator className="h-4 w-4 text-purple-600" />,
                  title: "Advanced Modeling",
                  description: "Sophisticated Python algorithms for detailed leasing cash flow analysis, tenant improvement calculations, and lease renewal probabilities"
                },
                {
                  icon: <BarChart3 className="h-4 w-4 text-purple-600" />,
                  title: "Market Intelligence",
                  description: "Leverage premium market supply and absorption data from John Burns Real Estate Consulting and other top sources for accurate revenue growth (or decline) forecasting"
                },
                {
                  icon: <FileSpreadsheet className="h-4 w-4 text-purple-600" />,
                  title: "Detailed Support",
                  description: "Receive detailed explanations of assumptions, methodologies, and market comparables to support your investment decisions"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-4 text-left">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-base sm:text-lg">{feature.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}