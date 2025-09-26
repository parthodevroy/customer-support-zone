
// import { Suspense, useState } from 'react'
// import './App.css'
// import Bodyparent from './Component/Customers-sopport/Bodyparent'
// import Customerstiket from './Component/Customers-sopport/Customers-tiket/Customerstiket'
// import Navber from './Component/Customers-sopport/Navber'



// const tikets=async()=>{
//   const tiketsfetch=await fetch("/Tikets.json")
//   return tiketsfetch.json()
// }

// const alltiketsdata=tikets()


// function App() {
//   const [tiketadd, setTiketadd]=useState(0)
//   const [taskstatus , setTaskstatus]=useState([])
//   const [resolvecount,setResolvecount]=useState(0)
//   const [resolvetask, setResolvetask]=useState([])
  
//   // const updatedTasks = (p)=>{
//   //   console.log(p);
//   const updatedTasks = (completedTask) => {
//   // In-progress থেকে রিমুভ করবো
//   setTaskstatus(prev => prev.filter(task => task.id !== completedTask.id));
// };

    
    
//    const remuve=resolvetask.filter(task => task.id!==p.id)
//         console.log(remuve);
        
  
//    }
  
// return (
//     <>
     

//      <Navber></Navber>
//      <Bodyparent resolvecount={resolvecount} tiketadd={tiketadd}></Bodyparent>
//      <Suspense fallback={"loaading..."}>
//       <Customerstiket updatedTasks={updatedTasks} resolvetask={resolvetask} setResolvetask={setResolvetask} tiketadd={tiketadd} setResolvecount={setResolvecount} taskstatus={taskstatus} setTaskstatus={setTaskstatus} setTiketadd={setTiketadd} alltiketsdata={alltiketsdata}></Customerstiket>
//      </Suspense>
     
//     </>
//   )


// export default App

import { useState, useEffect, Suspense } from 'react'
import './App.css'
import Bodyparent from './Component/Customers-sopport/Bodyparent'
import Customerstiket from './Component/Customers-sopport/Customers-tiket/Customerstiket'
import Navber from './Component/Customers-sopport/Navber'

function App() {
  const [alltickets, setAlltickets] = useState([])
  const [tiketadd, setTiketadd] = useState(0)
  const [taskstatus, setTaskstatus] = useState([])
  const [resolvecount, setResolvecount] = useState(0)
  const [resolvetask, setResolvetask] = useState([])

  // ✅ fetch data with useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/Tikets.json")
      const data = await res.json()
      setAlltickets(data)
    }
    fetchData()
  }, [])

  //  const updatedTasks = (completedTask) => {
  //   // prevent duplicates
  //   if (resolvetask.find(task => task.id === completedTask.id)) return;

  //   setTaskstatus(prev => prev.filter(task => task.id !== completedTask.id))
  //   setResolvetask(prev => [...prev, completedTask])
  //   setResolvecount(prev => prev + 1)
  //   setTiketadd(prev => prev - 1)
  // }
  const updatedTasks = (completedTask) => {
    // taskstatus থেকে remove
    setTaskstatus(prev => prev.filter(task => task.id !== completedTask.id))

    // alltickets থেকেও remove
    setAlltickets(prev => prev.filter(task => task.id !== completedTask.id))

    // resolve list এ পাঠানো চাইলে
    setResolvetask(prev => [...prev, completedTask])
    setResolvecount(prev => prev + 1)
  }
// const updatedTasks = (completedTask) => {
//   // in-progress থেকে রিমুভ
//   setTaskstatus(prev => prev.filter(task => task.id !== completedTask.id));

//   // resolved-এ add
//   setResolvetask(prev => [...prev, completedTask]);

//   // কাউন্টার আপডেট
//   setResolvecount(pre => pre + 1);
//   setTiketadd(pre => pre - 1);
// };

  return (
    <>
      <Navber />
      <Bodyparent resolvecount={resolvecount} tiketadd={tiketadd} />
      <Suspense fallback={"loading..."}>
        <Customerstiket
          alltickets={alltickets}
          setAlltickets={setAlltickets}
          taskstatus={taskstatus}
          setTaskstatus={setTaskstatus}
          tiketadd={tiketadd}
          setTiketadd={setTiketadd}
          updatedTasks={updatedTasks}
          resolvetask={resolvetask}
          setResolvetask={setResolvetask}
          setResolvecount={setResolvecount}
        />
      </Suspense>
    </>
  )
}

export default App
