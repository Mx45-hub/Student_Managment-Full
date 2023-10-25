import HelloWorldView from 'Frontend/views/helloworld/HelloWorldView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
//import { Deletestudent } from './views/delete/Deletestudents';


const StudentView = lazy(async () => import('Frontend/views/Home/StudentView.js'));
const DeleteView = lazy(async () => import("Frontend/views/delete/Deletestudent.js"));
const UpdateView = lazy(async () => import("Frontend/views/update/updatestudent.js"));

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <StudentView />, handle: { title: 'Students' } },
      { path: '/Students', element: <StudentView />, handle: { title: 'Students' } },
      { path: '/updatestudent', element: <UpdateView />, handle: { title: 'Students' } },
      { path: '/delete', element: <DeleteView />, handle: { title: 'Students' } },
    ],
  },
];

export default createBrowserRouter(routes);
