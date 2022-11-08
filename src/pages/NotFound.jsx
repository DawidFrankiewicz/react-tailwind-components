export default function NotFound() {
	return (
		<div className="container mx-auto text-center py-10">
			<h1 className="text-6xl font-bold">Error 404</h1>
			<h2 className="text-3xl font-bold">Page not found</h2>
			<button
				onClick={() => {
					window.location.href = '/';
				}}
				className="bg-slate-600 text-white p-2 mt-10"
			>
				Home
			</button>
		</div>
	);
}
