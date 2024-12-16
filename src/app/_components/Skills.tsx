"use client";

import { motion } from "framer-motion";

import { SlideIn } from "@/components/Animations";
import skills from "@/app/_data/skills.json";

const Skills = () => (
	<motion.section
		className="py-48 px-8 max-w-8xl"
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 0.5, delay: 0.3 }}
	>
		<h2 className="pb-16 text-5xl md:text-6xl text-gray-300 font-bold md:tracking-widest">
			<SlideIn>Technological Skills</SlideIn>
		</h2>
		<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<li>
				<h3 className="text-4xl text-gray-400 font-bold py-4">
					<SlideIn>{skills[0].name}</SlideIn>
				</h3>
				{skills[0].points.map((skill, i) => (
					<SlideIn className="text-xl text-gray-500 tracking-widest" key={i}>
						{skill}
					</SlideIn>
				))}
			</li>
			<li>
				<h3 className="text-4xl text-gray-400 font-bold py-4">
					<SlideIn>{skills[1].name}</SlideIn>
				</h3>
				{skills[1].points.map((skill, i) => (
					<SlideIn className="text-xl text-gray-500 tracking-widest" key={i}>
						{skill}
					</SlideIn>
				))}
			</li>
			<li>
				<h3 className="text-4xl text-gray-400 font-bold py-4">
					<SlideIn>{skills[2].name}</SlideIn>
				</h3>
				{skills[2].points.map((skill, i) => (
					<SlideIn className="text-xl text-gray-500 tracking-widest" key={i}>
						{skill}
					</SlideIn>
				))}
			</li>
			<li>
				<h3 className="text-4xl text-gray-400 font-bold py-4">
					<SlideIn>{skills[3].name}</SlideIn>
				</h3>
				{skills[3].points.map((skill, i) => (
					<SlideIn className="text-xl text-gray-500 tracking-widest" key={i}>
						{skill}
					</SlideIn>
				))}
			</li>
			<li>
				<h3 className="text-4xl text-gray-400 font-bold py-4">
					<SlideIn>{skills[4].name}</SlideIn>
				</h3>
				{skills[4].points.map((skill, i) => (
					<SlideIn className="text-xl text-gray-500 tracking-widest" key={i}>
						{skill}
					</SlideIn>
				))}
			</li>
			<li>
				<h3 className="text-4xl text-gray-400 font-bold py-4">
					<SlideIn>{skills[5].name}</SlideIn>
				</h3>
				{skills[5].points.map((skill, i) => (
					<SlideIn className="text-xl text-gray-500 tracking-widest" key={i}>
						{skill}
					</SlideIn>
				))}
			</li>
		</ul>
	</motion.section>
);

export default Skills;
