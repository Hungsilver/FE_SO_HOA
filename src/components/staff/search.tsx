import Button from "../button";
import data from "@/api/data.json";
import { Combobox } from "../combobox";


const SearchStaff = (props : any) => {
    return(
        <div className="w-full h-1/5 mt-20 p-5">
            <h1 className="text-2xl uppercase font-bold">Danh sách nhân viên</h1>
            <div className="flex mt-5 ml-10">
                <input placeholder="SĐT" onChange={props.sđt} className="bg-blue-50 rounded-lg h-10 w-1/4 p-2"/>
                <input placeholder="Họ tên" onChange={props.ten} className="bg-blue-50 rounded-lg ml-28 h-10 w-1/4 p-2"/>
                <Combobox/>
                <Button
                    namebtn = "Tìm kiếm"
                    style = "rounded-lg bg-blue-500 w-24 ml-20"
                />
            </div>
        </div>
    );
}
export default SearchStaff;