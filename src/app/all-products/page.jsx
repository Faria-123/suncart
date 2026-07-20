// import React from 'react';

import { SelectCart } from "@/components/SelectCart";

const page = async () => {
    const res = await fetch("https://suncart-beryl-five.vercel.app/products.json");
    const datas = await res.json();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {
                datas.map(data => <SelectCart key={data.id} data={data} ></SelectCart>)
            }
        </div>
    );
};

export default page;