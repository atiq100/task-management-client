

const TaskRow = ({task}) => {
    const{title,postDate,image}=task
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					
					<td className="p-3">
                    <img alt="" className="w-16 h-16 rounded  dark:bg-gray-500 " src={image} />
					</td>
					<td className="p-3">
						<p className='text-lg mb-2'>{title}</p>
						<p>{postDate}</p>
					</td>
					
					
					<td className="p-3 ">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
    );
};

export default TaskRow;