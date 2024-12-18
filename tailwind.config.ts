import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			boxShadow: {
				shadowNew: "inset 0px 1px 60px 4px rgba(66, 68, 90, 1);",
				shadowHomepage: "30px 6px 66px 26px rgba(22, 24, 22, 1);",
				shadowNewBox: "0px 8px 12px -6px rgba(181, 181, 181, 1);",
			},
			colors: {
				black: "#0b0b0b",
				blackSecond: "#202121",
				blackThird: "#151515",
				blackFour: "#393b3b",
				// white: "#ebebeb",
				// whiteSecond: "#e3e3e3",
				whiteSecond: "#ebebeb",
				mainGreen: "#9ef01a",
				mainGreenSecond: "#70e000",
			},
			gridTemplateColumns: {
				"40/60": "40% 60%",
			},
			screens: {
				sm400: "400px",
				sm460: "460px",
				sm500: "500px",
				sm550: "550px",
				sm600: "600px",
				md800: "800px",
				md900: "900px",
				lg1100: "1100px",
				lg1200: "1200px",
				xl1396: "1395px",
				"2xl": "1400px",
				"3xl": "1500px",
				"4xl": "1600px",
				"5xl": "1700px",
				"6xl": "1800px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
