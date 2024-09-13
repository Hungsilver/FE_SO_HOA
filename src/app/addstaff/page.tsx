import Button from "@/components/button";
import { DatePicker } from "@/components/datepicker";
import SelectBox from "@/components/editstaff/selectbox";

const EditStaff = () => {
    return(
        <div className="w-full h-screen">
            <div className="border shadow-lg w-[95%] h-auto ml-12 mt-28 rounded-lg">
                <div className="h-20 rounded-t-lg flex justify-center items-center bg-blue-300">
                    <h2 className="text-center font-semibold text-2xl">Thêm mới nhân viên</h2>
                </div>
                <div className="w-full h-full p-5 bg-white">
                    <div className="flex justify-around">
                        <div className="w-1/4">
                            <p className="ml-2">Họ tên</p>
                                <input placeholder="Họ tên" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Ngày sinh</p>
                            <DatePicker/>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Số điện thoại</p>
                                <input placeholder="SĐT" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-around mt-16">
                        <div className="w-1/4">
                            <p className="ml-2">Email</p>
                            <input placeholder="Email" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">CCCD/CMT</p>
                            <input placeholder="CCCD/CMT" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Địa chỉ</p>
                            <input placeholder="Địa chỉ" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-around mt-16">
                        <div className="w-1/4">
                            <p className="ml-2">Tên ngân hàng</p>
                            <input placeholder="Tên ngân hàng" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Số tài khoản ngân hàng</p>
                            <input placeholder="Số tài khoản ngân hàng" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Mã số thuế</p>
                            <input placeholder="Mã số thuế" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                    </div>
                    <div className="mt-10">
                        <span>Thông tin tài khoản:</span>
                        <div className="flex justify-around mt-10">
                        <div className="w-1/4">
                            <p className="ml-2">Tên tài khoản</p>
                            <input placeholder="Tên tài khoản" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Mật khẩu</p>
                            <input placeholder="Mật khẩu" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Xác nhận mật khẩu</p>
                            <input placeholder="Xác nhận mật khẩu" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                            </input>
                        </div>
                    </div>
                    </div>
                    <SelectBox/>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="border text-white rounded-lg h-12 w-28 mt-10 mr-10 bg-blue-400">
                    Thêm mới
                </button>
            </div>
        </div>
    );
}
export default EditStaff;