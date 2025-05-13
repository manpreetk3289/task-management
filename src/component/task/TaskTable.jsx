// ▪ Title
// ▪ Assigned To (Show email address )
// ▪ Status (Has four options – Open, In-Progress, Under-review, Done )
// ▪ Priority (Has three options – Low, Medium, High)
// ▪ Start Date (In DDMMMYYYY format like 01Jan2024)
// ▪ End Date (In same format as above but will be empty for all task which are
// not done

import { useSelector } from "react-redux";
import { tableHeadData } from "../../constant/tableHeader";
import { useNavigate } from "react-router-dom";
import ConfirmationBox from "../common/confirmationBox";
import { useRef, useState } from "react";
import { deleteTaskData } from "../../store/actionCreator";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ArrowUp from "../../common/ArrowUp";
import ArrowDown from "../../common/ArrowDown";
import { taskSelctor } from "../../store/taskSlice";


const TaskTable = () => {
    const tableData = useSelector((state) =>
        state.tasks ? taskSelctor.selectAll(state) : []
      );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dialogRef = useRef();
    const [taskData, setTaskData] = useState(tableData);
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    useEffect(() => {
        setTaskData(tableData);
      }, [tableData]);
      
    const sortData = (order, key) => {
        const _taskData = [...taskData];

        _taskData.sort((a, b) => {
            const valA = a[key].val ?? a[key];
            const valB = b[key].val ?? b[key];
            const typeValA = typeof valA;
            const typeValB = typeof valB;

            if (typeValA === "string" && typeValA === "string") {
                return order === "asc"
                    ? valA.localeCompare(valB)
                    : valB.localeCompare(valA);
            } else if (typeValA === "number" && typeValB === "number") {
                return order === "asc" ? valA - valB : valB - valA;
            } else {
                return 0;
            }
        });

        setTaskData(_taskData);
    };

    const deleteHandler = () => {
        if (!selectedTaskId) return;
        dispatch(deleteTaskData(selectedTaskId));
        dialogRef.current.close();
    };

    return (
       
        <>
            <table className="w-full border border-gray-400">
                <thead>
                    <tr>
                        {tableHeadData.map((data) => (
                            <th className="border gap-2" key={data.header}>
                                <div className="flex justify-around gap-3 p-3 align-baseline cursor-pointer">
                                    {data.header}

                                    {data.sort && (
                                        <>
                                            <ArrowUp onClick={() => sortData("asc", data.key)} />

                                            <ArrowDown onClick={() => sortData("desc", data.key)} />
                                        </>
                                    )}
                                </div>
                            </th>
                        ))}
                        <th className="border p-2">Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {taskData.map((tData) => (
                       
                        <tr key={tData.id} onClick={() => navigate(`/tasks/${tData.id}`)}>
                            
                            <td className="px-2 border">{tData.id}</td>
                            <td className="px-2 border">{tData.assignedTo}</td>
                            <td className="px-2 border">{tData.status.key ?? tData.status}</td>
                            <td className="px-2 border">{tData.priority.key}</td>
                            <td className="px-2 border">{tData.startDate}</td>
                            <td className="px-2 border">{tData.endDate}</td>
                            <td
                                className="gap-2 p-2 border"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button onClick={() => navigate(`/tasks/edit/${tData.id}`)}>
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedTaskId(tData.id);
                                        dialogRef.current.showModal();
                                    }}
                                >
                                    Delete
                                </button>

                            </td>
                        </tr>


                    ))}


                </tbody>

            </table>
            <ConfirmationBox
                dialogRef={dialogRef}
                onClickHandler={() => deleteHandler()}
            />
        </>
    );
};

export default TaskTable;
