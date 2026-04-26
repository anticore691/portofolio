import Link from "next/link";

export default function Header() {
	return (
		<div className="relative z-20 container mx-auto px-6 md:px-12 max-w-7xl">
			<nav className="flex items-center justify-between py-8">
				<div className="text-3xl font-extrabold tracking-tight">Vantasia.</div>
				<div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
					<Link href="/" className="text-slate-200 hover:text-white transition-colors">Home</Link>
					<Link href="/about" className="text-slate-200 hover:text-white transition-colors">About</Link>
					<Link href="/services" className="text-slate-200 hover:text-white transition-colors">Services</Link>
					<Link href="/my-works" className="text-slate-200 hover:text-white transition-colors">My Works</Link>
					<a href="tel:+6281907215411" className="text-slate-200 hover:text-white transition-colors border border-slate-600 rounded-full px-6 py-2 hover:border-[#0ea5e9] hover:text-[#0ea5e9]">Contact</a>
				</div>
				<div className="md:hidden flex items-center">
					<button className="text-slate-200 hover:text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					</button>
				</div>
			</nav>
		</div>
	);
}
