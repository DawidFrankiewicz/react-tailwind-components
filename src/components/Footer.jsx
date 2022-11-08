import React from 'react';
function Footer() {
	return (
		<footer className="bg-gray-800 text-white text-center py-4">
			<div className="container mx-auto">
				<ul>
					© 2022 Copyright Creators:
					<li>
						<a
							href="https://github.com/DawidFrankiewicz"
							className="hover:text-emerald-300"
						>
							Dawid Frankiewicz
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Mefiasty"
							className="hover:text-emerald-300"
						>
							Mateusz Harbuz
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
