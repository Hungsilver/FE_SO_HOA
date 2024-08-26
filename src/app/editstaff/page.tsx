import Button from "@/components/button";
import { DatePicker } from "@/components/datepicker";
import SelectBox from "@/components/editstaff/selectbox";

const EditStaff = () => {
    return(
        <div className="w-full h-full">
            <h1 className="mt-20 ml-10 font-bold uppercase text-2xl">
                Cập nhật thông tin nhân viên
            </h1>
            <div className="border shadow-lg w-[95%] h-auto ml-12 mt-10 rounded-lg">
                <div className="h-20 rounded-t-lg flex justify-center items-center bg-blue-300">
                    <h2 className="text-center font-semibold text-2xl">Thông tin cá nhân</h2>
                </div>
                <div className="w-full h-full p-5 bg-white">
                    <div className="flex justify-around">
                        <div className="w-1/4">
                            <p className="ml-2">Họ tên</p>
                                <input placeholder="Họ tên" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Ngày sinh</p>
                            <DatePicker/>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Số điện thoại</p>
                                <input placeholder="SĐT" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-around mt-16">
                        <div className="w-1/4">
                            <p className="ml-2">Email</p>
                            <input placeholder="Email" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">CCCD/CMT</p>
                            <input placeholder="CCCD/CMT" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Địa chỉ</p>
                            <input placeholder="Địa chỉ" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-around mt-16">
                        <div className="w-1/4">
                            <p className="ml-2">Tên ngân hàng</p>
                            <input placeholder="Tên ngân hàng" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Số tài khoản ngân hàng</p>
                            <input placeholder="Số tài khoản ngân hàng" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                        <div className="w-1/4">
                            <p className="ml-2">Mã số thuế</p>
                            <input placeholder="Mã số thuế" className="border rounded-lg w-full h-10 p-2">
                            </input>
                        </div>
                    </div>
                    <SelectBox/>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="border text-white rounded-lg h-12 w-28 mt-10 mr-10 bg-blue-400">
                    Cập nhật
                </button>
            </div>
        </div>
    );
}
export default EditStaff;