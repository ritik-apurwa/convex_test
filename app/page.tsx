"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <Image
        src="https://img.freepik.com/free-vector/prototyping-process-concept-illustration_114360-2741.jpg?w=740&t=st=1721025242~exp=1721025842~hmac=d5ba785933ea5ff461a4ae7696f9a369988da83cb9cf14454638ace51f54deea"
        alt="image"
        height={400}
        width={500}
      />
      <Link href="/sign-up">sign up</Link>
      <Link href="/sign-in">sign in</Link>
      <UserButton/>
    </div>
  );
};

export default page;
