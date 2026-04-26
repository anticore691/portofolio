import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { api } from "~/trpc/server";

export default async function ProjectDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const resolvedParams = await params;
	const project = await api.project.getById({ id: resolvedParams.id });

	if (!project) {
		return notFound();
	}

	return (
		<main className="relative flex flex-col flex-1 w-full pb-32">
			{/* Header Section */}
			<section className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
				<h1 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
				<p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide mb-12">
					Category: {project.category || "Uncategorized"}
				</p>
				<div className="w-full h-[1px] bg-slate-800 mb-16"></div>

				{/* Main Image Banner */}
				<div className="w-full bg-[#111621]/50 rounded-[2rem] overflow-hidden mb-24 relative border border-slate-800/30 aspect-[21/9]">
					<Image 
						src={project.imageUrl || "/project-abstract.png"} 
						alt={project.title} 
						fill
						unoptimized
						className="object-cover" 
					/>
				</div>

				{/* Project Story Text */}
				<div className="max-w-4xl mx-auto mb-24">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">Project Story</h2>
					<div className="text-slate-400 text-base md:text-lg leading-relaxed space-y-6">
						<p>
							{project.description || "No description provided for this project."}
						</p>
					</div>
				</div>

				{/* Links */}
				<div className="max-w-4xl mx-auto mb-32 flex flex-wrap gap-6">
					{project.projectUrl && (
						<a 
							href={project.projectUrl} 
							target="_blank" 
							rel="noreferrer" 
							className="bg-[#0ea5e9] text-[#070b14] font-bold px-8 py-4 rounded-full hover:bg-sky-400 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]"
						>
							Visit Project
						</a>
					)}
					{project.githubUrl && (
						<a 
							href={project.githubUrl} 
							target="_blank" 
							rel="noreferrer" 
							className="border border-[#0ea5e9] text-[#0ea5e9] font-bold px-8 py-4 rounded-full hover:bg-[#0ea5e9]/10 transition-colors"
						>
							View Source Code
						</a>
					)}
				</div>

				{/* Pagination */}
				<div className="flex justify-center items-center max-w-5xl mx-auto mb-32 border-b border-slate-800 pb-16">
					<Link href="/#projects" className="flex items-center gap-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:text-[#0ea5e9] transition-colors group border border-slate-600 rounded-full px-8 py-3">
						<span className="text-slate-500 group-hover:text-[#0ea5e9] transition-colors">&larr;</span> Back to Projects
					</Link>
				</div>
			</section>
		</main>
	);
}
