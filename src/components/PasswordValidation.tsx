import { Check, X } from "lucide-react"

interface PasswordValidationProps {
  validation: {
    hasMinLength: boolean
    hasLowercase: boolean
    hasUppercase: boolean
    hasNumber: boolean
    hasSpecialChar: boolean
  }
}

export const PasswordValidation = ({ validation }: PasswordValidationProps) => {
  const requirements = [
    { key: "hasMinLength", text: "Between 8 and 100 characters" },
    { key: "hasLowercase", text: "At least one lowercase letter" },
    { key: "hasUppercase", text: "At least one uppercase letter" },
    { key: "hasNumber", text: "At least one number" },
    { key: "hasSpecialChar", text: "At least one special character" },
  ]

  return (
    <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-3">
      {requirements.map(({ key, text }) => {
        const isValid = validation[key as keyof typeof validation]
        return (
          <div key={key} className="flex items-center space-x-2 text-xs sm:text-sm">
            {isValid ? (
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
            ) : (
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
            )}
            <span className={`${isValid ? "text-green-500" : "text-gray-500"} leading-tight`}>
              {text}
            </span>
          </div>
        )
      })}
    </div>
  )
}