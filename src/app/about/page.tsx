import Image from "next/image";

export default function About() {
	return (
		<main className="relative flex flex-col flex-1 w-full pb-32">
			<section className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
				{/* Title */}
				<h1 className="text-5xl md:text-7xl font-bold mb-4">About Me</h1>
				<p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide mb-16">Little Brief About Myself</p>
				<div className="w-full h-[1px] bg-slate-800 mb-20"></div>

				{/* Headline */}
				<div className="mb-24">
					<h2 className="text-4xl md:text-[4rem] font-bold leading-[1.1] text-white max-w-5xl">
						Bridging the gap between Code and Growth Strategy.
					</h2>
				</div>

				{/* Main Content: Photo + Story & Stack */}
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32 items-start">

					{/* Left: Single Photo */}
					<div className="w-full lg:w-5/12 relative">
						<div className="absolute top-1/4 -left-6 w-12 h-32 border border-[#0ea5e9]/60 rounded-[2rem] z-0 hidden md:block"></div>
						<div className="relative z-10 p-2 bg-[#111621]/40 rounded-[2rem] border border-slate-800 overflow-hidden">
							<Image
								src="/about-me.png"
								alt="Mukhamad Yusuf Portrait"
								width={800}
								height={1000}
								priority
								className="w-full h-auto object-cover rounded-[1.5rem] aspect-[4/5] opacity-90 transition-all duration-700 hover:scale-105 mix-blend-lighten"
							/>
						</div>
						<div className="absolute -bottom-8 -right-8 w-32 h-10 border border-[#0ea5e9]/60 rounded-full z-0 hidden lg:block"></div>
					</div>

					{/* Right: Story & Core Stack */}
					<div className="w-full lg:w-7/12 flex flex-col">
						{/* Narrative Body Text */}
						<div className="mb-16">
							<p className="text-slate-300 text-lg md:text-xl leading-relaxed">
								Sebagai seorang Digital Marketing Lead yang juga mendalami Software Architecture, saya melihat teknologi bukan cuma soal baris kode, tapi soal gimana kode itu bisa mendorong performa bisnis. Saya membangun ekosistem digital yang efisien—mulai dari arsitektur SaaS yang scalable hingga strategi kampanye yang terukur secara data.
							</p>
						</div>

						{/* Core Stack Section */}
						<div>
							<h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
								Tech & Strategy
							</h3>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* Branding */}
								<div className="bg-[#111621]/50 border border-slate-800/50 rounded-2xl p-6 hover:border-[#0ea5e9]/50 transition-colors">
									<div className="text-[#0ea5e9] font-bold mb-3 uppercase tracking-wider text-sm">Branding</div>
									<ul className="text-slate-400 space-y-2 text-sm md:text-base font-medium">
										<li>Brand Strategy</li>
										<li>Visual Identity & Logo</li>
										<li>Brand Positioning</li>
										<li>Market Research</li>
									</ul>
								</div>

								{/* Creative */}
								<div className="bg-[#111621]/50 border border-slate-800/50 rounded-2xl p-6 hover:border-[#0ea5e9]/50 transition-colors">
									<div className="text-[#0ea5e9] font-bold mb-3 uppercase tracking-wider text-sm">Creative</div>
									<ul className="text-slate-400 space-y-2 text-sm md:text-base font-medium">
										<li>UI/UX Design</li>
										<li>Web Design</li>
										<li>Graphic Design</li>
										<li>Digital Assets</li>
									</ul>
								</div>

								{/* Development */}
								<div className="bg-[#111621]/50 border border-slate-800/50 rounded-2xl p-6 hover:border-[#0ea5e9]/50 transition-colors sm:col-span-2 xl:col-span-2">
									<div className="text-[#0ea5e9] font-bold mb-3 uppercase tracking-wider text-sm">Development</div>
									<ul className="text-slate-400 space-y-2 text-sm md:text-base font-medium flex flex-wrap gap-x-8 gap-y-2">
										<li>Next.js & React</li>
										<li>TypeScript</li>
										<li>Tailwind CSS</li>
										<li>Full-Stack Architecture</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Social Links */}
				<div className="mt-8 pt-16 border-t border-slate-800/50">
					<h3 className="text-2xl font-bold mb-8">Let's Connect:</h3>
					<div className="flex flex-wrap gap-8 md:gap-12 text-lg font-bold tracking-widest text-slate-400">
						<a href="https://www.linkedin.com/in/mukhamad-yusuf-b340a0226/" className="hover:text-[#0ea5e9] transition-colors uppercase">LinkedIn</a>
						<a href="https://github.com/anticore691" className="hover:text-[#0ea5e9] transition-colors uppercase">GitHub</a>
						<a href="https://www.threads.com/@mouwouw" className="hover:text-[#0ea5e9] transition-colors uppercase">Thread</a>
						<a href="https://www.instagram.com/m.yosh69/" className="hover:text-[#0ea5e9] transition-colors uppercase">Instagram</a>
						<a href="mailto:[EMAIL_ADDRESS]" className="hover:text-[#0ea5e9] transition-colors uppercase">Email</a>
					</div>
				</div>
			</section>
		</main>
	);
}
