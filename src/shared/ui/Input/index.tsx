import { FC, useState } from "react";
import { InputFieldProp } from "@/types/ui.ts";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export const Input: FC<InputFieldProp> = (prop) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [value, setValue] = useState<boolean>(false);
	const { type, placeholder, label, className, error } = prop;

	return (
		<>
			<label className="block font-semibold text-sm my-2">{label}</label>
			<div className="relative">
				<input
					type={showPassword ? "text" : type}
					className={`border border-[#E2E8F0] rounded-lg h-10 w-full pl-3 pr-10 ${className}`}
					placeholder={placeholder}
					onChange={(e) =>
						e.target.value.trim().length >= 1 ? setValue(true) : setValue(false)
					}
				/>
				{type === "password" && value && (
					<span
						onClick={() => setShowPassword(!showPassword)}
						className="absolute text-lg inset-y-0 right-0 flex items-center   pr-3 cursor-pointer">
						{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
					</span>
				)}
			</div>
			{error && <span className="text-red-500">{error}</span>}
		</>
	);
};
