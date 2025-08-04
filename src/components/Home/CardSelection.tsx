import React, { useState } from "react";
import gradCap from "../../assets/img/GraduationCap.png";
import profileImg from "../../assets/img/Profile.png";
import teacherImg from "../../assets/img/Teacher.png";

const buttonsInfo = [
	{
	icon: (
		<img src={teacherImg} alt="Faculty" style={{ width: 32, height: 32, objectFit: "contain", display: "block" }} />
	
	),
		info: {
			title: "Faculty",
			desc: "You are a faculty member interested in supporting students and projects in interaction design.",
		},
	},
	{
		icon: (
			<img src={gradCap} alt="Student" style={{ width: 32, height: 32, objectFit: "contain", display: "block" }} />
	
		),
		info: {
			title: "Student",
			desc: "You are an interaction design student or a student who’s interested in interaction design who’s interested in enhancing your portfolio with an exciting project opportunity",
		},
	},
	{
		icon: (
				<img src={profileImg} alt="Profile" style={{ width: 32, height: 32, objectFit: "contain", display: "block" }} />
	
		),
		info: {
			title: "Client",
			desc: "You are a client looking for talented students to work on your interaction design project.",
		},
	},
];

const CardSelection: React.FC = () => {
	const [selected, setSelected] = useState<number | null>(1);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginTop: 32,
			}}
		>
			<div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
				{buttonsInfo.map((btn, idx) =>
					selected === idx ? (
						<div
							key={idx}
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "stretch",
								background: "rgba(255,255,255,0.10)",
								borderRadius: "32px",
								padding: "0 32px 0 0",
								boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
								position: "relative",
							}}
						>
							<div
								style={{
									background: "rgba(255,255,255,0.10)",
									borderRadius: "32px",
									width: 64,
									alignSelf: "stretch",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginRight: 16,
								}}
							>
								{btn.icon}
							</div>
							<div
								style={{
									color: "white",
									flex: 1,
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start", 
									justifyContent: "center",
									height: "100%",
									textAlign: "left",
								}}
							>
								<div
									style={{
										fontWeight: 600,
										fontSize: 22,
										marginBottom: 8,
									}}
								>
									{btn.info.title}
								</div>
								<div style={{ fontSize: 16, marginBottom: 24 }}>
									{btn.info.desc}
								</div>
								<button
									style={{
										background: "rgba(255,255,255,0.18)",
										color: "white",
										border: "none",
										borderRadius: 8,
										padding: "8px 20px",
										fontSize: 16,
										cursor: "pointer",
										marginRight: 12,
									}}
								>
									Click me!
								</button>
							</div>
						</div>
					) : (
						<button
							key={idx}
							onClick={() => setSelected(idx)}
							style={{
								background: "rgba(255,255,255,0.10)",
								borderRadius: "100px",
								padding: "0 16px 0 16px",

								minHeight: 500,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								backdropFilter: "blur(15px)",
								WebkitBackdropFilter: "blur(15px)",
								boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
								transition: "all 0.4s ease",
								position: "relative",
							}}
						>
							<span>{btn.icon}</span>
						</button>
					)
				)}
			</div>
		</div>
	);
};

export default CardSelection;
