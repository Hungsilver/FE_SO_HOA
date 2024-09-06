'use client'

import SearchStaff from "@/components/staff/search";
import StaffTable from "@/components/staff/stafftable";
import { useEffect, useState } from "react";
import data from '@/api/data.json';

const Staff = () => {

    const [users , setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers(data.Userdata);
    }, []);

    return(
        <div className="w-full h-screen">
            <SearchStaff/>
            <StaffTable users = {users}/>
        </div>
    );
}
export default Staff;