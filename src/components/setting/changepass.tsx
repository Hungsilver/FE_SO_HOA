const ChangePass = () => {
    return(
        <div className="border rounded-lg ml-10 h-auto shadow-xl w-[95%]">
            <div className="w-full h-auto p-5 bg-white">
                <div className="flex justify-around">
                    <div className="w-1/4 ml-40">
                        <p className="ml-2">Email</p>
                            <input placeholder="Email" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                    <div className="w-1/4 mr-40">
                        <p className="ml-2">Tên tài khoản</p>
                        <input placeholder="Tên tài khoản" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <button className="w-40 mr-10 h-12 rounded-lg bg-blue-300">Đổi mật khẩu</button>
            </div>
        </div>
    );
}
export default ChangePass;