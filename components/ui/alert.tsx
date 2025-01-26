import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const alertVariants = cva("fixed top-4 right-4 w-96 rounded-lg border p-4 shadow-lg transition-all", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      success: "border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100",
      error: "border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  onClose?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, children, onClose, ...props }, ref) => {
    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">{children}</div>
          {onClose && (
            <button onClick={onClose} className="rounded-full p-1 hover:bg-background/20">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          )}
        </div>
      </div>
    )
  },
)
Alert.displayName = "Alert"

export { Alert, alertVariants }

