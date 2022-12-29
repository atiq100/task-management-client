import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Hero = () => {
    const [isShown, setIsShown] = useState(false);
    const {user} = useContext(AuthContext) 
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.taskname.value;
    const email = user?.email

    const task = {
      title: serviceName,
      email,
      postDate:Date()
    };
    fetch("http://localhost:5000/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Task added successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

    return (
        <section className="bg-white text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leading-none sm:text-6xl">Your ultimate
                    
                </h1><span className="text-violet-400 text-3xl font-bold leading-none sm:text-6xl">Task handler</span> 
                <p className="mt-6 mb-8 text-lg sm:mb-12">Manage your daily task ,and make your life easy!!
                    
                </p>
                
                <div className="mb-4 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer"  onClick={handleClick} className="cursor-pointer px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Add Task</a>
                    {
                      user?.uid &&
                      <a rel="noopener noreferrer" href="" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">My Task</a>
                    }

                </div>
               
                {
                    isShown && user?.uid ?(
                    <form onSubmit={handleAddTask} className="flex flex-col items-center w-full mb-4 md:flex-row ">
            <input
              placeholder="Task name"
              required=""
              type="text"
              name='taskname'
              className="flex-grow w-full h-12 px-3 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="md:hidden block  items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md md:w-auto bg-violet-400 text-gray-900 hover:bg-violet-700 focus:shadow-outline focus:outline-none"
            >
              Save
            </button> 
          </form>) : (<p className={user?.uid ?'hidden' : 'text-gray-600 text-md'}>please<Link href='/login' className='text-blue-400'> login</Link> to add your task</p>
                )} 
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://i0.wp.com/getflowdotcom.wpcomstaging.com/wp-content/uploads/2020/06/task-management-workflow.jpg?fit=2000%2C1500&ssl=1" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default Hero;