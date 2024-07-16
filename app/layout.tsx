import type { Metadata } from "next";
import { Inter, Play } from "next/font/google";

import "./globals.css";
import ConvexClerkProvider from "@/components/providers/ConvexClientProvider";
import Navbar from "@/components/designs/navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });
const play  = Play({ subsets: ["latin"] , weight:["400", "700"] });

export const metadata: Metadata = {
  title: "Convex Clerk Setup",
  description: " in this we do a complete setup of convex and clerk in typescrit nextjs app router ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={play.className}>
        <ConvexClerkProvider>
          <Navbar/>
          {children}
          </ConvexClerkProvider>
      </body>
    </html>
  );
}
