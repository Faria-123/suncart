"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { LogoGooglePlay } from '@gravity-ui/icons';
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { object } from "better-auth";

const handle = async () => {
    await authClient.signIn.social({
        provider: "google",
    });
};
export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // console.log(formData.get("name"));
        const userData = Object.fromEntries(formData.entries());
        // console.log("form data", userData);
        // const { data, error } = await authClient.signUp.email({
        //     name: userData.name, // required
        //     email: userData.email, // required
        //     password: userData.password, // required
        //     image: userData.image,
        //     callbackURL: "/",

        // });
        // console.log(data);
        // if (data) {
        //     alert("sign up successfully!");
        // }
        // else if (error) {
        //     alert(error.message);
        // }

        const result = await authClient.signIn.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.image,
            callbackURL: "/",
        });

        console.log(result);
        console.log("Data:", result.data);
        console.log("Error:", result.error);
    };


    return (
        <Card className="border mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" name="name" />
                    <FieldError />
                </TextField>



                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" name="email" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" name="password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Log In
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <p className="text-center">OR</p>
            <button onClick={handle} variant="outline" className="w-full flex items-center justify-center gap-3"><LogoGooglePlay></LogoGooglePlay>login with google</button>
            <p className="text-center">OR</p>
            {/* <button variant="outline" className="w-full flex items-center justify-center gap-3">Register</button> */}

        </Card>
    );
}