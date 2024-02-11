import { useState } from 'react'
import AppBar from './compenents/AppBar';
import Student from './compenents/Student';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AppBar></AppBar>
      <Student></Student>
    </div>
  )
}

export default App
