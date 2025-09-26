

// const Tikets = ({ status,updatedTasks, setResolvecount, 
//     setTiketadd, setResolvetask, resolvetask,
//       }) => {
    
//     const handelcompletebtn = () => {
//         alert("completed")
//         setResolvecount(pre => pre + 1)            
//         setTiketadd(pre => pre - 1)                
//         setResolvetask([...resolvetask, status])
//         updatedTasks(status)
         
//     }

//     return (
//         <div className="bg-white w-[300px] h-25 space-y-2 p-2">
//             <h1 className="font-sans">{status.title}</h1>
//             <div onClick={handelcompletebtn} className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center cursor-pointer">
//                 <button className="text-white">Complete</button>
//             </div>
//         </div>
//     );
// };
const Tikets = ({ status, updatedTasks, setResolvecount, setTiketadd, setResolvetask, resolvetask }) => {
    
    // const handelcompletebtn = () => {
    //     alert("completed");
    //     setResolvecount(pre => pre + 1);             // ✅ resolve count বাড়ানো
    //     setTiketadd(pre => pre - 1);                 // ✅ in-progress কমানো
    //     setResolvetask([...resolvetask, status]);    // ✅ resolved এ পাঠানো
    //     updatedTasks(status);                        // ✅ In-progress থেকে remove করা
    // };
    const handelcompletebtn = () => {
    // prevent duplicates
    if (resolvetask.find(task => task.id === status.id)) return;
    alert("completed");
        // setResolvecount(pre => pre + 1);             // ✅ resolve count বাড়ানো
        setTiketadd(pre => pre - 1);                 // ✅ in-progress কমানো
        // setResolvetask([...resolvetask, status]);

    // call updatedTasks function from App
    updatedTasks(status)
  }

    return (
        <div className="bg-white w-[300px] h-25 space-y-2 p-2">
            <h1 className="font-sans">{status.title}</h1>
            <div 
              onClick={handelcompletebtn} 
              className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center cursor-pointer"
            >
                <button className="text-white">Complete</button>
            </div>
        </div>
    );
};
// const Tikets = ({ status, updatedTasks }) => {
//     const handelcompletebtn = () => {
//         alert("completed");
//         updatedTasks(status);   // শুধু updatedTasks হ্যান্ডেল করবে
//     };

//     return (
//         <div className="bg-white w-[300px] h-25 space-y-2 p-2">
//             <h1 className="font-sans">{status.title}</h1>
//             <div onClick={handelcompletebtn} className="h-8 border-2 border-amber-300 bg-emerald-700 rounded-2xl text-center cursor-pointer">
//                 <button className="text-white">Complete</button>
//             </div>
//         </div>
//     );
// };

export default Tikets;


// export default Tikets;
