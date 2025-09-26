import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Task = ({task}) => {
    return (
        <div className="w-full md:w-[250px] pl-2 h-14 bg-white">
           <span className="font-medium">{task.title}</span> 
            <p className="text-[#54CF68]"><FontAwesomeIcon icon={faCheck} /> completed</p>
        </div>
    );
};

export default Task;