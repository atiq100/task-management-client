import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import TaskRowNew from '../../components/TaskRowNew/TaskRowNew'
import { Fragment } from "react";

const mytask = () => {
	const {user} = useContext(AuthContext)
	const [tasks,setTasks]=useState([])
    

	useEffect(()=>{
        fetch(`https://task-management-server-xi.vercel.app/addtask?email=${user?.email}`,{
           
        })
        .then(res=>{
           
            return res.json()
        })
        .then(data=>{
            setTasks(data)
            
            
        })
    },[user?.email])
    return (
        <div>
            {tasks.length < 0 ? <p>You have no tasks added</p> :
            <div className="container my-4 p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-500">My tasks</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					
					<th className="p-3">Image</th>
					<th className="p-3">Task Name</th>
					
					
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				
			{
				tasks?.map(task=><TaskRowNew
                key={task?._id}
                task={task}
               // handleDelete={handleDelete}
                //handleUpdate={handleUpdate}
               // handleInputChange={handleInputChange}
                //handleUpdateStatus={handleUpdateStatus}
                ></TaskRowNew>)
}
				
				
			</tbody>
		</table>
	</div>
</div>}
        </div>
    );
};

export default mytask;