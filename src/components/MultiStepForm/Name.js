function Name({ formProps: { register, errors }, data }) {
  return (
    <div>
      <input
        className={`p-3 rounded w-64 focus:outline-none border ${
          errors.name &&
          'focus:outline-shadow-red focus:ring-2 focus:ring-red-400'
        }`}
        placeholder="Name"
        name="name"
        ref={register({ required: 'This field is required' })}
      />
      {errors.name && (
        <p className="mt-2 text-red-400">
          {errors.name.message}
        </p>
      )}
    </div>
  )
}

export default Name
