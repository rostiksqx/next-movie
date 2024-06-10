import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">&copy; 2024 MovieHub. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                    Terms of Service
                </Link>
                <Link href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                    Privacy Policy
                </Link>
                <div className="flex items-center gap-2">
                    <Link href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </Link>
                    <Link href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                    </Link>
                    <Link href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-5 w-5"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}