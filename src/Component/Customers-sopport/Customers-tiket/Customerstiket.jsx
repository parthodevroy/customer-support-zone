// import { use } from "react";
// import Tiket from "./Tiket";
// import Tiketstatus from "../Tiketstatus/Tiketstatus";


// const Customerstiket = ({alltiketsdata,updatedTasks,setResolvetask,resolvetask,tiketadd,setTiketadd,setTaskstatus,taskstatus,setResolvecount}) => {

//     const usedata=use(alltiketsdata)
    
    
//     return (
//         <div className="h-full bg-gray-100 w-full ">
//             <div className="flex p-4">
//                 {/* left tikets */}
// <div className="w-[950px] h-[700px] ">
//     <h1 className="font-semibold">Customer Tickets</h1>
    
//                <div className="grid grid-cols-2 p-2 space-y-4">
//                  {
//                     usedata.map((tiket=><Tiket key={tiket.id}  taskstatus={taskstatus} setTaskstatus={setTaskstatus} setTiketadd={setTiketadd} tiket={tiket} ></Tiket>))
//                 }
//                </div>
// </div>

// {/* right tiket status */}
// {/* <Tiketstatus updatedTasks={updatedTasks} resolvetask={resolvetask}setResolvetask={setResolvetask} setResolvecount={setResolvecount} setTiketadd={setTiketadd} tiketadd={tiketadd} taskstatus={taskstatus}></Tiketstatus> */}
// <Tiketstatus 
//   updatedTasks={updatedTasks}   // ✅ পাঠানো হলো
//   resolvetask={resolvetask}
//   setResolvetask={setResolvetask}
//   setResolvecount={setResolvecount}
//   setTiketadd={setTiketadd}
//   tiketadd={tiketadd}
//   taskstatus={taskstatus}
//   setTaskstatus={setTaskstatus}
// />

//                  </div>
            
//         </div>
//     );
// };

// export default Customerstiket;
import Tiket from "./Tiket"
import Tiketstatus from "../Tiketstatus/Tiketstatus"

const Customerstiket = ({ alltickets, updatedTasks, setResolvetask, resolvetask, tiketadd, setTiketadd, setTaskstatus, taskstatus, setResolvecount }) => {
  return (
    <div className="h-full bg-gray-100 w-full">
      <div className="flex p-4">
        
        {/* left side tickets */}
        <div className="w-[950px] h-[700px]">
          <h1 className="font-semibold">Customer Tickets</h1>
          <div className="grid grid-cols-2 p-2 space-y-4">
            {
              alltickets.map((tiket) => (
                <Tiket
                  key={tiket.id}
                  tiket={tiket}
                  taskstatus={taskstatus}
                  setTaskstatus={setTaskstatus}
                  setTiketadd={setTiketadd}
                />
              ))
            }
          </div>
        </div>

        {/* right side ticket status */}
        <Tiketstatus
          taskstatus={taskstatus}
          updatedTasks={updatedTasks}
          resolvetask={resolvetask}
          setResolvetask={setResolvetask}
          setResolvecount={setResolvecount}
          setTiketadd={setTiketadd}
          tiketadd={tiketadd}
        />
      </div>
    </div>
  )
}

export default Customerstiket
