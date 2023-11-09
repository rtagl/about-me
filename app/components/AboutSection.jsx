'use client';
import { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className="list-disc pl-2">
				<li>React & Next.js</li>
				<li>Node.js</li>
				<li>Rest APIs</li>
				<li>CSS Styling</li>
				<li>Databases</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className="list-disc pl-2">
				<li>Boston University, Class of 2016</li>
				<li>Ironhack, 2019</li>
			</ul>
		),
	},
	{
		title: 'Hobbies',
		id: 'hobbies',
		content: (
			<ul className="list-disc pl-2">
				<li>Kite Surfing</li>
				<li>Soccer</li>
				<li>Hiking</li>
				<li>Guitar</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image src="/images/about-me-panel.png" width={500} height={500} alt="About me section" />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I&apos;m eager to collaborate alongside a talented team to create innovative solutions,
						tackle complex challenges, and deliver user-friendly experiences. The opportunity to
						contribute to the development of cutting-edge web apps that can have a meaningful impact
						on users is my driving motivation.
					</p>
					<div className="flex flex-row mt-8">
						<TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
							Skills
						</TabButton>
						<TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
							Education
						</TabButton>
						<TabButton selectTab={() => handleTabChange('hobbies')} active={tab === 'hobbies'}>
							Hobbies
						</TabButton>
					</div>
					<div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
