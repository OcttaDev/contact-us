"use client";

import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between w-full h-20 px-10">
        <h1 className="font-bold text-2xl">OCTTADEV</h1>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-10">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="https://octtadev.github.io/portfolio/">
                PortFolio
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          asChild
          className="bg-transparent hover:bg-secondary text-white border-2"
        >
          <Link href="#form">Create task</Link>
        </Button>
      </div>
    </header>
  );
}
