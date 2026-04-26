import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Analytics } from '@vercel/analytics/react';
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
	title: "Mukhamad Yusuf | Digital Marketer & Full-stack Developer",
	description: "Portofolio profesional Mukhamad Yusuf - Spesialis Digital Marketing Strategy dan Full-stack Web Development menggunakan T3 Stack.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body className="min-h-screen bg-[#070b14] text-white font-sans flex flex-col relative overflow-x-hidden">
				<TRPCReactProvider>
					<Header />
					{children}
					<Footer />
					<Analytics />
				</TRPCReactProvider>
			</body>
		</html>
	);
}
