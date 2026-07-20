// import React from 'react';

import { Card } from "@heroui/react";
import { SelectCart } from "./SelectCart";
// import Cart from "./Cart";

const PopularProducts = async () => {
    const res = await fetch("https://suncart-beryl-five.vercel.app/products.json");
    const datas = await res.json();
    const selectData = datas.slice(0, 3);
    // console.log(selectData.length);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {
                selectData.map(data => <SelectCart data={data} key={data.id}></SelectCart>)
            }
        </div>
    );
};

export default PopularProducts;