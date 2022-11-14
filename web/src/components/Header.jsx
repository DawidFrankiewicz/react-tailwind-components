import reactLogo from '../assets/img/react.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4 rounded-b-lg shadow-md container mx-auto">
			<div>
				<Link
					to={'/'}
					className="text-5xl font-black inline bg-clip-text text-transparent bg-gradient-to-br from-react-blue to-indigo-700"
				>
					D&M
				</Link>
			</div>
			<div className="flex items-center gap-4">
				<h1 className="font-bold text-xl lg:text-3xl">
					TailwindCSS Components for
					<span className="text-react-blue font-black"> React</span>
				</h1>
				<img
					src={reactLogo}
					className="animate-spin [animation-duration:12s] logo react h-auto w-10"
					alt="React logo"
				/>
			</div>
		</header>
	);
}
