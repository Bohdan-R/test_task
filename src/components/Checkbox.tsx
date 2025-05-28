import { FC } from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors duration-200
          ${
            checked
              ? "bg-gray-700 border-gray-700"
              : "bg-zinc-800 border-zinc-500"
          }
        `}
      >
        <svg
          className={`w-3 h-3 text-white transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {label && <span className="ml-2 text-white">{label}</span>}
    </label>
  );
};
export default Checkbox;
