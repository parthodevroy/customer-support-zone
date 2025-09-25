import { use } from "react";
import Tiket from "./Tiket";
import Tiketstatus from "../Tiketstatus/Tiketstatus";


const Customerstiket = ({alltiketsdata}) => {

    const usedata=use(alltiketsdata)
    console.log(usedata);
    
    
    return (
        <div className="h-[860px] bg-gray-100 w-full border-2 border-amber-300">
            <div className="flex p-4">
                {/* left tikets */}
<div className="w-[950px] h-[700px] border-2 border-amber-200">
    <h1 className="font-semibold">Customer Tickets</h1>
    
               <div className="grid grid-cols-2 p-2 space-y-4">
                 {
                    usedata.map((tiket=><Tiket tiket={tiket} ></Tiket>))
                }
               </div>
</div>

{/* right tiket status */}

<Tiketstatus></Tiketstatus>
                 </div>
            
        </div>
    );
};

export default Customerstiket;