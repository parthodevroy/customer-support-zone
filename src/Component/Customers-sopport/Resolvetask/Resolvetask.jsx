import Task from "./Task";


const Resolvetask = ({resolvetask}) => {
    return (
        <div className="space-y-2 p-2">
            {
                resolvetask.map((task=><Task task={task}></Task>))
            }
        </div>
    );
};

export default Resolvetask;