import Tiketstatus from "../Tiketstatus/Tiketstatus";

const getStatusColor = (status) => {
  switch ((status || "").toLowerCase()) {
    case "open":
      return "text-green-600 font-semibold";
    case "in progress":
    case "in-progress":
      return "text-yellow-600 font-semibold";
    case "closed":
    case "resolved":
      return "text-green-600 font-semibold";
    default:
      return "text-gray-600 font-semibold";
    }
};

const getPriorityColor = (priority) => {
  switch ((priority || "").toLowerCase()) {
    case "high":
      return "text-red-600 font-semibold";
    case "medium":
      return "text-amber-600 font-semibold";
    case "low":
      return "text-green-600 font-semibold";
    default:
      return "text-gray-600 font-semibold";
  }
};

const Tiket = ({tiket,setTiketadd,setTaskstatus,taskstatus}) => {

    const handelcart=()=>{
        alert("add inprogress")
        setTiketadd(prev=>prev+1)
        setTaskstatus([...taskstatus,tiket])
        
        
    }
    return (
       <button onClick={()=>handelcart()}>
            
            <div class="card bg-white p-2 w-110 shadow-sm">
  <div class="card-body">
    <div className="flex justify-between">
        <h2 class="card-title font-semibold">{tiket.title}</h2>
        <p className={getStatusColor(tiket.status)}>{tiket.status}</p>
    </div>
    <p>{tiket.description}</p>
    <div class="card-actions justify-end">
     <div className="flex justify-between">
        <div className="flex gap-2">
            <h4>#{tiket.id}</h4>
            <p className={getPriorityColor(tiket.priority)}>{tiket.priority}</p>

        </div>
        <div className="flex gap-2">
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