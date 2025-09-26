
import victorimg from "../../assets/vector1.png";


const Bodyparent = ({tiketadd,resolvecount}) => {
  return (
    <div className="h-[340px] bg-gray-200 w-full flex items-center justify-center gap-5 ">
      
      <div className="relative w-[600px] h-[250px]  bg-[#632EE3] overflow-hidden">

        <div
          className="absolute top-0 left-0 w-[300px] h-full bg-cover"
          style={{ backgroundImage: `url(${victorimg})` }}
        ></div>
        <h1 className="text-white text-2xl flex flex-col font-bold text-center pt-[70px] relative z-10">
          <span>In-Progress</span>
         <span>{tiketadd}</span>
        </h1>
        <div
          className="absolute top-0 right-0 w-[300px] h-full bg-cover"
          style={{
            backgroundImage: `url(${victorimg})`,
            transform: "scaleX(-1)",
          }}
        ></div>
      </div>

      {/* Second Box  */}

      <div className="relative w-[600px] h-[250px]  bg-[#54CF68] overflow-hidden">
        
        <div
          className="absolute top-0 left-0 w-[300px] h-full bg-cover"
          style={{ backgroundImage: `url(${victorimg})` }}
        ></div>

        <h1 className="text-white flex flex-col text-2xl font-bold text-center pt-[70px] relative z-10">
         <span>Resolve</span> 
          <span>{resolvecount}</span>
        </h1>

        <div
          className="absolute top-0 right-0 w-[300px] h-full bg-cover"
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
