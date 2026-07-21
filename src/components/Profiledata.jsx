// import React from 'react';
"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const Profiledata = () => {
    const userData = authClient.useSession();
    const User = userData.data?.user;
    return (
        <div>
            <Card className="items-center">
                <Avatar className="w-[8rem] h-[8rem]">
                    <Avatar.Image alt="John Doe" src={User?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{User?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div>
                    <p className=" text-shadow-cyan-600">{User?.name}</p>
                </div>
                <div>
                    <p>
                        {User?.email}
                    </p>
                </div>
            </Card>

        </div>
    );
};

export default Profiledata;