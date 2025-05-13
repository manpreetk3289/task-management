import { createSlice  ,createEntityAdapter } from "@reduxjs/toolkit";

export const tasksAdapter = createEntityAdapter();

const taskSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState({ 
    loading: false}),
  reducers: {
    getTask: (state) => {
      return { ...state, loading: true };
    },
    setTask: (state, action) => {
      tasksAdapter.setAll(state, action.payload); 
      state.loading = false;
    },
    updateTask: (state, actions) => {
      return { ...state, taskData: actions.payload };
    },
    taskUpdate: tasksAdapter.updateOne,
    taskDelete: tasksAdapter.removeOne,
    taskSet: tasksAdapter.setAll,

  },
});

export const taskSliceActions = taskSlice.actions;
export const taskSelctor = tasksAdapter.getSelectors(state => state.tasks);
export default taskSlice.reducer;
