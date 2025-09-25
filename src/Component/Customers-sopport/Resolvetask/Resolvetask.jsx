import Task from "./Task";


const Resolvetask = ({resolvetask}) => {
    return (
        <div>
            {
                resolvetask.map((task=><Task task={task}></Task>))
            }
        </div>
    );
};

export default Resolvetask;