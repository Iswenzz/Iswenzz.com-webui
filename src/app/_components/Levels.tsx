import { FadeIn, SlideIn } from "@/components";

import levels from "../_data/levels.json";

import Level from "./Level";

const Levels = () => (
	<FadeIn id="levels" className="relative py-24 px-8">
		<div className="absolute size-1/2 top-20 left-0 blur-[100px] bg-[conic-gradient(from_2.5rad,#ff0042,#0000ff)]" />
		<h2 className="relative pb-16 text-5xl md:text-6xl">
			<SlideIn>Level Design</SlideIn>
		</h2>
		<div className="grid md:grid-cols-5 md:gap-8">
			<div className="grid md:col-span-3">
				<Level level={levels[0]} />
			</div>
			<div className="grid md:col-span-2">
				<Level level={levels[1]} />
			</div>
		</div>
		<div className="grid md:grid-cols-5 md:gap-8">
			<div className="grid md:col-span-2">
				<Level level={levels[2]} />
			</div>
			<div className="grid md:col-span-3">
				<Level level={levels[3]} />
			</div>
		</div>
		<div className="grid md:grid-cols-5 md:gap-8">
			<div className="grid md:col-span-3">
				<Level level={levels[4]} />
			</div>
			<div className="grid md:col-span-2">
				<Level level={levels[5]} />
			</div>
		</div>
	</FadeIn>
);

export default Levels;
