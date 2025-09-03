import { NavLink } from "react-router";

function Footer() {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="flex justify-between items-center">
        <NavLink to="/">
          <h1 className="font-bold text-lg font-mono uppercase text-white">Mini E-commerce</h1>
        </NavLink>
        
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        </button>
        
        <div id="dropdown" class="z-10 hidden bg-white text-center divide-y divide-gray-200 rounded-lg shadow-sm w-32">
          <span class="block px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg">Entrar</span>
          <span class="block px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg">Cadastrar</span>
        </div>
      </nav>
    </header>
  )
}

export default Footer;