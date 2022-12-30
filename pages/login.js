import {  GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';





const Login = () => {
    const [error,setError] = useState('')
    const {signIn,providerLogin} = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    const googleProvider = new GoogleAuthProvider()
    const router = useRouter();

    // const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
           router.push('/')
            // navigate(from,{replace: true})
           
            
            
        })
        .catch(error =>{
             console.error(error)
             setError(error.message)
            })
    }
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user
            router.push('/')
           
        //    navigate(from,{replace: true})
            
           
        })
        .catch(error => console.log(error))

    }
    return (
      
        <div className='flex lg:flex-row flex-col mx-16 items-center justify-center my-4'>
         {/* <div>
             <img className='w-3/4' src={image} alt="" />
         </div> */}
         <div className="md:w-1/2 w-full max-w-md p-4 rounded-md shadow sm:p-8 text-gray-900">
     <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
     <p className="text-sm text-center dark:text-gray-400">Dont have account?
         <Link href="/signup" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
     </p>
     <div className="my-6 space-y-4">
         <button onClick={ handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-sky-400">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
             </svg>
             <p>Login with Google</p>
         </button>
         
         
     </div>
     <div className="flex items-center w-full my-4">
         <hr className="w-full dark:text-gray-400"/>
         <p className="px-3 dark:text-gray-400">OR</p>
         <hr className="w-full dark:text-gray-400"/>
     </div>
     <form onSubmit={handleSubmit} className="space-y-8 ">
         <div className="space-y-4">
             <div className="space-y-2">
                 <label htmlFor="email" className="block text-sm">Email address</label>
                 <input type="email" name="email"  placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-400 focus:dark:border-sky-400" />
             </div>
             <div className="space-y-2">
                 <div className="flex justify-between">
                     <label htmlFor="password" className="text-sm">Password</label>
                     <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                 </div>
                 <input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-400 focus:dark:border-sky-400" />
             </div>
         </div>
         <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-purple-500 hover:bg-purple-700  text-white">Sign in</button>
         <p>{error}</p>
     </form>
 </div>
        </div>
     );
 };
 
 export default Login;