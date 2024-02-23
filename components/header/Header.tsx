import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row p-5 max-w-7xl items-center mx-auto">
        <Logo />
        <div className="flex flex-1 pt-5 items-center justify-end space-x-4">
          {session ? (
            <Link href={"/chat"} prefetch={false}>
              <MessagesSquareIcon className="w-6 h-6 text-black dark:text-white hover:text-gray-900  cursor-pointer" />
            </Link>
          ) : (
            <Link href={"/pricing"}  className="text-black dark:text-white">
              pricing
            </Link>
          )}
          <DarkModeToggle />
          <UserButton session={session}/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
