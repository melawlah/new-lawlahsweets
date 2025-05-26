import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-deepPink text-white py-8">
      <div className="container mx-auto px-8 text-center space-y-4">
        {/* Logo/Brand Name */}
        <h2 className="text-xl font-medium tracking-wide mb-2">
          Lawlah Sweets
        </h2>
        
        {/* Social Media Links with Icons */}
        <div className="flex justify-center space-x-6">
          {[
            {
              platform: "Instagram",
              url: "https://www.instagram.com/lawlah_sweets",
              icon: <FaInstagram className="text-xl" />,
            },
            {
              platform: "Facebook",
              url: "https://www.facebook.com/lawlahsweets",
              icon: <FaFacebookF className="text-xl" />,
            },
            {
              platform: "Twitter",
              url: "https://www.twitter.com/lawlahsweets",
              icon: <FaTwitter className="text-xl" />,
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lightPink transition-colors duration-300"
              aria-label={`Follow us on ${social.platform}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider for Visual Balance */}
        <div className="w-full h-0.5 bg-white/30 my-4" />

        {/* Quick Links */}
        {/* <div className="flex justify-center space-x-8 text-sm">
          <a
            href="/privacy-policy"
            className="hover:text-lightPink transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-lightPink transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="hover:text-lightPink transition-colors"
          >
            Contact Us
          </a>
        </div> */}

        {/* Copyright Notice */}
        <p className="text-sm text-white/80 mt-4">
          © {new Date().getFullYear()} Lawlah Sweets. All rights reserved. Web Design by <span> <a href="https://madewithlux.com"> MadeWithLux</a> </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
