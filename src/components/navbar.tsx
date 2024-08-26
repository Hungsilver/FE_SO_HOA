'use client'

import Image from "next/image";
import Icon from "./icon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; 
import Drawer from "./drawer";
import { Bars3Icon } from '@heroicons/react/24/outline';  

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);  

    const toggleDrawer = () => {  
        setIsDrawerOpen(!isDrawerOpen);  
    };  
    
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
            <div className="py-3 bg-blue-300 shadow-lg flex justify-between items-center fixed top-0 left-0 right-0 w-full">
                <button onClick={toggleDrawer} className="p-2 focus:outline-none ml-5">  
                    <Bars3Icon className="h-6 w-6 text-black-600" />  
                </button>  
                <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
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
                        <div className="absolute right-0 mt-28 w-44 p-2 bg-white rounded-lg h-auto text-black transition-transform transform translate-x-0 shadow-lg z-50">
                            <div className="w-full">
                                <Link href="#" onClick={toggleUser}>
                                    <p>Thiết lâp tài khoản</p>
                                </Link>
                                <Link href="/login" onClick={toggleUser}>
                                    <p>Đăng xuất</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}
        </>
    );
};

export default Navbar;
