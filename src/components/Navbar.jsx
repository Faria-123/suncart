"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const userData = authClient.useSession();
    const User = userData.data?.user;
    const handleout = async () => {
        await authClient.signOut();
    }
    console.log(User);
    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/images.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">Su<span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent">nCa</span>rt</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-products"}>Products</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>My Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    {
                        !User && <ul className="flex items-center  text-sm gap-3">
                            <li>
                                <Link href={"/signup"}>SignUp</Link>
                            </li>
                            <li>
                                <Link href={"/signin"}>SignIn</Link>
                            </li>
                        </ul>
                    }
                </div>
                {
                    User && <div className="flex justify-center items-center gap-3">

                        <Avatar>
                            <Avatar.Image alt="John Doe" src={User?.image} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{User?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <Button variant="danger" onClick={handleout} >Sign Out</Button>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Navbar;