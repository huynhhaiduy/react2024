import "./App.css"

import CustomerOne from "./components/CustomerOne"
import CustomerTwo from "./components/CustomerTwo"

function App() {
  return (
    <div className='App'>
      <h1>My first React App</h1>
      <CustomerOne />
      <hr />
      <CustomerTwo />
    </div>
  )
}

export default App
