
import Resolvetask from "../Resolvetask/Resolvetask";
import Tikets from "./Tikets";

const Tiketstatus = ({ taskstatus, setTaskstatus, updatedTasks, setResolvecount, setTiketadd, resolvetask, setResolvetask }) => {
    return (
        <div className="space-y-6">
           {/* task status part */}
            <div>
                <h1 className="font-semibold pl-2 text-xl">Task Status</h1>
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
                            <p className="text-gray-500 pl-2 italic">plese select a customer tikets</p>
                        )
                    }
                </div>
            </div>

            {/* Resolved  part */}
            <div>
                <h1 className="font-semibold pl-2 text-xl">Resolved Task</h1>
                {
                    resolvetask.length > 0 ? (
                        <Resolvetask resolvetask={resolvetask} />
                    ) : (
                        <p className="text-gray-500 pl-2 italic">click a complete button</p>
                    )
                }
            </div>
        </div>
    );
};

export default Tiketstatus;

