import { useState } from "react";
import { RadioGroupContext } from "./context";
import { Option } from "./Option";
import { Details } from "./Details";

export function RadioGroup({ name, onChange, children }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const contextValue = {
    name,
    selectedValue,
    onChange: handleChange,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}

RadioGroup.Option = Option;
RadioGroup.Details = Details;
