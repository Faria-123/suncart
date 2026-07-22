// import React from 'react';
"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
const Profiledata = () => {
    const userData = authClient.useSession();
    const User = userData.data?.user;
    const onSubmit = async (e) => {
        e.preventDefault();
        const Username = e.target.name.value;
        const Userimage = e.target.image.value;
        console.log(Username, Userimage);

        await authClient.updateUser({
            image: Userimage,
            name: Username
        })

    }
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
            <Modal>
                <Button variant="secondary">Open Contact Form</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Update Now!</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we'll get back to you.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" name="name" />
                                        </TextField>
                                        <TextField className="w-full"
                                            name="image"
                                            variant="secondary">
                                            <Label>Image</Label>
                                            <Input placeholder="Enter your Image url" name="image" />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary" >
                                                Cancel
                                            </Button>
                                            <Button type="submit">Submit</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Profiledata;