"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-indigo-600 hover:text-indigo-500"
              >
                Binzo
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Link
                  href="/sign-up"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign up
                </Link>
                <Link
                  href="/sign-in"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign in
                </Link>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Your main content goes here */}
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Binzo</h1>
      </main>
    </div>
  );
};

export default Page;
