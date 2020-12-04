function Location({ formProps: { register }, data }) {
  return (
    <div className="space-x-4">
      <label>
        <input
          type="radio"
          name="location"
          value="Beach"
          defaultChecked
          ref={register()}
          className="mr-2"
        />
        Beach
      </label>
      <label>
        <input
          type="radio"
          name="location"
          value="Mountain"
          ref={register()}
          className="mr-2"
        />
        Mountain
      </label>
    </div>
  )
}

export default Location
