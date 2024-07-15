import { authbg1 } from "@/public/freepikImages";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="opacity-60 bg-black/20">
        <Image src={authbg1} alt="background" fill className="size-full" />
      </div>
      {children}
    </main>
  );
}
