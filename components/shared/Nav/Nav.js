import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  
    return (
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
         <Link href="/"  aria-label="Todo"
            title="Todo"
            className="inline-flex items-center">
        
            
           
          
            <svg
              className="w-8 text-purple-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Todo
            </span>
         
         </Link>
          <ul className="flex items-center  space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                aria-label="home"
                title="home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
              >
                Home
              </Link>
            </li>
            {user?.uid &&
            <li>
              <Link
                href="/addtask"
                aria-label="Add Task"
                title="Add Task"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
              >
                Add Task
              </Link>
            </li>
}
{user?.uid &&
            <li>
              <Link href="/mytask/mytask" aria-label=" My Task"
                title=" My Task"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
              
                My Task
             
              </Link>
            </li>
}
{user?.uid &&
            <li>
              <Link
                href="/"
                aria-label="Completed Tasks"
                title="Completed Tasks"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
              >
                Completed Tasks
              </Link>
            </li>
}
            <li>
              {
                user?.uid ? (
                  <Link 
                  onClick={handleLogout}
                  href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign out"
                title="Sign out">
                   Logout
              </Link>
                )
                :(
                  <Link 
                  
                  href="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign In"
                title="Sign in">
                   SignIn
              </Link>
                )

              }
             
               
              
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Todo"
                        title="Todo"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-purple-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Todo
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                    <li>
                       <Link href="/" aria-label="home"
                          title="home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                       
                          Home
                        
                       </Link>
                      </li>
                      {user?.uid &&
                      <li>
                       <Link href="/addtask" aria-label="Add Task"
                          title="Add Task"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                       
                         Add Task
                        
                       </Link>
                      </li>
}
{user?.uid &&
                      <li>
                        <Link href="/mytask/mytask" aria-label="  My Task"
                          title="  My Task"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">

                       
                          My Task
                       
                        </Link>
                      </li>
}
{user?.uid &&
                      <li>
                        <a
                          href="/"
                          aria-label="Completed Tasks"
                          title="Completed Tasks"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          Completed Tasks
                        </a>
                      </li>
}
                      <li>
              {
                user?.uid ? (
                  <Link 
                  onClick={handleLogout}
                  href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign out"
                title="Sign out">
                   Logout
              </Link>
                )
                :(
                  <Link 
                  
                  href="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign In"
                title="Sign in">
                   SignIn
              </Link>
                )

              }
             
               
              
            </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };