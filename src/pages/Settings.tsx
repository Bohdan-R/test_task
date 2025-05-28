import { useState } from "react";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify({ username, darkMode, agreed }, null, 2));
    handleReset();
  };

  const handleReset = () => {
    setUsername("");
    setDarkMode(true);
    setAgreed(false);
  };

  const isDisabledSubmit = !username || !agreed;

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="space-y-8 w-[400px] mx-auto p-10 bg-[#0a0e1a] border border-gray-500 text-white rounded-xl shadow"
    >
      <div>
        <Input
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <span className="block text-sm mb-2">Theme</span>
        <Switch checked={darkMode} onChange={setDarkMode} />
      </div>

      <div>
        <Checkbox
          checked={agreed}
          onChange={setAgreed}
          label="I agree to the terms"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4 border-t border-zinc-700">
        <button
          type="reset"
          className="px-4 py-2 bg-[#121825] text-slate-300 hover:bg-[#212e49] rounded-lg"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isDisabledSubmit}
          className={`px-4 py-2 bg-[#121825] text-slate-300 rounded-lg 
            ${
              isDisabledSubmit
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-[#212e49] cursor-pointer"
            }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
