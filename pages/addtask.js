import  { useContext} from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
const AddTask = () => {
    const {user} = useContext(AuthContext) 
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const email = user?.email
    const imageHostKey = process.env.NEXT_PUBLIC_imgbb_key;
    const handleAddTask = (data) => {
        const image = data.img[0];
        const formData = new FormData()
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
              const task={
                title: data.taskName,
                email,
                image: imgData.data.url,
                postDate:Date()
                
              } 
              
              
            fetch('http://localhost:5000/addtask',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    
                },
                body:JSON.stringify(task)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.success('task is added successfully')
                router.push('/mytask/mytask')
                
            })
            }
           
        })
      };
    
    
   
    return (
        <section className="max-w-4xl p-6 mx-auto my-4 bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add your daily task</h2>

    <form onSubmit={handleSubmit(handleAddTask)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" for="taskname">Task name</label>
                <input {...register("taskName", { required: "Task Name is required" })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="taskimage">Task image</label>
                <input {...register("img", { required: "Photo is required" })} type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            

            
        </div>

        <div className="flex justify-end mt-6">
            <input type='submit' value='Save' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-purple-500 hover:bg-purple-700  rounded-md  focus:outline-none focus:bg-purple-600"/>
        </div>
    </form>
</section>
    );
};

export default AddTask;