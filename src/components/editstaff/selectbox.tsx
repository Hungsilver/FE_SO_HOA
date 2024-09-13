'use client'

import React, { useState } from "react";
import Select, { MultiValue } from "react-select";

const options = [
  { value: "option1", label: "Admin" },
  { value: "option2", label: "Scan" },
  { value: "option3", label: "Thiết lập text" },
  { value: "option4", label: "Thiết lập audio" },
  { value: "option5", label: "Kiểm duyệt" },
];

const SelectBox = () => {
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
      <label className="block text-lg font-semibold">Chọn quyền:</label>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <div className="mt-4">
        <span>Lựa chọn:</span>{" "}
        {selectedOptions.map((option: any) => option.label).join(", ")}
      </div>
    </div>
  );
};

export default SelectBox;
