import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
            {/* Overlay */}
            <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
                <div className="max-w-7xl mx-auto px-6 text-white">
                    <h1 className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                        Turn Summer Moments into Stylish Shopping
                    </h1>
                    <p className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent">Summer Sale 50% OFF</span>
                    </p>
                    <p className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl"><span className="bg-gradient-to-r from bg-purple-400 via-green-600 to-orange-400 bg-clip-text text-transparent">Hot Deals </span></p>

                    <div className="flex gap-4">
                        <Link href="#">
                            <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                                Explore Now
                            </Button>
                        </Link>

                        <Link href="/pricing">
                            <Button variant="outline" className="text-white">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;