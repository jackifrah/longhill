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
        <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          An AI-powered financial analyst for real estate portfolios, providing on-demand cash flow forecasting and scenario modeling. <span className="font-bold text-purple-900 dark:text-purple-400">Orly</span> learns from user data to predict key expenses like taxes and insurance, helping investors automate the financial analyst role.
        </div>
      </div>
    </div>
  )
}