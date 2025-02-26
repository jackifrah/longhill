import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

export default function UnderwritingAdvisory() {
  return (
    <div className="container py-12 flex justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8">
          {/* Financial Models Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Comprehensive model for multifamily property analysis</p>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
            </div>
          </div>

          {/* Consultation Section */}
          <div className="w-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6">
            <iframe
              src="https://motion.com/forms/f/62c375"
              className="w-full h-[600px] border-0"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}