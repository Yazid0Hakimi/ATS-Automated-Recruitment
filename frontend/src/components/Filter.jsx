import React, { useState } from 'react'

const Filter = ({onFilter}) => {
    const [filters, setFilters] = useState({
        search: '',
        jobType: '',
        domain: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex space-x-4">
                <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleChange}
                placeholder="Search..."
                className="px-4 py-2 border rounded outline-none w-full"
                />
                <select
                name="jobType"
                value={filters.jobType}
                onChange={handleChange}
                className="px-4 py-2 border rounded outline-none"
                >
                    <option value="">All Types</option>
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                </select>
                <select
                name="domain"
                value={filters.domain}
                onChange={handleChange}
                className="px-4 py-2 border rounded outline-none"
                >
                    <option value="">All Domains</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                </select>
                <button type="submit" className="px-4 py-2 bg-[#2D82B7] text-white rounded">Filter</button>
            </div>
        </form>
    )
}

export default Filter