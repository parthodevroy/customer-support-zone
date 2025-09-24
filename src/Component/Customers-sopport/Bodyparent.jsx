// import victorimg from "../../assets/vector1.png"

// const Bodyparent = () => {
//     return (
//         <div className="h-[500px] w-full border-2 flex items-center border-amber-200">
//             <div className=" flex items-center justify-center m-auto ">
//                 {/* <div className="w-[400px] h-[250px] bg-[#632EE3] border-2  border-amber-200"
                
// >

                    

//                 </div> */}
//                 <div className="flex items-center justify-center m-auto gap-2">
//   <div
//     className="w-[200px] h-[250px] bg-cover border-2 bg-amber-300 border-amber-200"
//     style={{ backgroundImage: `url(${victorimg})` }}
//   ></div>

//   <div
//     className="w-[200px] h-[250px] bg-amber-500 bg-cover border-2 border-amber-200"
//     style={{ backgroundImage: `url(${victorimg})`, transform: "scaleX(-1)" }}
//   ></div>
// </div>

//             </div>
            
//         </div>
//     );
// };

// export default Bodyparent;
import victorimg from "../../assets/vector1.png";

const Bodyparent = () => {
  return (
    <div className="h-[500px] w-full flex items-center justify-center border-2 border-amber-200">
      {/* Main box */}
      <div className="relative w-[600px] h-[250px] border-2 border-amber-200 bg-[#632EE3] overflow-hidden">
        {/* Original image */}
        <div
          className="absolute top-0 left-0 w-[300px] h-full bg-cover"
          style={{ backgroundImage: `url(${victorimg})` }}
        ></div>

        {/* Flipped image */}
        <div
          className="absolute top-0 right-0 w-[300px] h-full bg-cover"
          style={{
            backgroundImage: `url(${victorimg})`,
            transform: "scaleX(-1)",
          }}
        ></div>
      </div>
      {/* left box */}

      <div className="relative w-[600px] h-[250px] border-2 border-amber-200 bg-[#632EE3] overflow-hidden">
        {/* Original image */}
        
        <div
          className="absolute top-0 left-0 w-[300px] h-full bg-cover"
          style={{ backgroundImage: `url(${victorimg})` }}
        ></div>
<h1 className="text-center pt-[70px]">hoii</h1>
        {/* Flipped image */}
        <div
          className="absolute top-0 right-0 w-[300px]  h-full bg-cover"
          style={{
            backgroundImage: `url(${victorimg})`,
            transform: "scaleX(-1)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bodyparent;
