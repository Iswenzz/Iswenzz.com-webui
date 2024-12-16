import { BsDiscord, BsGithub, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => (
	<footer className="flex flex-wrap items-center justify-center md:justify-between p-4">
		<ul className="flex items-center justify-center gap-4">
			<li className="tooltip tooltip-top" data-tip="Email">
				<Link
					className="btn btn-ghost btn-circle shadow-lg bg-black/15"
					href="mailto:alexisnardiello@gmail.com"
					aria-label="Contact me"
				>
					<MdEmail className="text-gray-400 " size={24} />
				</Link>
			</li>
			<li className="tooltip tooltip-top" data-tip="GitHub">
				<Link
					className="btn btn-ghost btn-circle shadow-lg bg-black/15"
					href="https://github.com/iswenzz"
					aria-label="GitHub page"
					target="_blank"
				>
					<BsGithub className="text-gray-400" size={24} />
				</Link>
			</li>
			<li className="tooltip tooltip-top" data-tip="YouTube">
				<Link
					className="btn btn-ghost btn-circle shadow-lg bg-black/15"
					href="https://www.youtube.com/c/iswenzz"
					aria-label="Youtube channel"
					target="_blank"
				>
					<BsYoutube className="text-red-400" size={24} />
				</Link>
			</li>
			<li className="tooltip tooltip-top" data-tip="Iswenzz">
				<div className="btn btn-ghost btn-circle shadow-lg bg-black/15">
					<BsDiscord className="text-indigo-400" size={24} />
				</div>
			</li>
		</ul>
		<span className="p-2 text-lg tracking-widest">
			Copyright © Iswenzz {new Date().getFullYear()}
		</span>
	</footer>
);

export default Footer;
