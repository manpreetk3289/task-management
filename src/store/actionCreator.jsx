import { taskSliceActions } from "./taskSlice";
import tasks from "./data";



export const sendTaskData = () => {
    return async (dispatch) => {
        dispatch(taskSliceActions.getTask());
        const taskData = await new Promise((resolve) =>
            setTimeout(() => resolve(tasks), 1000)
        );
        dispatch(taskSliceActions.taskSet(taskData));
    };
};

export const updateTaskData = (data, id) => {
    return async (dispatch) => {
        dispatch(taskSliceActions.taskUpdate({id, changes: {  ...data }}))
    };
};

export const deleteTaskData = (id) => {
    return async (dispatch) => {
         dispatch(taskSliceActions.taskDelete(id));
    };
};
