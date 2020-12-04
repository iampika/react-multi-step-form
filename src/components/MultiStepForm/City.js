import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function City({ formProps: { register, errors }, data }) {
  const { location } = useContext(AppContext)

  return (
    <div className="space-x-4">
      {location[0].location === 'Beach' && (
        <>
          <label>
            <input
              type="checkbox"
              name="city"
              value="Goa"
              defaultChecked
              ref={register({
                required: 'This field is required',
              })}
              className="mr-2"
            />
            Goa
          </label>
          <label>
            <input
              type="checkbox"
              name="city"
              value="Pondicherry"
              ref={register({
                required: 'This field is required',
              })}
              className="mr-2"
            />
            Pondicherry
          </label>
          <label>
            <input
              type="checkbox"
              name="city"
              value="Kerala"
              ref={register({
                required: 'This field is required',
              })}
              className="mr-2"
            />
            Kerala
          </label>
        </>
      )}
      {location[0].location === 'Mountain' && (
        <>
          <label>
            <input
              type="checkbox"
              name="city"
              value="Shimla"
              defaultChecked
              ref={register({
                required: 'This field is required',
              })}
              className="mr-2"
            />
            Shimla
          </label>
          <label>
            <input
              type="checkbox"
              name="city"
              value="Manali"
              ref={register({
                required: 'This field is required',
              })}
              className="mr-2"
            />
            Manali
          </label>
          <label>
            <input
              type="checkbox"
              name="city"
              value="Nainital"
              ref={register({
                required: 'This field is required',
              })}
              className="mr-2"
            />
            Nainital
          </label>
        </>
      )}
      {errors.city && (
        <p className="mt-2 text-red-400">
          {errors.city.message}
        </p>
      )}
    </div>
  )
}

export default City
