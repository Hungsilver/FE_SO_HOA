import Image from "next/image";
import { DatePicker } from "../datepicker";

const InforUser = () => {
    return(
        <div className="border rounded-lg ml-10 h-auto shadow-xl w-[95%]">
            <div className="flex mt-5 justify-center items-center">
                <button>
                    <Image src='/image/avatar-bua.png' alt='avatar' width={100} height={100} className="rounded-full"/>
                </button>
            </div>
            <div className="w-full h-auto p-5 bg-white">
                <div className="flex justify-around">
                    <div className="w-1/4 ml-40">
                        <p className="ml-2">Họ tên</p>
                            <input placeholder="Họ tên" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                    <div className="w-1/4 mr-40">
                        <p className="ml-2">SĐT</p>
                        <input placeholder="SĐT" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="w-1/4 ml-40">
                        <p className="ml-2">CCCD/CMT</p>
                            <input placeholder="CCCD/CMT" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                    <div className="w-1/4 mr-40">
                        <p className="ml-2">Địa chỉ</p>
                        <input placeholder="Địa chỉ" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                </div>
                <div className="flex justify-around mt-10">
                    <div className="w-1/4 ml-40">
                            <p className="ml-2">Ngày sinh</p>
                            <DatePicker/>
                    </div>
                    <div className="w-1/4 mr-40">
                        <p className="ml-2">Số tài khoản ngân hàng</p>
                        <input placeholder="Số tài khoản ngân hàng" className="border rounded-lg w-full h-10 p-2 outline-none focus:outline-blue-500">
                        </input>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mb-10">
                <button className="w-28 mr-10 h-12 rounded-lg bg-blue-300">Cập nhật</button>
            </div>
        </div>
    );
}
export default InforUser;