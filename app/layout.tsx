import type React from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { Footer } from '@/components/Footer';
import DarkModeToggle from '@/components/DarkModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LLM Safety Simulator - Educational Platform',
  description: 'An educational platform designed to demonstrate LLM vulnerabilities and promote the importance of robust safety measures in AI systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Toaster />
          <div className="flex min-h-screen flex-col">
            <header className="p-4 flex justify-end">
              <DarkModeToggle />
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
