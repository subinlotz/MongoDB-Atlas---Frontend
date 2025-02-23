import { useState } from 'react'
import Signup from './components/Signup'
import { BrowserRouter,Routes,Route } from "react-router";
import Users from './components/Users';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Signup />} />
  <Route path="users" element={<Users />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
