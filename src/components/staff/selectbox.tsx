'use client'

import React, { useState } from "react";
import Select, { MultiValue } from "react-select";

// Dữ liệu mẫu cho select box
const options = [
  { value: "option1", label: "Admin" },
  { value: "option2", label: "Scan" },
  { value: "option3", label: "Thiết lập text" },
  { value: "option4", label: "Thiết lập audio" },
  { value: "option4", label: "Kiểm duyệt" },
];

const SelectBox = () => {
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="w-1/4 ml-28">
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Lựa chọn quyền"
      />
    </div>
  );
};

export default SelectBox;
