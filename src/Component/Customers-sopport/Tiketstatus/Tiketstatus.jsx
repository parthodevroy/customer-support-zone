// import Resolvetask from "../Resolvetask/Resolvetask";
// import Tikets from "./Tikets";


// const Tiketstatus = ({taskstatus,setResolvecount,tiketadd,setResolvetask,resolvetask,setTiketadd}) => {
//     return (
//         <div className="space-y-4">
//             <h1 className="font-semibold">Task Status</h1>
//             <div className="space-y-4 p-2 ">
//                 {
//                 taskstatus.map((status=><Tikets taskstatus={taskstatus} setTiketadd={setTiketadd} resolvetask={resolvetask}setResolvetask={setResolvetask} tiketadd={tiketadd} setResolvecount={setResolvecount} key={status.id} status={status}></Tikets>))
//             }
//             </div>
//             <div>
//                 <h1 className="font-semibold ">Resolved Task</h1>
//                 <Resolvetask resolvetask={resolvetask}></Resolvetask>
//             </div>
//         </div>
//     );
// };

// export default Tiketstatus;
import Resolvetask from "../Resolvetask/Resolvetask";
import Tikets from "./Tikets";

const Tiketstatus = ({ taskstatus, setTaskstatus, setResolvecount, setTiketadd, resolvetask, setResolvetask }) => {
    return (
        <div className="space-y-4">
            <h1 className="font-semibold">Task Status</h1>
            <div className="space-y-4 p-2 ">
                {
                    taskstatus.map((status) => (
                        <Tikets 
                            key={status.id} 
                            status={status} 
                            taskstatus={taskstatus}
                            setTaskstatus={setTaskstatus}
                            setTiketadd={setTiketadd}
                            setResolvecount={setResolvecount}
                            resolvetask={resolvetask}
                            setResolvetask={setResolvetask}
                        />
                    ))
                }
            </div>
            <div>
                <h1 className="font-semibold">Resolved Task</h1>
                <Resolvetask resolvetask={resolvetask} />
            </div>
        </div>
    );
};

export default Tiketstatus;
