
import victorimg from "../../assets/vector1.png";


const Bodyparent = ({tiketadd}) => {
  return (
    <div className="h-[370px] bg-gray-100 w-full flex items-center justify-center gap-5 ">
      
      <div className="relative w-[600px] h-[250px] border-2 border-amber-200 bg-[#632EE3] overflow-hidden">

        <div
          className="absolute top-0 left-0 w-[300px] h-full bg-cover"
          style={{ backgroundImage: `url(${victorimg})` }}
        ></div>
        <h1 className="text-white text-2xl font-bold text-center pt-[70px] relative z-10">
          <h1>In-Progress</h1>
         {tiketadd}
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

      <div className="relative w-[600px] h-[250px] border-2 border-amber-200 bg-[#632EE3] overflow-hidden">
        
        <div
          className="absolute top-0 left-0 w-[300px] h-full bg-cover"
          style={{ backgroundImage: `url(${victorimg})` }}
        ></div>

        <h1 className="text-white text-2xl font-bold text-center pt-[70px] relative z-10">
          hellow
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
