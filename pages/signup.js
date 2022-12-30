import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';



import { AuthContext } from '../context/AuthProvider/AuthProvider';



const SignUp = () => {
  
    const [error, setError] = useState("");
    
    

    const googleProvider = new GoogleAuthProvider()
    

    const router= useRouter();

    const { createUser,providerLogin,updateUserProfile} = useContext(AuthContext);
  
    const handleSubmit = (event) => {
      event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    // const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateProfile(name)
       
        toast.success('Registration successfully.Please Login')
        console.log(user);
        form.reset();
        setError("");
        router.push('/login')
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateProfile = (name) =>{
    const profile = {
        displayName : name,
        
    }
        updateUserProfile(profile)
        .then( ()=>{})
        .catch(error=>console.log(error))
  }
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user
           
           router.push('/')
            
           
        })
        .catch(error => console.log(error))

    }

    return (
        <div className='flex lg:flex-row flex-col mx-16 items-center justify-center my-4'>
     
        <div className="md:w-1/2 w-full max-w-md p-4 rounded-md shadow sm:p-8  dark:text-gray-900">
	<h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
	<p className="text-sm text-center dark:text-gray-400">Already have an account?
		<Link href="/login" rel="noopener noreferrer" className="focus:underline hover:underline">Sign in here</Link>
	</p>
	<div className="my-6 space-y-4">
		<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-sky-400">
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
	<form onSubmit={handleSubmit}  className="space-y-8 ">
		<div className="space-y-4">
        <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Your Name</label>
				<input type="text" name="name"  placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-400 focus:dark:border-sky-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-400 focus:dark:border-sky-400" />
			</div>
            
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-400 focus:dark:border-sky-400" />
			</div>
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-purple-500 hover:bg-purple-700  text-white">Sign up</button>
        <p>{error}</p>
	</form>
</div>
       </div>
    );
};

export default SignUp;