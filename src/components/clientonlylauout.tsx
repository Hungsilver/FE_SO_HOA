'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';

export default function ClientOnlyLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex w-full">
            <Sidebar isOpen={isSidebarOpen} toggleUser={toggleSidebar} />
            <main className='flex flex-1 mb-5'>{children}</main>
        </div>
    );
}
