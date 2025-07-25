import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';

const dmSerif = localFont({
	src: './fonts/DMSerifText.ttf',
	variable: '--font-dm-serif',
	weight: '400',
});

const modernNegra = localFont({
	src: './fonts/ModernNegra.ttf',
	variable: '--font-modern-negra',
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Trevor Collins - Next.js Boilerplate',
	description:
		'Starting point for Next.js projects with Typescript, Tailwind CSS, and more.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${dmSerif.variable} ${modernNegra.variable} antialiased`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
