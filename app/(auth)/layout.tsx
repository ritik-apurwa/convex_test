import { authbg1 } from "@/public/freepikImages";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute size-full">
        <Image src={authbg1} alt="background" fill className="size-full" />
      </div>
      {children}
    </main>
  );
}
