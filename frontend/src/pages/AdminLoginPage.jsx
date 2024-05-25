import React from 'react'

const AdminLoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl mb-4 text-center">Admin Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLoginPage