import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, ArrowRight, Calendar } from "lucide-react";
import modelScreenshot from "../../../MLCFs screenshot.png";

export default function UnderwritingAdvisory() {
  const [calendarLoaded, setCalendarLoaded] = React.useState(false);
  const [calendarError, setCalendarError] = React.useState<string | null>(null);
  const scheduleLink = 'jack-ifrah';

  React.useEffect(() => {
    const loadMotionCalendar = async () => {
      try {
        // First verify our API connection
        const response = await fetch('/api/motion/availability');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to connect to calendar service');
        }

        // Load Motion's SDK
        const script = document.createElement('script');
        script.src = 'https://app.usemotion.com/js/sdk.js';
        script.async = true;

        script.onload = () => {
          if (window.Motion) {
            try {
              window.Motion.init({
                container: '#motion-calendar',
                url: `https://app.usemotion.com/meet/${scheduleLink}`,
              });
              setCalendarLoaded(true);
              setCalendarError(null);
            } catch (error) {
              console.error('Motion SDK initialization error:', error);
              setCalendarError('Failed to initialize calendar');
            }
          } else {
            setCalendarError('Calendar service failed to initialize');
          }
        };

        script.onerror = () => {
          setCalendarError('Failed to load calendar service');
        };

        document.body.appendChild(script);

        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load calendar';
        console.error('Calendar loading error:', error);
        setCalendarError(errorMessage);
      }
    };

    loadMotionCalendar();
  }, [scheduleLink]);

  const handleRetry = () => {
    setCalendarError(null);
    setCalendarLoaded(false);
    window.location.reload();
  };

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

            <div className="mt-4">
              {calendarError ? (
                <div className="text-center p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
                  <p className="text-red-600 dark:text-red-400">
                    {calendarError}. Please try again later or contact us directly.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={handleRetry}
                  >
                    Retry Loading Calendar
                  </Button>
                </div>
              ) : !calendarLoaded ? (
                <div className="flex flex-col items-center justify-center h-[400px] gap-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <p className="text-muted-foreground">Loading calendar...</p>
                </div>
              ) : (
                <div id="motion-calendar" className="min-h-[600px]"></div>
              )}
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

// Add TypeScript declaration for Motion
declare global {
  interface Window {
    Motion?: {
      init: (config: { container: string; url: string }) => void;
    };
  }
}