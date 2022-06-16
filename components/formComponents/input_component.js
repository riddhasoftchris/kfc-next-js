import React from "react";

export default function InputComponent({
  value,
  label,
  onChange,
  hintText,
  isPassword,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 tracking-wide">
        {label ?? "Label"}
      </label>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
        type={!isPassword ? "text" : "password"}
        placeholder={hintText ?? ''}
      />
    </div>
  );
}
