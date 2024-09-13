'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`h-screen bg-blue-400 pt-8 text-white ${isOpen ? 'w-64' : 'w-20'} relative duration-300`}>
        <button
          className="absolute right-3 top-9 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FontAwesomeIcon icon={faCircleXmark}/> : <FontAwesomeIcon icon={faArrowRight}/>}
        </button>
        <div className="mt-20 flex flex-col gap-4">
        <Link href="/">
          <div className="flex h-10 w-full items-center gap-4 rounded-lg p-5 hover:bg-white hover:text-black">
            <div className='ml-2'>
                <FontAwesomeIcon icon={faHome} />
                {isOpen && <span className='ml-2'>Trang chủ</span>}
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-10 w-full items-center gap-4 rounded-lg p-5 hover:bg-white hover:text-black">
            <div className='ml-2'>
                <FontAwesomeIcon icon={faUser} />
                {isOpen && <span className='ml-2'>Hồ sơ</span>}
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-10 w-full items-center gap-4 rounded-lg p-5 hover:bg-white hover:text-black">
            <div className='ml-2'>
                <FontAwesomeIcon icon={faCog} />
                {isOpen && <span className='ml-2'>Cài đặt</span>}
            </div>
          </div>
        </Link>
        </div>
      </div>
      <div className="flex-1 p-7">
        <h1 className="text-2xl font-semibold">Nội dung chính</h1>
        <p>Đây là khu vực nội dung chính.</p>
      </div>
    </div>
  );
};

export default Sidebar;