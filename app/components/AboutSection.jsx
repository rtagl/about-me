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
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>PostgreSQL</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul>
				<li>Boston University, Class of 2016</li>
				<li>Ironhack, 2019</li>
			</ul>
		),
	},
	{
		title: 'Hobbies',
		id: 'hobbies',
		content: (
			<ul>
				<li>Kite Surfing</li>
				<li>Soccer</li>
				<li>Alpine Hiking</li>
				<li>PostgreSQL</li>
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
				<Image src="/images/about-image.png" width={500} height={500} alt="About me section" />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, praesentium fuga
						voluptates cumque, hic aliquam sit quas in reprehenderit voluptatibus at ullam iure ex
						excepturi dolorum aut, mollitia molestias doloribus?
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
