'use client'

import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import data from '@/api/data.json';

// Dữ liệu mẫu cho select box
const options = data.Rolldata.map((role, index) => ({
  value: `option${index + 1}`,
  label: role.name,
}));

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
        className="w-full"
        classNamePrefix="select"
        placeholder="Lựa chọn quyền"
      />
    </div>
  );
};

export default SelectBox;
