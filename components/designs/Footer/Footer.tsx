import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

interface SocialIcon {
  id: number;
  title: string;
  icon: IconType;
  href: string;
}

const socialIcons: SocialIcon[] = [
  { id: 1, title: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
  { id: 2, title: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  { id: 3, title: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { id: 4, title: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
];

const SocialIcon: React.FC<SocialIcon> = ({ href, icon: Icon, title }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="m-2">
      <Link href={href} aria-label={title}>
        <Icon className="text-2xl text-gray-700 hover:text-blue-500" />
        <span className="sr-only">{title}</span>
      </Link>
    </motion.div>
  );
};

const Blogs = () => {
  const blogNames = [
    "Blogs1",
    "Blogs2",
    "Blogs3",
    "Blogs4",
    "Blogs5",
    "Blogs6",
    "Blogs7",
    "Blogs8",
  ];
  
  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2">Blogs</h3>
      <ul>
        {blogNames.map((item, index) => (
          <li key={index} className="mb-1 hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Games = () => {
  const gameNames = [
    "FRUIT SAMURAI",
    "SNAKES AND LADDERS",
    "POOL",
    "CARROM",
    "LUDO",
    "FANTASY CRICKET",
    "RUMMY",
    "CALL BREAK",
  ];
  
  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2">Games</h3>
      <ul>
        {gameNames.map((item, index) => (
          <li key={index} className="mb-1 hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Policies = () => {
  const policies = [
    "T&C",
    "SUPERSTAR T&C",
    "PRIVACY POLICY",
    "RESPONSIBLE GAMING POLICY",
    "ANTI MONEY LAUNDERING POLICY",
    "CERTIFICATION",
    "FAIRPLAY POLICY",
    "COMMUNITY GUIDELINES",
  ];
  
  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2">Policies</h3>
      <ul>
        {policies.map((item, index) => (
          <li key={index} className="mb-1 hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Disclaimer = () => {
  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
      <p>
        This game may be habit-forming or financially risky. Play responsibly.
        WinZO is the biggest social gaming app in India by number of games,
        languages, and exciting formats on the platform. WinZO is only available
        for people who are above 18 years of age. WinZO is available only in
        those Indian states where skill gaming is allowed by regulations. WinZO
        Games Pvt. Ltd. is the sole owner of and reserves the right to “WinZO”
        trademark, logos, assets, content, information, etc. used on the website
        except for the third-party content. WinZO Games Pvt. Ltd. does not
        acknowledge the accuracy or reliability of third-party content.
      </p>
    </section>
  );
};

const CopyRight = () => {
  return (
    <div className="p-4 text-center text-gray-500">
      © 2024, WinZO All Right Reserved | Contact Us - Privacy Policy - Terms &
      Conditions - Refund/Cancellation Policy
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.id} {...icon} />
            ))}
          </div>
        </div>
        <Blogs />
        <Games />
        <Policies />
      </div>
      <Disclaimer />
      <CopyRight />
    </footer>
  );
};

export default Footer;
