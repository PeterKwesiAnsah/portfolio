import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				serif: ["Lora", ...defaultTheme.fontFamily.serif],
			},
			typography: {
				DEFAULT: {
					css: {
						// Remove backticks from inline code
						"code::before": {
							content: "''",
						},
						"code::after": {
							content: "''",
						},
						// Style inline code (single backticks) for light mode
						":not(pre) > code": {
							backgroundColor: "#e5e7eb",
							color: "#dc2626",
							padding: "0.125rem 0.375rem",
							borderRadius: "0.25rem",
							fontWeight: "600",
							fontSize: "0.875em",
							border: "1px solid #d1d5db",
						},
						// Keep code blocks (triple backticks) unstyled
						"pre code": {
							backgroundColor: "transparent",
							color: "inherit",
							padding: "0",
							border: "none",
							borderRadius: "0",
							fontWeight: "inherit",
							fontSize: "inherit",
						},
					},
				},
				// Dark mode variant
				invert: {
					css: {
						"code::before": {
							content: "''",
						},
						"code::after": {
							content: "''",
						},
						// Style inline code (single backticks) for dark mode
						":not(pre) > code": {
							backgroundColor: "#374151",
							color: "#fbbf24",
							padding: "0.125rem 0.375rem",
							borderRadius: "0.25rem",
							fontWeight: "600",
							fontSize: "0.875em",
							border: "1px solid #4b5563",
						},
						// Keep code blocks (triple backticks) unstyled
						"pre code": {
							backgroundColor: "transparent",
							color: "inherit",
							padding: "0",
							border: "none",
							borderRadius: "0",
							fontWeight: "inherit",
							fontSize: "inherit",
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
