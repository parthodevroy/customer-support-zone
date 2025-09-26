import './index.css'
import { ToastContainer} from 'react-toastify';
import { useState, useEffect, Suspense } from 'react'
import './App.css'
import Bodyparent from './Component/Customers-sopport/Bodyparent'
import Customerstiket from './Component/Customers-sopport/Customers-tiket/Customerstiket'
import Navber from './Component/Customers-sopport/Navber'
import Fotter from './Component/Customers-sopport/Fottersection/Fotter';
import Foterend from './Component/Customers-sopport/Fottersection/Foterend';

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

  
  const updatedTasks = (completedTask) => {
    // taskstatus থেকে remove
    setTaskstatus(prev => prev.filter(task => task.id !== completedTask.id))

    // alltickets থেকেও remove
    setAlltickets(prev => prev.filter(task => task.id !== completedTask.id))

    // resolve list এ পাঠানো চাইলে
    setResolvetask(prev => [...prev, completedTask])
    setResolvecount(prev => prev + 1)
  }


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
      <Fotter></Fotter>
      <Foterend></Foterend>

      <ToastContainer/>
    </>
  )
}

export default App
