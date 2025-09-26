
// import Resolvetask from "../Resolvetask/Resolvetask";
// import Tikets from "./Tikets";

// const Tiketstatus = ({ taskstatus, setTaskstatus, setResolvecount, setTiketadd, resolvetask, setResolvetask }) => {
//     return (
//         <div className="space-y-4">
//             <h1 className="font-semibold">Task Status</h1>
//             <div className="space-y-4 p-2 ">
//                 {
//                     taskstatus.map((status) => (
//                         <Tikets 
//                             key={status.id} 
//                             status={status} 
//                             taskstatus={taskstatus}
//                             setTaskstatus={setTaskstatus}
//                             setTiketadd={setTiketadd}
//                             setResolvecount={setResolvecount}
//                             resolvetask={resolvetask}
//                             setResolvetask={setResolvetask}
//                             // updatedTasks={updatedTasks}
                            
//                         />
//                     ))
//                 }
//             </div>
//             <div>
//                 <h1 className="font-semibold">Resolved Task</h1>
//                 <Resolvetask resolvetask={resolvetask} />
//             </div>
//         </div>
//     );
// };
// const Tiketstatus = ({ taskstatus, setTaskstatus, setResolvecount, setTiketadd, resolvetask, setResolvetask, updatedTasks }) => {
//     return (
//         <div className="space-y-4">
//             <h1 className="font-semibold">Task Status</h1>
//             <div className="space-y-4 p-2 ">
//                 {
//                     taskstatus.map((status) => (
//                         <Tikets 
//                             key={status.id} 
//                             status={status} 
//                             setTiketadd={setTiketadd}
//                             setResolvecount={setResolvecount}
//                             resolvetask={resolvetask}
//                             setResolvetask={setResolvetask}
//                             updatedTasks={updatedTasks}   // ✅ পাঠানো হলো
//                         />
//                     ))
//                 }
//             </div>
//             <div>
//                 <h1 className="font-semibold">Resolved Task</h1>
//                 <Resolvetask resolvetask={resolvetask} />
//             </div>
//         </div>
//     );
// };

// export default Tiketstatus;
import Resolvetask from "../Resolvetask/Resolvetask";
import Tikets from "./Tikets";

const Tiketstatus = ({ taskstatus, setTaskstatus, updatedTasks, setResolvecount, setTiketadd, resolvetask, setResolvetask }) => {
    return (
        <div className="space-y-6">
            {/* In-progress tasks */}
            <div>
                <h1 className="font-semibold">Task Status</h1>
                <div className="space-y-4 p-2">
                    {
                        taskstatus.length > 0 ? (
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
                                    updatedTasks={updatedTasks}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No task in progress</p>
                        )
                    }
                </div>
            </div>

            {/* Resolved tasks */}
            <div>
                <h1 className="font-semibold">Resolved Task</h1>
                {
                    resolvetask.length > 0 ? (
                        <Resolvetask resolvetask={resolvetask} />
                    ) : (
                        <p className="text-gray-500 italic">No resolved task yet</p>
                    )
                }
            </div>
        </div>
    );
};

export default Tiketstatus;

