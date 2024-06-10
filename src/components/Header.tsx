import Link from "next/link"


export default function Header() {
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
        </header>
    )
}