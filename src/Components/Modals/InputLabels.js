// import { MultiSelect, Select } from "@mantine/core";
import React from "react";
import { MultiSelect } from "@mantine/core";

const data = [
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "copywriting", label: "Copy Writing" },
  { value: "ui/ux", label: "UI/UX" },
  { value: "frontend", label: "Front End" },
  { value: "backend", label: "Back End" },
  { value: "qa", label: "QA" },
];

function InputLabels() {
  return (
    <MultiSelect
      sx={() => ({ flex: 1 })}
      zIndex={9999}
      // maxSelectedValues={1}
      data={data}
      placeholder="Pick label"
    />
  );
}

export default InputLabels;
