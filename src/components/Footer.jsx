import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
	return (
		<footer className="bg-gray-800 text-white text-center py-4 mt-20">
			<div className="container mx-auto">
				<ul>
					© 2022 Copyright | Creators:
					<li>
						<a
							href="https://github.com/DawidFrankiewicz"
							className="hover:text-emerald-300 text-react-blue"
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							Dawid Frankiewicz
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Mefiasty"
							className="hover:text-emerald-300"
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
