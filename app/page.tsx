// "use client";

// import { useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";
// import Image from "next/image";
// import Link from "next/link";
// import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
// import { useState, useEffect } from "react";
// import UserList from "@/components/designs/UserList";

// const Page = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div className="flex items-center">
//               <Link
//                 href="/"
//                 className="text-2xl font-bold text-indigo-600 hover:text-indigo-500"
//               >
//                 Binzo
//               </Link>
//             </div>
//             <div className="flex items-center space-x-4">
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//               <SignedOut>
//                 <Link
//                   href="/sign-up"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   Sign up
//                 </Link>
//                 <Link
//                   href="/sign-in"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   Sign in
//                 </Link>
//               </SignedOut>
//             </div>
//           </div>
//         </div>
//       </header>
//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-gray-900">Welcome to Binzo</h1>
//       </main>
//     </div>
//   );
// };

// export default Page;

import AboutUs from "@/components/designs/AboutUs/AboutUs";
import BDCard from "@/components/designs/BannerDesignCard/BDCard";
import { carouselData } from "@/components/designs/CarouselCard.tsx/CarouselData";
import EmblaCarouselFade from "@/components/designs/CarouselCard.tsx/EmblaCarouselFade";

import FAQ from "@/components/designs/FAQ/FAQ";
import Footer from "@/components/designs/Footer/Footer";
import Hero from "@/components/designs/HeroPage/Hero";
import HowToInstall from "@/components/designs/HowToInstall/HowToInstall";
import TopGames from "@/components/designs/Topgames/TopGames";
import WhyUs from "@/components/designs/WhyBinzo/WhyUs";
import WinzoWinner from "@/components/designs/WinzoWinners/WinzoWinner";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <BDCard/>
      <EmblaCarouselFade slides={carouselData} options={{ loop: true }} />
      <Hero />
      <WhyUs />
      <TopGames />
      <WinzoWinner />
      <HowToInstall />
      <AboutUs />
      <HowToInstall />
      <FAQ />
      <Footer />
    </section>
  );
};

export default page;
