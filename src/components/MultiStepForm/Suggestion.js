function Suggestion({ formProps: { register, errors }, data }) {
  return (
    <div>
      <textarea
        type="text"
        className={`p-3 rounded w-64 focus:outline-none border ${
          errors.suggestion &&
          'focus:outline-shadow-red focus:ring-2 focus:ring-red-400'
        }`}
        placeholder="Suggestion"
        name="suggestion"
        ref={register({ required: 'This field is required' })}
      />
      {errors.suggestion && (
        <p className="mt-2 text-red-400">
          {errors.suggestion.message}
        </p>
      )}
    </div>
  )
}

export default Suggestion
