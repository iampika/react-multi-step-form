import { createContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [name, setName] = useState(null)
  const [location, setLocation] = useState(null)
  const [city, setCity] = useState(null)
  const [suggestion, setSuggestion] = useState(null)

  const multiStepFormState = {
    name: [name, setName],
    location: [location, setLocation],
    city: [city, setCity],
    suggestion: [suggestion, setSuggestion],
  }

  return (
    <AppContext.Provider value={multiStepFormState}>
      {children}
    </AppContext.Provider>
  )
}
