import cprLogo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="w-full py-5 transition-all duration-500 bg-slate-50 border-b border-solid border-indigo-100">
      <div className="xl:px-28 lg:px-14 px-10">
        <div className="w-full flex justify-between flex-col lg:flex-row">
          <div className="flex justify-between lg:flex-row">
            <a href="/" className="flex items-center">
              <img className="w-40 h-18" src={cprLogo} alt="CPR" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:pl-11 " id="navbar-default">
            <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
              <li>
                <a
                  href="/"
                  className="mb-2 px-3 block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="mb-2 xl:px-3 px-0 break-keep block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="mb-2 xl:px-3 px-0 break-keep block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="mb-2 xl:px-3 px-0 break-keep block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center justify-center  xl:ml-14 ml-2 gap-x-5">
              <button className="w-20 h-11 text-white text-sm font-semibold leading-5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full">
                Login{" "}
              </button>
              <button className="w-24 h-11 rounded-full bg-gray-900 hover:bg-gray-700 transition-all duration-700 shadow-sm text-white text-sm font-semibold leading-5">
                Sign up{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
