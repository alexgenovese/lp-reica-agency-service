import type { Metadata } from "next";
import { Poppins, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import "./custom.css";
 
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin'],
})

const dm_serif_text = DM_Serif_Text({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-dm-serif-text',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Growth Marketing Agency",
  description: "Increase your sales with Artificial Intelligence Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${dm_serif_text.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
