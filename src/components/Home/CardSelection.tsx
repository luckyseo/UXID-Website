import { rgba } from "framer-motion";
import React, { useState } from "react";

const buttonsInfo = [
	{
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="2" y="7" width="20" height="13" rx="2" />
				<path d="M16 3v4" />
				<path d="M8 3v4" />
				<path d="M9 13h6" />
				<path d="M12 10v6" />
			</svg>
		),
		info: {
			title: "Faculty",
			desc: "You are a faculty member interested in supporting students and projects in interaction design.",
		},
	},
	{
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M22 19v-2a4 4 0 0 0-3-3.87" />
				<path d="M2 19v-2a4 4 0 0 1 3-3.87" />
				<circle cx="12" cy="7" r="4" />
			</svg>
		),
		info: {
			title: "Student",
			desc: "You are an interaction design student or a student who’s interested in interaction design who’s interested in enhancing your portfolio with an exciting project opportunity",
		},
	},
	{
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="9" y="9" width="13" height="13" rx="2" />
				<path d="M5 15v-2a4 4 0 0 1 4-4h2" />
				<circle cx="6" cy="6" r="3" />
			</svg>
		),
		info: {
			title: "Client",
			desc: "You are a client looking for talented students to work on your interaction design project.",
		},
	},
];

const CardSelection: React.FC = () => {
	const [selected, setSelected] = useState<number | null>(null);

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
							{/* Icon on left */}
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
