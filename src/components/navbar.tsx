'use client'

import Image from "next/image";
import Icon from "./icon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const pathname = usePathname();  
    
    useEffect(() => {
        setHydrated(true);
    },[]);

    const toggleUser = () => {
        setIsOpen(!isOpen);
    };

    if (!hydrated) {
        return null;
    }

    return (
        <>
        {pathname !== '/login' && (
            <div className="py-3 shadow-lg flex justify-between items-center">
                <Icon
                idicon='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                style='ml-5 h-6 w-6'
                />
                <div className="mx-5 flex items-center space-x-3">
                    <button className="size-6">
                        <Icon
                        idicon='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5'
                        style='h-6 w-6'
                        />
                        </button>
                        <p>Hi,VELT</p>
                        <button onClick={toggleUser} className='flex items-center'>
                        <Image src="/image/anh-avatar.png" alt="avatar" width={40} height={40} className="rounded-full border-r-4 border-gray-500"/>
                        <Icon
                            idicon='m19.5 8.25-7.5 7.5-7.5-7.5'
                            style='h-6 w-6'
                        />
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-20 w-40 p-2 bg-white rounded-lg h-auto text-black transition-transform transform translate-x-0 shadow-lg z-50">
                            <Link href="/login" onClick={toggleUser}>
                                Đăng xuất
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )}
        </>
    );
};

export default Navbar;
