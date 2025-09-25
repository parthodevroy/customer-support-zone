

const Tiketstatus = ({setTaskstatus}) => {
    return (
        <div>
            {
                setTaskstatus.map((status=>status.title))
            }
        </div>
    );
};

export default Tiketstatus;