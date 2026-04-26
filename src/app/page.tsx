import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/server";
import TestimonialCarousel from "~/components/TestimonialCarousel";

export default async function Home() {
	const projects = await api.project.getAll({ limit: 6 });

	return (
		<main className="relative flex flex-col flex-1 w-full pb-24">
			
			{/* Background Image Area for Hero */}
			<div className="absolute top-0 right-0 w-full md:w-[60%] h-[100vh] opacity-60 pointer-events-none -z-10 overflow-hidden">
				<Image
					src="/hero-portrait.png"
					alt="Mukhamad Yusuf Portrait"
					fill
					priority
					className="object-cover object-right-top md:object-right grayscale mix-blend-lighten"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/80 to-transparent w-full md:w-3/4"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-transparent to-transparent"></div>
			</div>

			{/* 1. Hero Section */}
			<section className="container mx-auto px-6 md:px-12 max-w-7xl min-h-[85vh] flex flex-col justify-center pb-24 pt-12">
				<div className="max-w-2xl mt-12 lg:mt-0">
					<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1]">
						Hi, I'm Mukhamad Yusuf
					</h1>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0ea5e9] mt-3 md:mt-4">
						Digital Marketer & Creative Strategist.
					</h2>
					<p className="mt-6 md:mt-8 text-slate-300 text-base md:text-lg leading-relaxed max-w-lg md:max-w-xl">
						Membangun masa depan digital melalui integrasi marketing digital, desain yang autentik,
						dan teknologi Full-stack yang skalabel. Membantu bisnis tumbuh melalui efisiensi operasional.
					</p>

					<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10 md:mt-12">
						<a href="https://wa.me/6281907215411" target="_blank" rel="noreferrer" className="text-center w-full sm:w-auto bg-[#0ea5e9] text-[#070b14] font-bold text-sm md:text-base px-8 md:px-10 py-3.5 rounded hover:bg-sky-400 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]">
							Hire Me
						</a>
						<a href="mailto:m.yosh691@gmail.com" className="text-center w-full sm:w-auto border border-[#0ea5e9] text-[#0ea5e9] font-bold text-sm md:text-base px-8 md:px-10 py-3.5 rounded hover:bg-[#0ea5e9]/10 transition-colors">
							Let's Talk
						</a>
					</div>
				</div>
			</section>

			{/* 2. Projects Highlight Section */}
			<section className="container mx-auto px-6 md:px-12 max-w-7xl py-24">
				<div className="text-center mb-20 relative">
					<h2 className="text-4xl md:text-5xl font-bold mb-8">My Projects Highlight</h2>
					<Link href="/my-works" className="border border-slate-600 rounded-full px-8 py-3 text-xs md:text-sm font-bold hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-colors inline-flex items-center gap-3 uppercase tracking-widest">
						Explore More <span>&rarr;</span>
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.slice(0, 6).map((project) => (
						<Link href={`/project/${project.id}`} key={project.id} className="group cursor-pointer max-w-sm mx-auto w-full">
							<div className="bg-[#111621]/40 rounded-[2rem] border border-slate-800 hover:border-purple-500 transition-colors p-5 flex flex-col h-full">
								<div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6 relative w-full p-4 bg-[#070b14]/50">
									<div className="relative w-full h-full">
										<Image 
											src={project.imageUrl || "/project-abstract.png"} 
											alt={project.title} 
											fill
											unoptimized
											className="object-contain group-hover:scale-110 transition-transform duration-700" 
										/>
									</div>
								</div>
								<div className="flex items-center gap-4 mb-4">
									<h3 className="text-xl font-bold truncate">{project.title}</h3>
									<div className="h-[1px] flex-1 bg-slate-800"></div>
									<div className="w-6 h-[1px] bg-[#0ea5e9]"></div>
								</div>
								<div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mt-auto">
									<span className="text-slate-600">Category:</span>
									<span className="text-slate-300">{project.category || "Uncategorized"}</span>
								</div>
							</div>
						</Link>
					))}
					
					{projects.length === 0 && (
						<div className="col-span-full text-center text-slate-500 py-12 border border-dashed border-slate-800 rounded-2xl">
							No projects found in the database.
						</div>
					)}
				</div>
			</section>

			{/* 3. Testimonial Section */}
			<TestimonialCarousel />

		</main>
	);
}