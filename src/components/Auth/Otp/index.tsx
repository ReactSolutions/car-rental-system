import { useEffect, useState } from "react";
import logoDark from "@/assets/Logo-dark.png";
import { Button } from "@/shared/ui/Button";
import { AuthImg } from "@/shared/ui/AuthImg";
import OTPInput from "react-otp-input";
export const Otp = () => {
	const [otp, setOtp] = useState<string>("");
	const [time, setTime] = useState<number>(60);

	useEffect(() => {
		if (time > 0) {
			const interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [time]);
	const formatTime = (time: number): string => {
		const min = Math.floor(time / 60);
		const sec = time % 60;
		return `${min} : ${sec < 10 ? "0" : ""} ${sec}`;
	};
	return (
		<>
			<div className="lg:flex  min-h-screen">
				<AuthImg />
				<div className="lg:w-1/2 flex flex-col items-center justify-center my-10">
					<div className=" flex items-center justify-center ">
						<img src={logoDark} className="" alt="" />
					</div>
					<h1 className="text-center text-2xl font-bold mt-4">
						OTP Verification
					</h1>
					<p className="text-center">
						Please enter the OTP code we have send to your Registered email
					</p>
					<form
						action=""
						className="mt-4 lg:w-[75%] max-lg:w-[60%] max-sm:w-[80%]">
						<OTPInput
							renderInput={(props) => <input {...props} />}
							value={otp}
							numInputs={6}
							renderSeparator={<span> </span>}
							onChange={setOtp}
							inputType="tel"
							shouldAutoFocus
							inputStyle={"  !w-12 h-12 rounded-lg border-2 border-gray mx-2"}
							containerStyle={"justify-center"}
						/>
						{formatTime(time)}
						<Button
							label="Continue"
							loading
							width=""
							font="semibold"
							color="blue"
							className="bg-[#3563E9]"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</>
	);
};
