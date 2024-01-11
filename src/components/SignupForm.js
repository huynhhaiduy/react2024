import React, { useState } from "react"

const SignupForm = () => {
  const [customerInputs, setCustomerInputs] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target  // Destructuring

    // console.log(name, value)

    setCustomerInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()  // not reloading the  web
    console.log(customerInputs)
  }

  return (
    <div>
      <h3>Sign Up Now</h3>
      <p>Please sign up to become the member.</p>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={customerInputs.name || ""}
          onChange={handleChange}
        />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={customerInputs.email || ""}
          onChange={handleChange}
        />
        <label>Address: </label>
        <input
          type="text"
          name="address"
          value={customerInputs.address || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default SignupForm
