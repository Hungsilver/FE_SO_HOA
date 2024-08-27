'use client';

import { useState, useEffect } from 'react';
import Icon from "@/components/icon";


interface JobProps {
    jobs: Job[];
}
const JobList = ({ jobs }: JobProps) => {

    return (
        <div className="shadow-lg rounded-lg mt-5 ml-10 h-auto w-[95.8%] p-2">
            <div className="border-b-2 h-10 flex items-center">
                <Icon
                    idicon='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
                    style='w-6 h-6'
                />
                <p className="ml-2">Danh Sách Công Việc</p>
            </div>
            <div className="mt-4">
                {jobs.length > 0 ? (
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border-b-2 px-4 py-2 text-left">Mã Sách</th>
                                <th className="border-b-2 px-4 py-2 text-left">Tên Sách</th>
                                <th className="border-b-2 px-4 py-2 text-left">Số Trang</th>
                                <th className="border-b-2 px-4 py-2 text-left">Giá</th>
                                <th className="border-b-2 px-4 py-2 text-left">Nhiệm Vụ</th>
                                <th className="border-b-2 px-4 py-2 text-left">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id} className="bg-white">
                                    <td className="border-b-2 px-4 py-2">{job.id}</td>
                                    <td className="border-b-2 px-4 py-2">{job.title}</td>
                                    <td className="border-b-2 px-4 py-2">{job.pages}</td>
                                    <td className="border-b-2 px-4 py-2">{job.price.toLocaleString()} VND</td>
                                    <td className="border-b-2 px-4 py-2">{job.task}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Không có công việc nào.</p>
                )}
            </div>
        </div>
    );
};

export default JobList;
