"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between pt-6 items-center max-w-3xl mx-auto">
      <h1>Nextjs Server Actions CRUD</h1>
      <Link href="new" className={buttonVariants({ variant: "secondary" })}>
        Nueva Tarea
      </Link>
    </nav>
  );
}

export default Navbar;
