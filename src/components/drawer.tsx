import React from 'react';  
import Link from 'next/link';  
import { HomeIcon, BookOpenIcon, UsersIcon, UserPlusIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

const Drawer = ({ isOpen, onClose }: any) => {  
    return (  
        <div className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>  
            {/* Overlay */}
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300" /> 

            {/* Drawer */}
            <div 
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="h-full">
                    <h2 className="text-2xl text-center mt-5 font-bold text-gray-800 mb-6">SỔ HOÁ SÁCH</h2>  
                    <ul className="space-y-5 mt-20 border h-1/2 w-full">  
                        <li className="flex items-center ml-5 border space-x-3">
                            <HomeIcon className="h-5 w-5 text-gray-600" />
                            <Link href="/dashboard" className="text-gray-600 hover:text-gray-800 transition-colors">
                                Trang chủ
                            </Link>
                        </li>  
                        <li className="flex items-center ml-5 space-x-3">
                            <UsersIcon className="h-5 w-5 text-gray-600" />
                            <Link href="/staff" className="text-gray-600 hover:text-gray-800 transition-colors">
                                Nhân viên
                            </Link>
                        </li>  
                        <li className="flex items-center ml-5 space-x-3">
                            <PlusCircleIcon className="h-5 w-5 text-gray-600" />
                            <Link href="/add-book" className="text-gray-600 hover:text-gray-800 transition-colors">
                                Thêm mới sách
                            </Link>
                        </li>  
                    </ul>  
                </div>
            </div>
        </div>  
    );  
}  

export default Drawer;
