"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
	{
		id: 1,
		text: "Vantasia bener-bener paham gimana cara bangun sistem yang scalable. Dashboard yang dia bangun buat operasional kita bukan cuma bagus secara visual, tapi bener-bener nyelesain masalah efisiensi tim. True full-stack expertise.",
		name: "— Rian Hadi, CTO of TechFlow"
	},
	{
		id: 2,
		text: "Jarang nemu orang yang paham koding sekaligus paham strategi digital marketing. Strategi yang disusun Vantasia berhasil ningkatin conversion rate kita sampai 40% dalam waktu singkat. Highly recommended!",
		name: "— Adin Miziar, Brand Manager of Meat Up Fresh"
	},
	{
		id: 3,
		text: "Komunikasinya lancar dan solusinya selalu to-the-point. Dia nggak cuma dengerin permintaan, tapi juga ngasih masukan arsitektur yang lebih efisien buat jangka panjang. Partner strategis yang luar biasa.",
		name: "— Martin Lee, Project Manager"
	}
];

export default function TestimonialCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
		Fade(),
		Autoplay({ delay: 6000, stopOnInteraction: false })
	]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="container mx-auto px-6 md:px-12 max-w-7xl py-32 relative flex flex-col justify-center items-center">
			<h2 className="text-4xl md:text-[3.5rem] font-bold mb-16 text-center">Testimonial</h2>

			<div className="relative w-full max-w-5xl mx-auto">
				{/* Embla Viewport */}
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex touch-pan-y">
						{testimonials.map((t) => (
							<div className="flex-[0_0_100%] min-w-0" key={t.id}>
								<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center px-4">
									<div className="flex-1 max-w-3xl mx-auto text-center md:text-left">
										<p className="text-slate-300 text-lg md:text-xl leading-loose mb-10 mx-auto opacity-90 transition-opacity duration-500">
											"{t.text}"
										</p>
										<div className="text-xl font-bold tracking-wide text-[#0ea5e9]">{t.name}</div>
									</div>
									<div className="hidden md:flex flex-shrink-0 opacity-20">
										{/* Large Quote Icons using SVGs */}
										<svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
											<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
										</svg>
										<svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-8">
											<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
										</svg>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Navigation Buttons */}
				<div className="flex justify-center md:justify-start gap-4 mt-12 md:mt-16 px-4 md:px-0">
					<button
						onClick={scrollPrev}
						className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-[#0ea5e9] hover:border-[#0ea5e9] transition-colors"
						aria-label="Previous testimonial"
					>
						&larr;
					</button>
					<button
						onClick={scrollNext}
						className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-[#0ea5e9] hover:border-[#0ea5e9] transition-colors"
						aria-label="Next testimonial"
					>
						&rarr;
					</button>
				</div>
			</div>
		</section>
	);
}
