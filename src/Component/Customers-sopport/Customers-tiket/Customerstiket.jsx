import { use } from "react";
import Tiket from "./Tiket";
import Tiketstatus from "../Tiketstatus/Tiketstatus";


const Customerstiket = ({alltiketsdata,setResolvetask,resolvetask,tiketadd,setTiketadd,setTaskstatus,taskstatus,setResolvecount}) => {

    const usedata=use(alltiketsdata)
    
    
    return (
        <div className="h-full bg-gray-100 w-full ">
            <div className="flex p-4">
                {/* left tikets */}
<div className="w-[950px] h-[700px] ">
    <h1 className="font-semibold">Customer Tickets</h1>
    
               <div className="grid grid-cols-2 p-2 space-y-4">
                 {
                    usedata.map((tiket=><Tiket key={tiket.id} taskstatus={taskstatus} setTaskstatus={setTaskstatus} setTiketadd={setTiketadd} tiket={tiket} ></Tiket>))
                }
               </div>
</div>

{/* right tiket status */}
<Tiketstatus resolvetask={resolvetask}setResolvetask={setResolvetask} setResolvecount={setResolvecount} setTiketadd={setTiketadd} tiketadd={tiketadd} taskstatus={taskstatus}></Tiketstatus>

                 </div>
            
        </div>
    );
};

export default Customerstiket;