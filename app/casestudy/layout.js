import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Giovanni Medrano Portfolio',
	description: 'Created by Giovanni Medrano',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} max-w-8xl`}>
				{children}
			</body>
		</html>
	)
}
