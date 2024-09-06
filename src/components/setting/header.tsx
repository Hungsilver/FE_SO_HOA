'use client'

import { useState } from "react";

const HeaderSetting = ({isActive , handleInfor , handleChange} : {isActive : boolean , handleInfor : () => void , handleChange : () => void}) => {
    return (
        <div className="mt-24 h-40 p-5 w-full">
            <h1 className="text-3xl">Thiết lập tài khoản</h1>
            <div className="flex w-full h-10 mt-11 p-5 justify-between">
                <button 
                    onClick={handleInfor} 
                    className={`ml-80 ${isActive ? 'text-blue-500' : 'text-black'}`}
                >
                    Thông tin cá nhân
                </button>
                <button 
                    onClick={handleChange} 
                    className={`mr-80 ${!isActive ? 'text-blue-500' : 'text-black'}`}
                >
                    Thông tin tài khoản
                </button>
            </div>
        </div>
    );
}

export default HeaderSetting;
