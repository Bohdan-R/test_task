import { FC } from "react";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 border-2 border-gray-500 ${
        checked ? "bg-[#0a0e1a]" : "bg-gray-700"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
          checked ? "translate-x-0" : "translate-x-6"
        }`}
      />
    </button>
  );
};
export default Switch;
