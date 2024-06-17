import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image 
          src='/assets/images/logo.svg'
          alt='logo'
          width={128}
          height={38}
          />
        </Link>
        <p>2024 Evently. All Right Received</p>
      </div>
    </footer>
  );
};

export default Footer;
