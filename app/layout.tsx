import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurora Connect | Product Blueprint',
  description:
    'Comprehensive mobile product strategy for Aurora Connect, a professional networking platform with feed, chat, jobs, and network experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
