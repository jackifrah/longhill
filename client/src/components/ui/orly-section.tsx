import { cn } from "@/lib/utils"
import orlyLogoSvg from "/orly-logo-wordmark@2x-2.svg"

export function OrlySection() {
  return (
    <div className="w-full py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        <img 
          src={orlyLogoSvg}
          alt="Orly AI"
          className="h-12 md:h-16 object-contain"
        />
        <p className="text-base leading-relaxed text-purple-900 dark:text-purple-400 font-medium">
          Building an AI-powered financial analyst for real estate portfolios, providing on-demand cash flow forecasting and scenario modeling. It learns from user data to predict key expenses like taxes and insurance, helping investors automate the financial analyst role.
        </p>
      </div>
    </div>
  )
}