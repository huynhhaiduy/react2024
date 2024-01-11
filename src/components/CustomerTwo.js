import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CustomerInfo from './CustomerInfo'
// import SignupForm from './SignupForm'
import RegisterForm from './RegisterForm'

const CustomerTwo = () => {
  const info = {
    name: 'Hai Duy',
    email: 'haiduy@gmail.com',
    location: 'Vietnam',
    company: 'Vinamilk',
    isMember: false
  }
  
  const handleBuy = () => {
    console.log('Sending orders...')
    toast('Thank you!')
  }

  return (
    <div>
      <h2>Customer 2</h2>
      <p>I am a Function component.</p>
      {
        info.isMember ? <CustomerInfo info={info} /> : <RegisterForm />
      }
      <hr />
      <button onClick={handleBuy}>Buy Now</button>
      <ToastContainer />
    </div>
  )
}

export default CustomerTwo
