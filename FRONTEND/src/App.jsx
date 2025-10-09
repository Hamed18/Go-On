import { useState } from 'react'
import Root from './Layout/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h3 className="text-center">Go On</h3> */}
        <Root></Root>
      </div>
        
    </>
  )
}

export default App
