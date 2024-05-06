import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from './_components/ui/theme-provider';
import Header from './_components/Header';
import { Toaster } from './_components/sonner';

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#7c3aed" showSpinner={false} />
          <Toaster richColors />

          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
