import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../../context/AppContext'
import Name from './Name'
import Location from './Location'
import City from './City'
import Suggestion from './Suggestion'
import Review from './Review'

function MultiStepForm() {
  const { name, location, city, suggestion } = useContext(
    AppContext
  )

  const nameForm = useForm()
  const locationForm = useForm()
  const cityForm = useForm()
  const suggestionForm = useForm()

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const onSubmit = (data) => {
    if (activeStep === 0) {
      name[1](data)
    } else if (activeStep === 1) {
      location[1](data)
    } else if (activeStep === 2) {
      city[1](data)
    } else if (activeStep === 3) {
      suggestion[1](data)
    }
    handleNext()
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Name formProps={nameForm} data={name} />
      case 1:
        return (
          <Location formProps={locationForm} data={location} />
        )
      case 2:
        return <City formProps={cityForm} data={city} />
      case 3:
        return (
          <Suggestion
            formProps={suggestionForm}
            data={suggestion}
          />
        )
      case 4:
        return <Review />
      default:
        return 'Unknown stepIndex'
    }
  }

  return (
    <div className="flex items-center justify-center mt-64">
      <form
        onSubmit={
          activeStep === 0
            ? nameForm.handleSubmit(onSubmit)
            : activeStep === 1
            ? locationForm.handleSubmit(onSubmit)
            : activeStep === 2
            ? cityForm.handleSubmit(onSubmit)
            : activeStep === 3
            ? suggestionForm.handleSubmit(onSubmit)
            : null
        }
      >
        <div>
          <div>
            <div>{getStepContent(activeStep)}</div>
            {activeStep <= 3 && (
              <button
                type="submit"
                className="mt-4 bg-blue-400 px-4 py-2 rounded text-red-50 focus:outline-none"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default MultiStepForm
