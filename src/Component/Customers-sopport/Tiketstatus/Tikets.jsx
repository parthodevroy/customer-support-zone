

const Tikets = ({status,setResolvecount}) => {

    const handelcompletebtn=()=>{
        setResolvecount(pre=>pre+1)
    }
    return (
        
            <div className="bg-white w-[300px] h-25 space-y-2 p-2">
                <h1 className="font-sans">{status.title}</h1>
                <div  onClick={handelcompletebtn}  className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center">
                    <button className="text-black">complete</button>
                </div>

            </div>
        
    );
};

export default Tikets;