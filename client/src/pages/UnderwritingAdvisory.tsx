import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Building2, Landmark, Calculator, BarChart3, FileSpreadsheet } from "lucide-react";

export default function UnderwritingAdvisory() {
  const scheduleLink = 'https://app.usemotion.com/meet/jack-ifrah/meeting';

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Institutional-Level Underwriting, Market & Financial Due Diligence</h2>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* LPs & Investors */}
            <div className="space-y-4 text-center p-6 rounded-lg bg-white/5">
              <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">LPs & Investors</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gain visibility into sponsor's operating assumptions and their practicality with detailed underwriting analysis
              </p>
            </div>

            {/* GPs */}
            <div className="space-y-4 text-center p-6 rounded-lg bg-white/5">
              <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">GPs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build institutional-quality models & pitch decks for successful capital raising campaigns
              </p>
            </div>

            {/* Lenders */}
            <div className="space-y-4 text-center p-6 rounded-lg bg-white/5">
              <div className="mx-auto w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Lenders</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Assess risk with detailed financial due diligence & comprehensive market analysis
              </p>
            </div>
          </div>

          {/* Analysis Features */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-semibold mb-4">Advanced Analysis Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Python-Powered Financial Modeling</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leverage sophisticated Python algorithms for detailed leasing cash flow analysis, tenant improvement calculations, and lease renewal probabilities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Market Intelligence</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access premium market supply and absorption data from John Burns Real Estate Consulting for accurate market positioning
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                  <FileSpreadsheet className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Comprehensive Documentation</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Receive detailed explanations of assumptions, methodologies, and market comparables to support your investment decisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing and Booking Section */}
          <div className="flex items-center gap-4 justify-center">
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