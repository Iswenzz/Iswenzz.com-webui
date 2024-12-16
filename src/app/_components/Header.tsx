import { SlideIn } from "@/components/Animations";

const Header = () => (
	<section className="relative h-screen flex flex-col items-center justify-center px-8">
		<div className="absolute size-1/2 top-20 left-0 blur-[100px] bg-[conic-gradient(from_2.5rad,#ff0042,#0000ff)]" />
		<h1 className="text-7xl md:text-8xl font-bold tracking-wide z-10 pb-4">
			<SlideIn>Alexis Nardiello</SlideIn>
		</h1>
		<h2 className="text-4xl md:text-5xl tracking-widest z-10">
			<SlideIn>Software Engineer</SlideIn>
		</h2>
	</section>
);

export default Header;
