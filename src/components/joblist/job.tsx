'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Icon from "@/components/icon";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface Job {
    id: string;
    title: string;
    pages: number;
    price: number;
    task: string;
    imageUrl: string;
    description?: string;
}

interface JobProps {
    jobs: Job[];
}

const StyledJobTitle = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    color: theme.palette.primary.main,
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const JobList = ({ jobs }: JobProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
    const [selectedJobs, setSelectedJobs] = useState<Set<string>>(new Set());
    const [allSelected, setAllSelected] = useState(false);
    const [popoverAnchor, setPopoverAnchor] = useState<null | HTMLElement>(null);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [openLightbox, setOpenLightbox] = useState(false);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = jobs.filter(job =>
            job.id.toLowerCase().includes(query) ||
            job.title.toLowerCase().includes(query) ||
            job.pages.toString().includes(query) ||
            job.price.toLocaleString().toLowerCase().includes(query) ||
            job.task.toLowerCase().includes(query)
        );
        setFilteredJobs(filtered);
    }, [searchQuery, jobs]);

    useEffect(() => {
        if (filteredJobs.length > 0) {
            setAllSelected(filteredJobs.every(job => selectedJobs.has(job.id)));
        }
    }, [selectedJobs, filteredJobs]);

    const handleSelectAll = () => {
        if (allSelected) {
            setSelectedJobs(new Set());
        } else {
            setSelectedJobs(new Set(filteredJobs.map(job => job.id)));
        }
        setAllSelected(!allSelected);
    };

    const handleCheckboxChange = (jobId: string) => {
        const updatedSelectedJobs = new Set(selectedJobs);
        if (updatedSelectedJobs.has(jobId)) {
            updatedSelectedJobs.delete(jobId);
        } else {
            updatedSelectedJobs.add(jobId);
        }
        setSelectedJobs(updatedSelectedJobs);
    };

    const handlePopoverClick = (event: MouseEvent<HTMLDivElement>, job: Job) => {
        setPopoverAnchor(event.currentTarget);
        setSelectedJob(job);
    };

    const handlePopoverClose = () => {
        setPopoverAnchor(null);
        setSelectedJob(null);
    };

    const handleLightboxOpen = (job: Job) => {
        setSelectedJob(job);
        setOpenLightbox(true);
    };

    const handleLightboxClose = () => {
        setOpenLightbox(false);
        setSelectedJob(null);
    };

    const openPopover = Boolean(popoverAnchor);
    const popoverId = openPopover ? 'simple-popover' : undefined;

    return (
        <div className="shadow-lg rounded-lg mt-5 ml-10 h-auto w-[95.8%] p-2">
            <div className="border-b-2 h-16 flex items-center">
                <Icon
                    idicon='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
                    style='w-6 h-6'
                />
                <p className="ml-2 text-xl font-bold">Danh Sách Công Việc</p>
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
            <div className="mt-4">
                {filteredJobs.length > 0 ? (
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border-b-2 px-4 py-2 text-left">
                                    <input
                                        type="checkbox"
                                        checked={allSelected}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border-b-2 px-4 py-2 text-left">Mã Sách</th>
                                <th className="border-b-2 px-4 py-2 text-left">Tên Sách</th>
                                <th className="border-b-2 px-4 py-2 text-left">Số Trang</th>
                                <th className="border-b-2 px-4 py-2 text-left">Giá</th>
                                <th className="border-b-2 px-4 py-2 text-left">Nhiệm Vụ</th>
                                <th className="border-b-2 px-4 py-2 text-left">Chi Tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.map((job) => (
                                <tr key={job.id} className="bg-white">
                                    <td className="border-b-2 px-4 py-2 text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedJobs.has(job.id)}
                                            onChange={() => handleCheckboxChange(job.id)}
                                        />
                                    </td>
                                    <td className="border-b-2 px-4 py-2">{job.id}</td>
                                    <td className="border-b-2 px-4 py-2">
                                        <StyledJobTitle
                                            onClick={(e) => handlePopoverClick(e, job)}
                                        >
                                            {job.title}
                                        </StyledJobTitle>
                                    </td>
                                    <td className="border-b-2 px-4 py-2">{job.pages}</td>
                                    <td className="border-b-2 px-4 py-2">{job.price.toLocaleString()} VND</td>
                                    <td className="border-b-2 px-4 py-2">{job.task}</td>
                                    <td className="border-b-2 px-4 py-2 text-center">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleLightboxOpen(job)}
                                        >
                                            Xem
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Không có công việc nào.</p>
                )}
            </div>
            <div className="flex justify-end space-x-4 mt-4">
                <Button
                    variant="contained"
                    color="error"
                    className="rounded-full px-4 py-2"
                    onClick={handleSelectAll}
                >
                    {allSelected ? 'Hủy Chọn Tất Cả' : 'Chọn Tất Cả'}
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    className="rounded-full px-4 py-2"
                >
                    Hoàn tất
                </Button>
            </div>
            <Popover
                id={popoverId}
                open={openPopover}
                anchorEl={popoverAnchor}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {selectedJob && (
                    <div className="p-4 flex flex-col space-y-2">
                        <img
                            src={selectedJob.imageUrl}
                            alt={selectedJob.title}
                            className="w-full h-auto"
                        />
                        <Typography variant="h6">{selectedJob.title}</Typography>
                        <Typography variant="body2">Mã Sách: {selectedJob.id}</Typography>
                        <Typography variant="body2">Số Trang: {selectedJob.pages}</Typography>
                        <Typography variant="body2">Giá: {selectedJob.price.toLocaleString()} VND</Typography>
                        <Typography variant="body2">Nhiệm Vụ: {selectedJob.task}</Typography>
                    </div>
                )}
            </Popover>
            <Dialog
                open={openLightbox}
                onClose={handleLightboxClose}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>{selectedJob?.title}</DialogTitle>
                <DialogContent>
                    {selectedJob?.description ? (
                        <div>
                            <Typography variant="body1">{selectedJob.description}</Typography>
                            <img src={selectedJob.imageUrl} alt={selectedJob?.title} className="mt-2 w-full h-auto" />
                        </div>
                    ) : (
                        <Typography variant="body1">Chưa có thông tin chi tiết.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLightboxClose} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={() => { /* Xử lý nhận việc */ }} color="primary">
                        Nhận việc
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default JobList;
