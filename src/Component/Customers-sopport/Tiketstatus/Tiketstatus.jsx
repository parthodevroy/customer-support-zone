import Tikets from "./Tikets";


const Tiketstatus = ({taskstatus,setResolvecount}) => {
    return (
        <div className="space-y-4">
            <h1 className="font-semibold">Task Status</h1>
            <div className="space-y-4 p-2 ">
                {
                taskstatus.map((status=><Tikets setResolvecount={setResolvecount} key={status.id} status={status}></Tikets>))
            }
            </div>
            <div>
                <h1 className="font-semibold ">Resolved Task</h1>
            </div>
        </div>
    );
};

export default Tiketstatus;