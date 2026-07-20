import { Button, Card, CloseButton } from "@heroui/react";
import Link from "next/link";

export function SelectCart({ data }) {
    return (
        <Card className="w-full items-stretch md:flex-row min-h-[450px]">
            <div className="relative h-[50%] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[220px] sm:w-[220px]">
                <img
                    alt="Cherries"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                    loading="lazy"
                    src={data.image}
                />
            </div>
            <div className="flex flex-1 flex-col h-[80%] items-center  gap-7 pt-[20%]">
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
                        <span className="text-sm font-medium text-foreground">{data.rating}</span>
                        <span className="text-xs text-muted">{data.price}$</span>
                    </div>

                    <Link href={`/all-products/${data.id}`}>
                        <Button className="w-full sm:w-auto">View Details</Button>

                    </Link>                </Card.Footer>
            </div>
        </Card>
    );
}