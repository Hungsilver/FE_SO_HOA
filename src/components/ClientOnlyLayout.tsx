'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

export default function ClientOnlyLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex w-full">
            <Navbar />
            <div className='flex mt-[60px]'>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <main>{children}</main>
            </div>
        </div>
    );
}
