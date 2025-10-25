import { Check } from "lucide-react"

export const SuccessMessage = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 border border-gray-600 rounded-lg p-3 sm:p-4 mb-4">
      <div className="flex items-center space-x-2">
        <div className="bg-green-500 rounded-full p-1">
          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
        <span className="text-green-500 font-medium text-sm sm:text-base">Success!</span>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="text-orange-500 font-bold text-xs sm:text-sm">CLOUDFLARE</div>
        <div className="text-gray-400 text-xs">Privacy • Terms</div>
      </div>
    </div>
  )
}