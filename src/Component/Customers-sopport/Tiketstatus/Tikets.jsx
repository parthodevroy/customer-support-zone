import { toast } from "react-toastify";


const Tikets = ({ status, updatedTasks, setTiketadd,  resolvetask }) => {
    
    const handelcompletebtn = () => {
    
    if (resolvetask.find(task => task.id === status.id)) return;
    toast("completed");
                    
        setTiketadd(pre => pre - 1);                
       

    
    updatedTasks(status)
  }

    return (
        <div className="bg-white w-full md:w-[300px] h-25 space-y-2 p-2">
            <h1 className="font-sans">{status.title}</h1>
            <div 
              onClick={handelcompletebtn} 
              className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center cursor-pointer"
            >
                <button className="text-white">Complete</button>
            </div>
        </div>
    );
};
export default Tikets;



