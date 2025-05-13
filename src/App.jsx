
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


import { sendTaskData } from "./store/actionCreator";
import store from "./store/index";
import { lazy, Suspense } from "react";

const TASKEDIT =  lazy(()=> import('./component/task/TaskEdit'));
const TASKTABLE = lazy(()=> import('./component/task/TaskTable'));
const TASKVIEW = lazy(()=> import('./component/task/TaskView'));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<div>{'Please select valid route'}</div>,
    loader: async () => {
      await store.dispatch(sendTaskData());
      return null;
    },
    children: [
      {
        index: true,
        element: <Navigate to="/tasks" replace />
      },
      {
        path: '/tasks',
        element: <Suspense  fallback={<div>Loading</div>}><TASKTABLE/></Suspense>,
      },
      {
        path: "/tasks/:id",
        element: <Suspense  fallback={<div>Loading</div>}><TASKVIEW/></Suspense>,
      },
      {
        path: "/tasks/edit/:id",
        element: <Suspense  fallback={<div>Loading</div>}><TASKEDIT/></Suspense>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
