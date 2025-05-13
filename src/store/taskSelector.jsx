//import { createSelectorS } from "@reduxjs/toolkit";
import { tasksAdapter } from "./taskSlice";

export const {selectAll , selectById ,selectIds } = tasksAdapter.getSelectors(state => state.tasks)