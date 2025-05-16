import './globals.css';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust if needed
  variable: '--font-comfortaa',
});

export const metadata = {
  title: 'KanPra',
  description: 'Under maintenance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={comfortaa.variable}>
      <body>{children}</body>
    </html>
  );
}
