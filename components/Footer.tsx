"use client";
import React from "react";
import Link from "next/link";
import { BuiltWith, Footer as FooterComponent } from "@vivekkv178/library";

const Footer = () => {
  return (
    <>
      <FooterComponent
        copyrightText=""
        NavigationComponent={Link}
        socials={{
          github: "string",
        }}
      />
      <BuiltWith
        techStack={[
          { icon: "logos:nextjs-icon", name: "Next.js" },
          { icon: "simple-icons:shadcnui", name: "Shadcn UI" },
          { icon: "logos:tailwindcss-icon", name: "Tailwind CSS" },
          { icon: "logos:firebase", name: "Firebase" },
        ]}
      />
    </>
  );
};

export default Footer;
