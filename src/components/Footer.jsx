import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-4 mt-20">
			<div className="container mx-auto px-2 flex gap-3 flex-col sm:flex-row items-center justify-center sm:justify-between">
				<a
					href="https://github.com/DawidFrankiewicz/react-tailwind-components"
					target="_blank"
					className="hover:text-react-blue inline-flex items-center text-2xl font-bold"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faGithub}
						size="4x"
						className="mr-5"
					/>
					Project
				</a>
				<ul className="text-center sm:text-right">
					© 2022 Copyright | Creators
					<li>
						<a
							href="https://github.com/DawidFrankiewicz"
							target="_blank"
							className="hover:text-react-blue"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							Dawid Frankiewicz
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Mefiasty"
							target="_blank"
							className="hover:text-react-blue"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							Mateusz Harbuz
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
