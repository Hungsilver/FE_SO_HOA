'use client'

import ChangePass from "@/components/setting/changepass";
import HeaderSetting from "@/components/setting/header";
import InforUser from "@/components/setting/inforuser";
import { useState } from "react";

const SettingUser = () => {

    const [isActive, setActive] = useState(true);

    const handleInfor = () => {
        setActive(true);
    }

    const handleChange = () => {
        setActive(false);
    }

    return(
        <div className="w-full h-full">
            <HeaderSetting isActive = {isActive} handleInfor={handleInfor} handleChange={handleChange}/>
            {isActive ? (
                <InforUser/>
            ) : (
                <ChangePass/>
            )}
        </div>
    );
}
export default SettingUser;