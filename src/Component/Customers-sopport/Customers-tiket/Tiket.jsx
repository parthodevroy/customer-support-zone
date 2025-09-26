import { toast } from "react-toastify";

const Tiket = ({tiket,setTiketadd,setTaskstatus,taskstatus}) => {

    const handelcart=()=>{
        toast("add inprogress")
        setTiketadd(prev=>prev+1)
        setTaskstatus([...taskstatus,tiket])
        
        
        
    }
    return (
       <button onClick={()=>handelcart()}>
            
            <div class="card bg-white rounded-xl p-2 w-full md:w-110 h-[120px] shadow-sm">
  <div class="card-body">
    <div className="flex justify-between">
        <h2 class="card-title font-semibold">{tiket.title}</h2>
        <p className={ ` rounded-lg w-24 h-7 ${tiket.status=="Open"?"text-black bg-emerald-300 ]"
          :tiket.status=="In Progress"?"text-black bg-yellow-200":"text-black bg-blue-400"}`} >{tiket.status}</p>
    </div>
    <p>{tiket.description}</p>
    <div class="card-actions justify-end">
     <div className="flex justify-between">
        <div className="flex pt-2 gap-2">
            <h4>#{tiket.id}</h4>
            <p className={`${tiket.priority=="High"?"text-amber-400":tiket.priority=="Critical"?
              "text-red-600":"text-green-500"}`} >{tiket.priority}</p>

        </div>
        <div className="flex pt-2 gap-2">
            <h4>{tiket.customer}</h4>
            <p>{tiket.createdAt}</p>

        </div>
     </div>
    </div>
  </div>
</div>
                
        </button>
    );
};

export default Tiket;