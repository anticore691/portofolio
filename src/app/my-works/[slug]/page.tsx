import Link from "next/link";

export default function ProjectDetail() {
	return (
		<main className="relative flex flex-col flex-1 w-full pb-32">
			{/* Header Section */}
			<section className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
				<h1 className="text-5xl md:text-7xl font-bold mb-4">Project Detail</h1>
				<p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide mb-12">Details About The Project</p>
				<div className="w-full h-[1px] bg-slate-800 mb-16"></div>

				{/* Main Image Banner */}
				<div className="w-full bg-[#111621]/50 rounded-[2rem] overflow-hidden mb-24 relative border border-slate-800/30">
					<img src="/project-abstract.png" alt="Project Banner" className="w-full aspect-[21/9] object-cover" />
				</div>

				{/* Project Story Text */}
				<div className="max-w-4xl mx-auto mb-24">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">Project Story</h2>
					<div className="text-slate-400 text-base md:text-lg leading-relaxed space-y-6">
						<p>
							The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it.
						</p>
						<p>
							We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.
						</p>
					</div>
				</div>

				{/* Two smaller images */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
					<div className="bg-[#111621]/50 rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/5] relative border border-slate-800/30">
						<img src="/project-abstract.png" alt="Project Detail 1" className="w-full h-full object-cover" />
					</div>
					<div className="bg-[#111621]/50 rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/5] relative border border-slate-800/30">
						<img src="/project-abstract.png" alt="Project Detail 2" className="w-full h-full object-cover" />
					</div>
				</div>

				{/* Day One Text */}
				<div className="max-w-4xl mx-auto mb-32">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">Day One</h2>
					<div className="text-slate-400 text-base md:text-lg leading-relaxed space-y-6">
						<p>
							Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more.
						</p>
						<p>
							And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills.
						</p>
					</div>
				</div>

				{/* Pagination */}
				<div className="flex justify-between items-center max-w-5xl mx-auto mb-32 border-b border-slate-800 pb-16">
					<Link href="/my-works" className="flex items-center gap-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:text-[#0ea5e9] transition-colors group">
						<span className="text-slate-500 group-hover:text-[#0ea5e9] transition-colors">&larr;</span> Previous Work
					</Link>
					<Link href="/my-works" className="flex items-center gap-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:text-[#0ea5e9] transition-colors group">
						Next Work <span className="text-slate-500 group-hover:text-[#0ea5e9] transition-colors">&rarr;</span>
					</Link>
				</div>
			</section>

			{/* Other Projects */}
			<section className="container mx-auto px-6 md:px-12 max-w-7xl pb-16">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Other Projects</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Link href="/my-works/logo-project-1" className="group cursor-pointer flex flex-col">
						<div className="bg-[#111621]/50 rounded-[2rem] overflow-hidden aspect-[4/5] mb-6 relative border border-slate-800/30">
							<img src="/project-abstract.png" alt="Logo Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
						</div>
						<h3 className="text-xl font-bold text-white mb-2">Logo Project 1</h3>
						<div className="text-sm tracking-wide text-slate-400">Branding</div>
					</Link>

					<Link href="/my-works/logo-project-2" className="group cursor-pointer flex flex-col">
						<div className="bg-[#111621]/50 rounded-[2rem] overflow-hidden aspect-[4/5] mb-6 relative border border-slate-800/30">
							<img src="/project-abstract.png" alt="Logo Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
						</div>
						<h3 className="text-xl font-bold text-white mb-2">Logo Project 2</h3>
						<div className="text-sm tracking-wide text-slate-400">Branding</div>
					</Link>

					<Link href="/my-works/logo-project-3" className="group cursor-pointer flex flex-col">
						<div className="bg-[#111621]/50 rounded-[2rem] overflow-hidden aspect-[4/5] mb-6 relative border border-slate-800/30">
							<img src="/project-abstract.png" alt="Logo Project 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
						</div>
						<h3 className="text-xl font-bold text-white mb-2">Logo Project 3</h3>
						<div className="text-sm tracking-wide text-slate-400">Branding</div>
					</Link>
				</div>
			</section>
		</main>
	);
}
