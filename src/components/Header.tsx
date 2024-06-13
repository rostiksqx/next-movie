"use client"

import Link from "next/link"
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { loginUser } from "@/lib/auth";


export default function Header() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const result = await loginUser(email, password);
        if (result === null) {
            alert("Error logging in");
            return;
        }

        // need to use cookies library to set cookie
        document.cookie = `token=${result.token}`;
        setIsDialogOpen(false);
    }



    return (
        <header className="bg-black text-white py-4 px-6 md:px-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 3v18" />
                    <path d="M3 7.5h4" />
                    <path d="M3 12h18" />
                    <path d="M3 16.5h4" />
                    <path d="M17 3v18" />
                    <path d="M17 7.5h4" />
                    <path d="M17 16.5h4" />
                </svg>
                <span className="text-lg font-bold">MovieHub</span>
            </Link>
            <Button
                variant="ghost"
                onClick={() => setIsDialogOpen(true)}
            >
                Login
            </Button>
            {isDialogOpen && (
                <Dialog
                    open={isDialogOpen}
                    onOpenChange={() => setIsDialogOpen(false)}
                >
                    <DialogContent>
                        <div className="text-center p-4">
                            <h2 className="text-2xl font-bold">Login</h2>
                            <span className="text-sm text-gray-400">Login to your account</span>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                placeholder="example@example.com"
                                className="mt-4"
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="password" className="block mt-4">Password</label>
                            <Input
                                type="password"
                                placeholder="********"
                                className="mt-4"
                                onChange={handlePasswordChange}
                            />
                            <Button
                                type="submit"
                                className="mt-6 w-full"
                            >
                                Login
                            </Button>
                        </form>
                        <p className="text-center m-4">
                            Don't have an account? <Link href="/register" className="text-gray-500 hover:text-gray-900 transition-colors ease-in-out duration-300">Sign up</Link>
                        </p>
                    </DialogContent>
                </Dialog>
            )}
        </header>
    )
};