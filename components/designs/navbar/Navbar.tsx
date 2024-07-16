"use client";

import React, { useState, useRef, useEffect } from "react";
import Menu from "./MenuToggle";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { authbg1 } from "@/public/freepikImages";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => setIsContentVisible(true), 100); // Delay content visibility
    } else {
      setIsContentVisible(false);
    }
  }, [isMenuOpen]);

  const navbarVariants = {
    closed: { height: 80 },
    open: { height: `${80 + contentHeight}px` },
  };

  const contentVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } },
  };

  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <motion.nav
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={navbarVariants}
        className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">Logo</div>
            <div className="md:hidden flex flex-row items-center">
              <div className="bg-white min-h-[200px] flex items-center justify-center">
                <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  download game win money
                </button>
              </div>
              <Menu active={isMenuOpen} setActive={setIsMenuOpen} />
            </div>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={contentRef}
                initial="closed"
                animate={isContentVisible ? "open" : "closed"}
                exit="closed"
                variants={contentVariants}
                className="md:hidden"
              >
                <div className="py-4 flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <span
                      key={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
                <div className="py-4">
                  <Image
                    src={authbg1}
                    height={100}
                    width={100}
                    alt="icon"
                    className="mx-auto"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <div style={{ height: 80 }} /> {/* Spacer for fixed navbar */}
    </MotionConfig>
  );
};

export default Navbar;
