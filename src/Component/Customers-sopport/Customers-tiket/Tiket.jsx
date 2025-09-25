

const Tiket = ({tiket}) => {
    return (
        <div>
            
            <div class="card bg-white p-2 w-110 shadow-sm">
  <div class="card-body">
    <div className="flex justify-between">
        <h2 class="card-title font-semibold">{tiket.title}</h2>
        <p className="text-amber-200">{tiket.status}</p>
    </div>
    <p>{tiket.description}</p>
    <div class="card-actions justify-end">
     <div className="flex justify-between">
        <div className="flex gap-2">
            <h4>#{tiket.id}</h4>
            <p className="text-red-400">{tiket.priority}</p>

        </div>
        <div className="flex gap-2">
            <h4>{tiket.customer}</h4>
            <p>{tiket.createdAt}</p>

        </div>
     </div>
    </div>
  </div>
</div>
                
        </div>
    );
};

export default Tiket;