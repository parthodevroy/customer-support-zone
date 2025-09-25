

// const Tikets = ({status,setResolvecount,tiketadd,setResolvetask,resolvetask,setTiketadd}) => {

//     const handelcompletebtn=()=>{
//     alert("completed")
//     setResolvecount(pre=>pre+1)
// -   tiketadd(pree=>pree-1)

// +   setTiketadd(pree=>pree-1)   // ✅ এখানে setter ব্যবহার করতে হবে
//     setResolvetask([...resolvetask,status])
//     console.log("resolve updated:", [...resolvetask, status])
//     const updatedTasks = taskstatus.filter(task => task.id !== status.id)
//         setTaskstatus(updatedTasks)
// }

//     return (
        
//             <div className="bg-white w-[300px] h-25 space-y-2 p-2">
//                 <h1 className="font-sans">{status.title}</h1>
//                 <div  onClick={handelcompletebtn} className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center">
//                     <button className="text-black">complete</button>
//                 </div>

//             </div>
        
//     );
// };

// export default Tikets;
const Tikets = ({ status, setResolvecount, setTiketadd, setResolvetask, resolvetask, taskstatus, setTaskstatus }) => {
    
    const handelcompletebtn = () => {
        alert("completed")
        setResolvecount(pre => pre + 1)            // ✅ resolve count বাড়ানো
        setTiketadd(pre => pre - 1)                // ✅ in-progress count কমানো
        setResolvetask([...resolvetask, status])   // ✅ resolved list এ push
        const updatedTasks = taskstatus.filter(task => task.id !== status.id)
        setTaskstatus(updatedTasks)                // ✅ in-progress থেকে remove
    }

    return (
        <div className="bg-white w-[300px] h-25 space-y-2 p-2">
            <h1 className="font-sans">{status.title}</h1>
            <div onClick={handelcompletebtn} className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center cursor-pointer">
                <button className="text-white">Complete</button>
            </div>
        </div>
    );
};

export default Tikets;
