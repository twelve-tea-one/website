"use client";

import Image from "next/image";
import Button from "./ui/custom/Button";
import Logo from "@/assets/images/logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/DropdownMenu";
import VN_Flag from "@/assets/images/vn.svg";
import GB_Flag from "@/assets/images/gb.svg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Images, Languages, Search, SquarePen, TriangleAlert, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { hash, branch } from "@/track.json";

export default function Navbar() {
    const [localDev, setLocalDev] = useState(false);
    const path = (usePathname()).split("/")[1];
    
    useEffect(() => {
        if (process.env.NODE_ENV == "development") {
            if (["localhost","127.0.0.1"].includes(document.location.hostname)) setLocalDev(true);
        }
    }, [localDev]);

    return (
        <>
        {
        // Development warning
        process.env.NODE_ENV == "development" && (
        <div className={cn("sticky top-0 z-10 h-10 flex items-center justify-center gap-2", localDev ? "bg-yellow-500 text-black" : "bg-red-400 text-white")}>
            <TriangleAlert size={16} />
            {localDev ? (
                <p className="font-bold">Local Debug Build</p>
            ) : (
                <p className="font-bold">This is a development website of <Link className="underline hover:text-gray-200" href="https://github.com/twelve-tea-one/website" target="_blank">TwelveTeaOne Yearbook website</Link>. Things may break! {branch + "/" + hash}</p>
            )
            }
            
        </div>
        )}
        
        <div className="w-full max-w-7xl flex justify-between items-center px-4 py-8 m-auto">
            <div className="flex gap-4">
                <Link href="/">
                    <Button active={path == "" ? true : false}>
                        <div className="flex gap-1 items-center">
                            <Images size={16} />
                            <span>Gallery</span>
                        </div>
                    </Button>
                </Link>
                <Link href="/members">
                    <Button active={path == "members" ? true : false}>
                        <div className="flex gap-1 items-center">
                            <Users size={16} />
                            <span>Members</span>
                        </div>
                    </Button>
                </Link>
                <Link href="/posts">
                    <Button active={path == "posts" ? true : false}>
                        <div className="flex gap-1 items-center">
                            <SquarePen size={16} />
                            <span>Posts</span>
                        </div>
                    </Button>
                </Link>
            </div>
            <div className="h-0">
                <Image src={Logo} alt="" height={130} className="-mt-16 cursor-pointer hover:scale-110 duration-500" />
            </div>
            <div className="flex gap-4">
                <Link href="/search">
                    <Button active={path == "search" ? true : false}>
                        <div className="flex gap-1 items-center">
                            <Search size={16} />
                            <span>Search</span>
                        </div>
                    </Button>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-0">
                        <Button active={false}>
                            <div className="flex gap-1 items-center">
                                <Languages size={16} />
                                <span>Language</span>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0 bg-[#79b4b8] rounded-[16px]">
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
        </>
    )
}