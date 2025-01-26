"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

type AlertType = {
  message: string
  variant: "success" | "error"
}

type AlertContextType = {
  showAlert: (alert: AlertType) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<AlertType | null>(null)

  const showAlert = useCallback((newAlert: AlertType) => {
    setAlert(newAlert)
    setTimeout(() => setAlert(null), 5000)
  }, [])

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert(null)}
          className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
        >
          {alert.message}
        </Alert>
      )}
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider")
  }
  return context
}

