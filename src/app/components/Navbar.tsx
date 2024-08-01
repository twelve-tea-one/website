"use client";

import Image from "next/image";
import Button from "./ui/custom/NavbarButton";
import Logo from "@/assets/images/logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/DropdownMenu";
import VN_Flag from "@/assets/images/vn.svg";
import GB_Flag from "@/assets/images/gb.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const path = (usePathname()).split("/")[1];
    return (
        <div className="w-full max-w-6xl flex justify-between items-center px-4 py-8 m-auto">
            <div className="flex gap-4">
                <Link href="/">
                    <Button active={path == "" ? true : false}>
                        Gallery
                    </Button>
                </Link>
                <Link href="/members">
                    <Button active={path == "members" ? true : false}>
                        Members
                    </Button>
                </Link>
                <Link href="/posts">
                    <Button active={path == "posts" ? true : false}>
                        Posts
                    </Button>
                </Link>
            </div>
            <div className="h-0">
                <Image src={Logo} alt="" height={130} className="-mt-16 cursor-pointer hover:scale-110 duration-500" />
            </div>
            <div className="flex gap-4">
                <Link href="/search">
                    <Button active={path == "search" ? true : false}>
                        Search
                    </Button>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-0">
                        <Button active={false}>
                            Language    
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0 bg-[#79b4b8]">
                        <div className="flex gap-6 items-center text-white px-4 py-1 cursor-pointer hover:bg-[#272727] duration-300">
                            <Image src={VN_Flag} alt="" />
                            <span>
                                Tiếng Việt
                            </span>
                        </div>
                        <div className="flex gap-6 items-center text-white px-4 py-1 cursor-pointer hover:bg-[#272727] duration-300">
                            <Image src={GB_Flag} alt="" />
                            <span>
                                English
                            </span>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/auth">
                    <Button active={path == "auth" ? true : false} login>
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    )
}