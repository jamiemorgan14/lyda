"use client";

import Image from "next/image";
import Link from "next/link";
import config from "@/config.json";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-brand-dark text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Left side: Logo and Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/assets/LYDA_LAWNCARE_LLC.jpg"
              alt="Lyda Lawn Care & Landscaping LLC"
              width={300}
              height={90}
              className="h-14 sm:h-16 w-auto cursor-pointer"
              priority
              unoptimized
            />
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${config.business.phone.replace(/\D/g, "")}`}
              className="text-brand-green hover:text-green-400 transition-colors"
              aria-label="Call us"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </a>
            <a
              href={config.business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:text-green-400 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right side: Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6">
          {config.navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-brand-green transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </header>
  );
}
