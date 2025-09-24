

const Navber = () => {
    return (
        <div>
            <div class="navbar bg-base-100 flex justify-between h-[76px] items-center  shadow-sm">
  <div class="navbar-start p-5">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a class="btn btn-ghost text-xl font-semibold">CS — Ticket System</a>
  </div>
  <div class="navbar-end space-x-3 pr-4">
    <button>Home</button>
    <button>FAQ</button>
    <button>Changelog</button>
    <button>Blog</button>
<button>Download</button>
    <button>Contact</button>
    <a class="bg-blue-500"> + Next Ticket</a>
  </div>
</div>
        </div>
    );
};

export default Navber;