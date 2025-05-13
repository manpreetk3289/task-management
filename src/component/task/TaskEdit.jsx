import { useNavigate, useParams } from "react-router-dom";
import { tableHeadData } from "../../constant/tableHeader";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskData } from "../../store/actionCreator";
import { selectById } from "../../store/taskSelector";

const TaskEdit = () => {
   
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const task = useSelector(state => selectById(state ,id));

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const fdData = Object.fromEntries(fd.entries());
        const data = {};

        tableHeadData.forEach((field) => {

            const key = field.key;
            const value = fdData[key];

            if (field.list) {

                data[key] = field.list.filter(obj => obj.key === value)[0];

            } else {
                data[key] = value;
            }
        });


        dispatch(updateTaskData(data, id));
        e.target.reset();
        navigate('/tasks');
    };

    if (!task) return <div>Task not found</div>;


    return (
        <div>

            <form className="border border-gray-200 p-5 " onSubmit={handleSubmit}>
                {tableHeadData.map((d) => (

                    <div key={d.header} className="flex  ">
                        <label className="p-2 font-extrabold">{d.header} :</label>

                        {d.list ? (
                            <select name={d.key} defaultValue={task[d.key]?.key}>
                                {d.list.map((item) => (
                                    <option key={item.val} value={item.key}>
                                        {item.key}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input  name={d.key} defaultValue={task[d.key]} />
                        )}


                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TaskEdit;
