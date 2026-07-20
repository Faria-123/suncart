// import React from 'react';

// const page = async ({ params }) => {
//     const { id } = await params;
//     console.log(id);

//     return (
//         <div>

//         </div>
//     );
// };

// export default page;
"use client"
import { Button, Card, CloseButton } from "@heroui/react";
import { CheckDouble } from '@gravity-ui/icons';
const page = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://suncart-beryl-five.vercel.app/products.json");
    const datas = await res.json();
    const data = datas.find(d => d.id == id);
    return (
        <Card className="w-full items-stretch md:flex-row">
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                <img
                    alt="Cherries"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                    loading="lazy"
                    src={data.image}
                />
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">{data.name}</Card.Title>
                    <Card.Description>
                        {
                            data.description
                        }
                    </Card.Description>
                    <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground flex gap-2.5"> <CheckDouble></CheckDouble> Only {data.price}$</span>
                        <span className="text-sm font-medium text-foreground flex gap-2.5"> <CheckDouble></CheckDouble> rating -{data.rating}</span>
                        <span className="text-sm font-medium text-foreground flex gap-2.5"> <CheckDouble></CheckDouble> stock-{data.stock}</span>
                        <span className="text-xs text-muted flex gap-2.5"> <CheckDouble></CheckDouble> {data.category}</span>
                    </div>
                    <Button className="w-full sm:w-auto">Apply Now</Button>
                </Card.Footer>
            </div>
        </Card>
    );
}
export default page;