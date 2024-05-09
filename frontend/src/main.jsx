import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import JobDetails from './pages/JobDetails.jsx';
import MyJobs from './pages/MyJobs.jsx';
import JobCandidates from './pages/JobCandidates.jsx';
import RegistrationChoicePage from './pages/RegistrationChoicePage.jsx';
import CandidateRegistrationPage from './pages/CandidateRegistrationPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegistrationChoicePage />,
  },
  {
    path: "/register/candidate",
    element: <CandidateRegistrationPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetails />,
  },
  {
    path: "/my-jobs",
    element: <MyJobs />,
  },
  {
    path: "/my-jobs/:id",
    element: <JobCandidates />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
