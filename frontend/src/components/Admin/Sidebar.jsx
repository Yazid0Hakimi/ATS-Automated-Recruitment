import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="bg-[#2D82B7] text-white h-screen w-80">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
                <ul className="space-y-2">
                    <li>
                        <Link to="/admin/dashboard" className="block py-2 px-4 hover:bg-[#1D6A9C]">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/company-requests" className="block py-2 px-4 hover:bg-[#1D6A9C]">Company Management</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-new-admin" className="block py-2 px-4 hover:bg-[#1D6A9C]">Add New Admin</Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className="block py-2 px-4 hover:bg-[#1D6A9C]">Settings</Link>
                    </li>
                    <li>
                        <Link to="/admin/sign-out" className="block py-2 px-4 hover:bg-[#1D6A9C]">Sign Out</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar