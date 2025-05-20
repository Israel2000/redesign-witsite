import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Israel B. | Full-Stack Developer',
  description: 'Professional full-stack developer specializing in modern web applications',
  icons: [
    { rel: 'icon', url: '/wit-logo-256.png', sizes: '256x256', type: 'image/png' },
    { rel: 'icon', url: '/wit-logo-128.png', sizes: '128x128', type: 'image/png' },
    // { rel: 'icon', url: '/wit-logo.png', sizes: '64x64', type: 'image/png' }, // fallback
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '180x180', type: 'image/png' }, // iOS support
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}