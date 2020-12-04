import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function Review() {
  const { name, location, city, suggestion } = useContext(
    AppContext
  )

  const handleSubmit = () => {
    alert(
      JSON.stringify({
        name: name[0].name,
        location: location[0].location,
        city: city[0].city,
        suggestion: suggestion[0].suggestion,
      })
    )
  }

  return (
    <div>
      <pre>
        {JSON.stringify(
          {
            name: name[0].name,
            location: location[0].location,
            city: city[0].city,
            suggestion: suggestion[0].suggestion,
          },
          null,
          2
        )}
      </pre>
      <button
        className="mt-4 bg-blue-400 px-4 py-2 rounded text-red-50 focus:outline-none"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default Review
