export default function Footer() {
	return (
		<footer className="bg-[#0b0f19] pt-24 pb-8 mt-auto w-full border-t border-slate-800/40 relative z-20">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl text-center mb-24">
				<div className="text-[#0ea5e9] font-bold tracking-wider uppercase mb-6 text-sm">Get in Touch With Me</div>
				<a href="mailto:m.yosh691@gmail.com" className="text-4xl md:text-7xl font-bold underline decoration-2 underline-offset-[16px] hover:text-[#0ea5e9] transition-colors inline-block tracking-tight">
					m.yosh691@gmail.com
				</a>
			</div>

			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-12 border-b border-slate-800/80">

					{/* Logo */}
					<div className="text-3xl font-light tracking-[0.2em] flex items-center">
						VAN<span className="relative inline-block w-8 h-8 rounded-full border border-slate-600 mx-1 flex items-center justify-center"><span className="w-2.5 h-2.5 bg-slate-500 rounded-full"></span></span>TASIA
					</div>

					{/* Address & Contact */}
					<div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-slate-400 text-sm md:text-base">
						<div>
							<div className="text-white font-semibold mb-2">Dr. Sutomo Street 23, Malang Regency</div>
							<div>+62 819 0721 5411</div>
						</div>
						<div>
							<div className="text-white font-semibold mb-2">m.yosh691@gmail.com</div>
							<div className="flex gap-4 mt-3">
								{/* Social icons */}
								<a href="https://www.linkedin.com/in/mukhamad-yusuf-b340a0226/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-colors" title="LinkedIn">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
								</a>
								<a href="https://github.com/anticore691" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-colors" title="GitHub">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
								</a>
								<a href="https://www.threads.com/@mouwouw" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-colors" title="Threads">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
								</a>
								<a href="https://www.instagram.com/m.yosh69/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-colors" title="Instagram">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-8 text-center text-slate-500 text-sm mb-4">
					&copy; 2025 Vantasia. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
