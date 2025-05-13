import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {  selectById } from "../../store/taskSelector";



const TaskView = () => {
  const { id } = useParams();
 
  const task = useSelector(state => selectById(state ,id));
  if (!task) return <div>Task not found</div>;


  return (
  <div className="border border-gray-200 p-5 flex flex-col items-baseline">
    <Link to="/" className="cursor-pointer">Home</Link>
    <h2 className="font-extrabold text-2xl m-4"> {task.title}</h2>
    <p><strong>Assigned To:</strong> {task.assignedTo}</p>
    <p><strong>Status:</strong> {task.status.key}</p>
    <p><strong>Priority:</strong> {task.priority.key}</p>
    <p><strong>Start Date:</strong> {task.startDate}</p>
    <p><strong>End Date:</strong> {task.endDate }</p>

    
  </div>)
}

export default TaskView;