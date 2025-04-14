"use client";
import React from "react";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdAutoStories } from "react-icons/md";
import { ClerkLoaded, ClerkLoading, SignedIn } from "@clerk/nextjs";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { IoPeople } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
function Navbar() {
  return (
    <div className=" h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          Social
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <FaHome width={24} height={24} />
            Home Page
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <FaUserFriends width={24} height={24} />
            Friends
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <MdAutoStories width={24} height={24} />
            Stories
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 rounded-xl items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-none "
          />
          <IoIosSearch width={14} height={14} className="" />
        </div>
      </div>
      <div className=" w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <IoPeople width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <BiSolidMessageSquareDetail width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <IoMdNotifications width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <IoLogInSharp width={24} height={24} />
              <Link href="/sign-in" className=" font-medium">
                Login/Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
