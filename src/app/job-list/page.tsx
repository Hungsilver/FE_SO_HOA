'use client';

import JobList from "@/components/joblist/job";
import { useEffect, useState } from "react";
import data from "@/api/data.json";

const JobListPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(data.joblist);
    }, []);

    return (

        <div className="container mx-auto p-4">
            <JobList jobs={jobs} />
        </div>
    );
};

export default JobListPage;
