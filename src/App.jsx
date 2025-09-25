
import { Suspense } from 'react'
import './App.css'
import Bodyparent from './Component/Customers-sopport/Bodyparent'
import Customerstiket from './Component/Customers-sopport/Customers-tiket/Customerstiket'
import Navber from './Component/Customers-sopport/Navber'


const tikets=async()=>{
  const tiketsfetch=await fetch("/Tikets.json")
  return tiketsfetch.json()
}

const alltiketsdata=tikets()
function App() {
  

  return (
    <>
     

     <Navber></Navber>
     <Bodyparent></Bodyparent>
     <Suspense fallback={"loaading..."}>
      <Customerstiket alltiketsdata={alltiketsdata}></Customerstiket>
     </Suspense>
    </>
  )
}

export default App
