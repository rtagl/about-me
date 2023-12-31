'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hey, I&apos;m{' '}
						</span>
						<div className="mt-3">
							<TypeAnimation
								sequence={[
									// Same substring at the start will only be typed out once, initially
									'Riccardo',
									Infinity,
								]}
								wrapper="span"
								speed={20}
								repeat={Infinity}
							/>
						</div>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Web Developer | Creative Problem Solver | Strategic Thinker
					</p>
					<div>
						<a
							href="/CV_Taglietti_Riccardo.pdf"
							download="CV_Taglietti_Riccardo.pdf"
							target="_blank">
							<button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-transparent hover:bg-slate-800 mt-3">
								<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
									Download CV
								</span>
							</button>
						</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative">
						<Image
							src="/images/coder-image.png"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="hero image"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
