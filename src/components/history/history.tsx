import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';

// Định nghĩa interface Job
interface Job {
    id: number;
    title: string;
    pages: number;
    task: string;
    status: 'Hoàn thành' | 'Chấp thuận' | 'Chờ kiểm duyệt' | 'Từ chối';
    updatedAt: Date;
}

// Tùy chỉnh Paper
const CustomPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    overflowX: 'auto',  // Thêm thuộc tính này để bảng có thể cuộn ngang khi cần thiết
}));

// Dữ liệu mẫu
const sampleJobs: Job[] = [
    { id: 1, title: 'Sách 1', pages: 200, task: 'Dịch thuật', status: 'Hoàn thành', updatedAt: new Date() },
    { id: 2, title: 'Sách 2', pages: 150, task: 'Biên tập', status: 'Chờ kiểm duyệt', updatedAt: new Date() },
    { id: 3, title: 'Sách 3', pages: 300, task: 'Sửa lỗi', status: 'Chấp thuận', updatedAt: new Date() },
    { id: 4, title: 'Sách 4', pages: 250, task: 'Dịch thuật', status: 'Từ chối', updatedAt: new Date() },
    { id: 5, title: 'Sách 5', pages: 180, task: 'Biên tập', status: 'Hoàn thành', updatedAt: new Date() },
    // Thêm dữ liệu khác nếu cần
];

const History: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>(sampleJobs);
    const [filteredHistory, setFilteredHistory] = useState<Job[]>(jobs);
    const [statusFilter, setStatusFilter] = useState<string>('');

    useEffect(() => {
        // Đoạn này sẽ được dùng để fetch dữ liệu từ API hoặc localStorage
        // setJobs(fetchedJobs);
        // setFilteredHistory(fetchedJobs);
    }, []);

    useEffect(() => {
        if (statusFilter === '') {
            setFilteredHistory(jobs);
        } else {
            setFilteredHistory(jobs.filter(job => job.status === statusFilter));
        }
    }, [statusFilter, jobs]);

    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-11/12 xl:w-10/12">
                <table className="min-w-full bg-white">
                    <CustomPaper>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value as string)}
                                label="Status"
                            >
                                <MenuItem value="">Tất cả</MenuItem>
                                <MenuItem value="Hoàn thành">Hoàn thành</MenuItem>
                                <MenuItem value="Chấp thuận">Chấp thuận</MenuItem>
                                <MenuItem value="Chờ kiểm duyệt">Chờ kiểm duyệt</MenuItem>
                                <MenuItem value="Từ chối">Từ chối</MenuItem>
                            </Select>
                        </FormControl>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <th className="w-1/4 px-4 py-2"><TableCell>Tên sách</TableCell></th>
                                        <th className="w-1/4 px-4 py-2"><TableCell>Số trang</TableCell></th>
                                        <th className="w-1/4 px-4 py-2"><TableCell>Nhiệm vụ</TableCell></th>
                                        <th className="w-1/4 px-4 py-2"><TableCell>Trạng thái</TableCell></th>
                                        <th className="w-1/4 px-4 py-2"><TableCell>Ngày cập nhật</TableCell></th>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredHistory.map((job) => (
                                        <TableRow key={job.id}>
                                            <TableCell>{job.title}</TableCell>
                                            <TableCell>{job.pages}</TableCell>
                                            <TableCell>{job.task}</TableCell>
                                            <TableCell>{job.status}</TableCell>
                                            <TableCell>{format(job.updatedAt, 'dd/MM/yyyy')}</TableCell> {/* Sử dụng date-fns để định dạng ngày tháng */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CustomPaper>
                </table>
            </div>
        </div>

    );
};

export default History;
