import { ButtonProp } from "@/types/ui.ts";
export const Button = ({
	label,
	color = "bg-[#3563E9]",
	icon,
	disabled,
	className,
	font,
	type,
	onClick,
}: ButtonProp) => {
	console.log(label, color, icon, disabled, className);
	return (
		<>
			<button
				type={type}
				onClick={onClick}
				className={`w-full h-10 text rounded-lg text-white text-lg font-${font} flex  my-2 items-center justify-center  ${className} ${
					disabled && "cursor-not-allowed bg-gray-400"
				} `}
				disabled={disabled}>
				{icon && <img src={icon} alt="" className=" mr-2 h-6 w-5" />}
				{label}
			</button>
		</>
	);
};
