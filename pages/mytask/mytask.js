import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import TaskRow from "./taskRow";


const mytask = () => {
	const {user} = useContext(AuthContext)
	const [tasks,setTasks]=useState([])

	useEffect(()=>{
        fetch(`http://localhost:5000/addtask?email=${user?.email}`,{
           
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
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
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
				tasks.map(task=><TaskRow
                key={task._id}
                task={task}
               // handleDelete={handleDelete}
                //handleUpdate={handleUpdate}
               // handleInputChange={handleInputChange}
                //handleUpdateStatus={handleUpdateStatus}
                ></TaskRow>)
}
				
				
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default mytask;