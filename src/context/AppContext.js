import { createContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('pika')
  const [location, setLocation] = useState('beach')
  const [city, setCity] = useState('Goa')
  const [suggestion, setSuggestion] = useState('')

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
