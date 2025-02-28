import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import modelScreenshot from "../../../MLCFs screenshot.png";
import inputPage from "../../../input page.png";

export default function UnderwritingAdvisory() {
  const scheduleLink = 'https://app.usemotion.com/meet/jack-ifrah/meeting';
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="container py-12 flex justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8">
          {/* Calendar Section - Simplified */}
          <div className="w-full bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-xl p-12 flex justify-center items-center shadow-sm">
            <Button 
              size="lg" 
              className="gap-3 h-12 px-8 text-base font-medium backdrop-blur-sm bg-gradient-to-r from-purple-700/80 to-indigo-700/80 border border-white/20 hover:from-purple-800/80 hover:to-indigo-800/80 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(147,51,234,0.3)] rounded-full text-white"
              onClick={() => window.open(scheduleLink, '_blank')}
            >
              <Calendar className="h-5 w-5" />
              Book Your Consultation
            </Button>
          </div>

          {/* Financial Models Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Institutional-Level Underwriting, Market & Financial Due Diligence</h2>
                <div className="space-y-4 mb-6">
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
                <div className="flex items-center gap-2 text-lg font-medium">
                  Starting at <span className="text-xl font-bold">$149</span>
                </div>

                {/* Image Carousel */}
                <div className="mt-8 relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      <div className="flex-[0_0_100%] min-w-0">
                        <img
                          src={modelScreenshot}
                          alt="Cash Flow Analysis"
                          className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                      </div>
                      <div className="flex-[0_0_100%] min-w-0">
                        <img
                          src={inputPage}
                          alt="Property Analysis"
                          className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}