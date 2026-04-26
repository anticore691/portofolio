export default function Services() {
	return (
		<main className="relative flex flex-col flex-1 w-full pb-32">
			<section className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
				{/* Header Section */}
				<h1 className="text-5xl md:text-7xl font-bold mb-4">Services</h1>
				<p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide mb-12">What I Can Do For You</p>
				<div className="w-full h-[1px] bg-slate-800 mb-16"></div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					
					{/* Branding */}
					<div className="bg-[#111621]/50 rounded-[2rem] p-10 md:p-12 relative border border-slate-800/30 hover:border-[#0ea5e9]/50 transition-colors group">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#0ea5e9] transition-colors">Branding</h2>
						<p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 h-20 md:h-16">
							We collaborate with your brand to craft a meaningful & impactful identity.
						</p>
						<div className="w-full h-[1px] bg-slate-800 mb-8"></div>
						<ul className="space-y-5 text-slate-200 text-lg font-bold tracking-wide">
							<li>Brand Investigation</li>
							<li>Brand Strategy Roadmap</li>
							<li>Visual Identity Creation</li>
							<li>Visual Curation & Production</li>
							<li>Website UI & UX</li>
						</ul>
					</div>

					{/* Advertising */}
					<div className="bg-[#111621]/50 rounded-[2rem] p-10 md:p-12 relative border border-slate-800/30 hover:border-[#0ea5e9]/50 transition-colors group">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#0ea5e9] transition-colors">Advertising</h2>
						<p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 h-20 md:h-16">
							We collaborate with your brand to create effective offers that help you break even, and grow.
						</p>
						<div className="w-full h-[1px] bg-slate-800 mb-8"></div>
						<ul className="space-y-5 text-slate-200 text-lg font-bold tracking-wide">
							<li>Digital Advertising</li>
							<li>Digital Ads Content Production</li>
							<li>CRM & Email Newsletter</li>
							<li>Out of Home Media Buying</li>
						</ul>
					</div>

					{/* Marketing */}
					<div className="bg-[#111621]/50 rounded-[2rem] p-10 md:p-12 relative border border-slate-800/30 hover:border-[#0ea5e9]/50 transition-colors group">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#0ea5e9] transition-colors">Marketing</h2>
						<p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 h-20 md:h-16">
							We collaborate with your brand to drive demand and build lasting connections.
						</p>
						<div className="w-full h-[1px] bg-slate-800 mb-8"></div>
						<ul className="space-y-5 text-slate-200 text-lg font-bold tracking-wide">
							<li>Public Relation Strategy</li>
							<li>Campaign & Activation</li>
							<li>KOL Management</li>
							<li>Affiliator Management</li>
							<li>Social Media Management</li>
						</ul>
					</div>

					{/* Web & App Development */}
					<div className="bg-[#111621]/50 rounded-[2rem] p-10 md:p-12 relative border border-slate-800/30 hover:border-[#0ea5e9]/50 transition-colors group">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#0ea5e9] transition-colors">Web & App Dev</h2>
						<p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 h-20 md:h-16">
							We build scalable, high-performance web and mobile applications tailored to your business needs.
						</p>
						<div className="w-full h-[1px] bg-slate-800 mb-8"></div>
						<ul className="space-y-5 text-slate-200 text-lg font-bold tracking-wide">
							<li>Full-stack Web Development</li>
							<li>Mobile App Development</li>
							<li>Custom CMS Solutions</li>
							<li>E-commerce Platforms</li>
							<li>API Integration & Maintenance</li>
						</ul>
					</div>

				</div>
			</section>
		</main>
	);
}
