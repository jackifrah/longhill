import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar } from "lucide-react";

export default function UnderwritingAdvisory() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Underwriting Advisory Services</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Access institutional-quality financial models and schedule a consultation to discuss your real estate investment project.
        </p>

        <div className="grid gap-8">
          {/* Financial Models Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Financial Models
              </h2>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Multifamily Acquisition Model</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive model for multifamily property analysis</p>
                    </div>
                  </div>
                  <Button variant="outline">Download</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consultation Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Schedule a Consultation
              </h2>
              <p className="text-muted-foreground mb-4">
                Book a time to discuss your project and get personalized underwriting advice.
              </p>
              <iframe
                src="https://app.cal.com/jackifrah/30min"
                className="w-full h-[600px] border-0"
                frameBorder="0"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}