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
import CompanyRegistrationPage from './pages/CompanyRegistrationPage.jsx';
import CandidateProfilePage from './pages/CandidateProfilePage.jsx';
import CreateJobPage from './pages/CreateJobPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CompanyProfilePage from './pages/CompanyProfilePage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import CompanyRequestsPage from './pages/CompanyRequestsPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AddNewAdminPage from './pages/AddNewAdminPage.jsx';
import AdminSettingsPage from './pages/AdminSettingsPage.jsx';
import CompaniesPage from './pages/CompaniesPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin/add-new-admin",
    element: <AddNewAdminPage />,
  },
  {
    path: "/admin/company-requests",
    element: <CompanyRequestsPage />,
  },
  {
    path: "/admin/settings",
    element: <AdminSettingsPage />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
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
    path: "/register/company",
    element: <CompanyRegistrationPage />,
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
    path: "/post-job",
    element: <CreateJobPage />,
  },
  {
    path: "/my-jobs",
    element: <MyJobs />,
  },
  {
    path: "/my-jobs/:id",
    element: <JobCandidates />,
  },
  {
    path: "/candidates/:id",
    element: <CandidateProfilePage />,
  },
  {
    path: "/companies",
    element: <CompaniesPage />,
  },
  {
    path: "/companies/:id",
    element: <CompanyProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
