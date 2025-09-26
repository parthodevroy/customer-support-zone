
import Tiket from "./Tiket"
import Tiketstatus from "../Tiketstatus/Tiketstatus"

const Customerstiket = ({ alltickets, updatedTasks, setResolvetask, 
  resolvetask, tiketadd, setTiketadd, setTaskstatus, taskstatus, setResolvecount }) =>
     {
  return (
    <div className="h-full bg-gray-200 w-full">
      <div className="flex flex-col md:flex-row p-4">
        
        {/* left side tickets */}
        <div className="w-full h-full md:w-[950px] h-[700px]">
          <h1 className="font-semibold text-xl pl-2">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 p-2 space-y-4">
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
