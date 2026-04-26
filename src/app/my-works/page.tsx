import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/server";

export default async function MyWorks() {
	const projects = await api.project.getAll();

	return (
		<main className="relative flex flex-col flex-1 w-full pb-32">
			<section className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
				
				<h1 className="text-5xl md:text-7xl font-bold mb-4">My works</h1>
				<p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide mb-12">Showcase About Works</p>
				<div className="w-full h-[1px] bg-slate-800 mb-16"></div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{projects.map((project) => (
						<Link href={`/project/${project.id}`} key={project.id} className="group cursor-pointer flex flex-col text-center">
							<div className="bg-[#111621]/50 rounded-[2rem] overflow-hidden aspect-square mb-6 relative border border-slate-800/30">
								<Image 
									src={project.imageUrl || "/project-abstract.png"} 
									alt={project.title} 
									fill
									unoptimized
									className="object-cover group-hover:scale-110 transition-transform duration-700" 
								/>
							</div>
							<div className="text-xs font-bold tracking-widest text-[#0ea5e9] mb-2 uppercase">
								{project.category || "Uncategorized"}
							</div>
							<h3 className="text-xl font-bold text-white">{project.title}</h3>
						</Link>
					))}

					{projects.length === 0 && (
						<div className="col-span-full text-center text-slate-500 py-12 border border-dashed border-slate-800 rounded-2xl">
							No projects found in the database.
						</div>
					)}
				</div>

				{/* Load More Button */}
				{projects.length > 0 && (
					<div className="text-center">
						<button className="border border-[#0ea5e9] text-[#0ea5e9] font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[#0ea5e9] hover:text-[#070b14] transition-colors">
							Load More Works
						</button>
					</div>
				)}
			</section>
		</main>
	);
}
