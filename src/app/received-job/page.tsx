'use client';

import { useEffect, useState } from 'react';
import Icon from "@/components/icon";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface Job {
    id: string;
    title: string;
    pages: number;
    price: number;
    task: string;
}

const ReceivedJobPage = () => {
    const [receivedJobs, setReceivedJobs] = useState<Job[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

    useEffect(() => {
        const selectedJobs = localStorage.getItem('selectedJobs');
        if (selectedJobs) {
            const jobs = JSON.parse(selectedJobs);
            setReceivedJobs(jobs);
            setFilteredJobs(jobs);
        }
    }, []);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = receivedJobs.filter(job =>
            job.id.toLowerCase().includes(query) ||
            job.title.toLowerCase().includes(query) ||
            job.pages.toString().includes(query) ||
            job.price.toLocaleString().toLowerCase().includes(query) ||
            job.task.toLowerCase().includes(query)
        );
        setFilteredJobs(filtered);
    }, [searchQuery, receivedJobs]);

    return (
        <div className="shadow-lg rounded-lg mt-5 ml-10 h-auto w-[95.8%] p-2">
            <div className="border-b-2 h-16 flex items-center">
                <Icon
                    idicon='M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z'
                    style='w-6 h-6'
                />
                <p className="ml-2">Danh Sách Công Việc Đã Nhận</p>
                <div className="ml-auto">
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Tìm kiếm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <SearchIcon className="text-gray-500 mr-1" />
                            )
                        }}
                    />
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <div key={job.id} className="bg-white border rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="text-gray-600">Mã Sách: {job.id}</p>
                            <p className="text-gray-600">Số Trang: {job.pages}</p>
                            <p className="text-gray-600">Giá: {job.price.toLocaleString()} VND</p>
                            <p className="text-gray-600">Nhiệm Vụ: {job.task}</p>
                        </div>
                    ))
                ) : (
                    <p>Chưa có công việc nào được nhận.</p>
                )}
            </div>
        </div>
    );
};

export default ReceivedJobPage;
