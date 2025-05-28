import { FC, InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <label className="flex flex-col space-y-2 text-sm text-white">
      {label && <span className="text-gray-300">{label}</span>}
      <input
        {...props}
        className={`bg-zinc-800 border border-zinc-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition ${className}`}
      />
    </label>
  );
};
export default Input;
