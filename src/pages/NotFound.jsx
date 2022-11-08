import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className="container mx-auto text-center py-10">
			<h1 className="text-6xl font-bold">Error 404</h1>
			<h2 className="text-3xl font-bold">Page not found</h2>
			<Link
				to="/"
				className="bg-slate-600 text-white p-2 mt-10 rounded-md inline-block"
			>
				Home
			</Link>
		</div>
	);
}
