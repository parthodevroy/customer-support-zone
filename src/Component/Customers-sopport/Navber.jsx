

const Navber = () => {
    return (
        <div>
            <div class="navbar bg-base-100 flex flex-col md:flex-row h-auto md:h-[76px] md:justify-between  items-center  shadow-sm">
  <div class="navbar-start p-2 md:p-12">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a class="btn btn-ghost text-xl font-semibold">CS—Ticket System</a>
  </div>
  <div class=" flex flex-col md:flex-row md:navbar-end space-x-3 pr-12">
    <button>Home</button>
    <button>FAQ</button>
    <button>Changelog</button>
    <button>Blog</button>
<button>Download</button>
    <button>Contact</button>
    <a class="bg-[#632EE3] text-white h-7 pl-1 rounded-xl w-28"> + Next Ticket</a>
  </div>
</div>
        </div>
    );
};

export default Navber;