
import { Suspense, useState } from 'react'
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
  const [tiketadd, setTiketadd]=useState(0)
  const [taskstatus , setTaskstatus]=useState([])
  console.log(taskstatus);
  
  

  return (
    <>
     

     <Navber></Navber>
     <Bodyparent tiketadd={tiketadd}></Bodyparent>
     <Suspense fallback={"loaading..."}>
      <Customerstiket taskstatus={taskstatus} setTaskstatus={setTaskstatus} setTiketadd={setTiketadd} alltiketsdata={alltiketsdata}></Customerstiket>
     </Suspense>
     
    </>
  )
}

export default App
