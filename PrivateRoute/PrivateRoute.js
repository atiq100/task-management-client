import { useRouter } from "next/router";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const router = useRouter()
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
      </div>
    }

   if(!user){
    return router.push('/login')
    // <Navigate to='/login' state={{from: location}} replace></Navigate>
   }
   return children;
};
   

export default PrivateRoute;