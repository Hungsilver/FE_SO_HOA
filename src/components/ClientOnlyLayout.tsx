'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';

export default function ClientOnlyLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleUser = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex w-full">
            <Sidebar isOpen={isOpen} toggleUser={toggleUser} />
            <main className="flex flex-1 mt-8">{children}</main>
        </div>
    );
}
