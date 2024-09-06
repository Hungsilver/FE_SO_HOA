'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login : React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        router.push('/dashboard');
    }

    return (
            <div className="flex flex-1 justify-center items-center h-screen bg-gray-200">
                <div className="flex w-4/5 h-4/5 bg-white shadow-lg rounded-lg">  
                    <div className="flex-col w-1/2 bg-blue-400 text-white flex items-center justify-center">  
                        <Image src="/image/login_cover.83315090da4d28525c87.png" alt="Login Cover" width={300} height={300}/>
                        <h1 className="text-4xl font-bold">Hệ thống số hóa sách</h1>  
                    </div>  
                    <div className="flex-1 flex flex-col justify-center items-center p-16">  
                        <h2 className="text-2xl mb-6 font-bold">Đăng nhập</h2>  
                        <input  
                            type="text"  
                            placeholder="Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mb-4 p-2 border-2 border-gray-300 hover:border-blue-300 rounded w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none"  
                              
                            />  

                        <input  
                            type="password"  
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-4 p-2 border-2 border-gray-300 hover:border-blue-300 rounded w-full focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none"  
                            required
                            />
                        {error && (
                            <p className="text-red-500">Sai tên tài khoản hoặc mật khẩu</p>
                        )}
                        <div className="flex w-full justify-between mb-4 items-center">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />  
                                <label>Ghi nhớ</label>
                            </div>
                            <Link href="">
                                <p className="text-blue-500">Quên mật khẩu?</p>
                            </Link>
                        </div>  
                        <button onClick={handleLogin} className="bg-blue-600 text-white py-3 px-10 rounded-lg hover:bg-blue-500">  
                            Đăng nhập  
                        </button>  
                    </div>  
                </div>  
            </div>
    );
}

export default Login;
