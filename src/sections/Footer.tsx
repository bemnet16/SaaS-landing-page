import Image from "next/image";

import LogoImage from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutue from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:bottom-0 before:top-1 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={LogoImage}
            alt="Logo img"
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
          <a href="#" className="footer-link">
            About
          </a>
          <a href="#" className="footer-link">
            Features
          </a>
          <a href="#" className="footer-link">
            Customers
          </a>
          <a href="#" className="footer-link">
            Pricing
          </a>
          <a href="#" className="footer-link">
            Updates
          </a>
          <a href="#" className="footer-link">
            Help
          </a>
        </nav>

        <div className="flex items-center justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutue />
        </div>

        <p className="mt-6"> &copy; 2024 B. Adugnaw, All rights reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
