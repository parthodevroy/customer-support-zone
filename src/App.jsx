
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
  const [resolvecount,setResolvecount]=useState(0)
  const [resolvetask, setResolvetask]=useState([])
  console.log(resolvetask);
  
  
  

  return (
    <>
     

     <Navber></Navber>
     <Bodyparent resolvecount={resolvecount} tiketadd={tiketadd}></Bodyparent>
     <Suspense fallback={"loaading..."}>
      <Customerstiket resolvetask={resolvetask} setResolvetask={setResolvetask} tiketadd={tiketadd} setResolvecount={setResolvecount} taskstatus={taskstatus} setTaskstatus={setTaskstatus} setTiketadd={setTiketadd} alltiketsdata={alltiketsdata}></Customerstiket>
     </Suspense>
     
    </>
  )
}

export default App
