import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
	subsets: ["latin"],
	preload: true,
	display: "swap",
	variable: "--font-jost",
});

export const metadata: Metadata = {
	title: "PIECE OF SHOW",
	description: "Portfolio of Andrew Zbihlyj",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${jost.variable} h-full scroll-smooth`}>
			<body className="flex flex-col antialiased">
				<main className="flex flex-col flex-1">{children}</main>
			</body>
		</html>
	);
}
