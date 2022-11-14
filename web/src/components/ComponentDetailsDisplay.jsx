import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getComponentsData } from '../database/mongodb.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function componentDetailsDisplay() {
	const [isLoading, setIsLoading] = useState(true);
	const [componentData, setComponentData] = useState({});
	const [componentCode, setComponentCode] = useState('');

	// Get component id from url
	const { id } = useParams();
	// Get passed data from ComponentsGrid.jsx using Link
	const locationProps = useLocation().state;

	useEffect(() => {
		// If data was passed from ComponentsGrid.jsx, use that data
		if (locationProps) {
			setComponentData(locationProps);
			setIsLoading(!isLoading);
			if (locationProps.code_path) {
				getCodeFromFile(locationProps.code_path);
			} else {
				setComponentCode(null);
			}
		}
		// else get data from db
		else {
			// Get component data from db by Id passed
			getComponentsData(id).then((data) => {
				// Not found error handling
				if (!data) return (window.location.href = '/NotFound');
				// Set component data
				setComponentData(data);
				// Stop loading animation, display component
				setIsLoading(!isLoading);
				// If code path exists, load code from file
				if (data.code_path) {
					getCodeFromFile(data.code_path);
				} else {
					setComponentCode(null);
				}
			});
		}
	}, []);

	// Fetch code from file
	async function getCodeFromFile(path) {
		// fetcg file from path
		const response = await fetch(`..${path}`);
		if (response.ok) {
			// Get code/text from response
			const code = await response.text();
			// Set code to state, displays on page
			setComponentCode(code);
		} else {
			// handle error / displays nothing on page
			setComponentCode(null);
		}
	}

	return (
		<div className="container mx-auto px-2">
			{isLoading ? (
				<div className="flex justify-center items-center my-14">
					<div className="animate-spin rounded-full h-32 w-32 border-b-4 border-react-blue"></div>
				</div>
			) : (
				<main className="my-14">
					<div className="lg:flex gap-8">
						<div className="basis-1/3 grow">
							<h1 className="font-bold text-4xl text-indigo-600 mb-4 border-b-4 border-b-gray-600 inline-block pr-12 pb-2">
								{componentData.name}
							</h1>
							<p className="font-thin text-gray-700">
								{componentData.description}
							</p>
						</div>
						<div>
							<img
								src={
									window.location.origin +
									componentData.thumbnail
								}
								alt={componentData.name}
							/>
						</div>
					</div>
					{/* If null, do not display code part */}
					{componentCode !== null &&
						// if code exists, display code part, else display loading animation
						(componentCode ? (
							<div className="my-4">
								<div className="flex justify-between">
									<h2 className="text-2xl font-bold">
										Source Code
									</h2>
									<CopyToClipboard text={componentCode}>
										<button
											type="copy"
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
										>
											Copy
										</button>
									</CopyToClipboard>
								</div>
								<SyntaxHighlighter
									language="jsx"
									className="my-5"
									style={docco}
								>
									{componentCode}
								</SyntaxHighlighter>
							</div>
						) : (
							<div className="flex flex-col w-full justify-center items-center my-14">
								<div className="animate-spin rounded-full h-32 w-32 border-b-4 border-react-blue"></div>
								<p className="mt-4 text-lg font-bold animate-pulse">
									Loading Code
								</p>
							</div>
						))}
				</main>
			)}
		</div>
	);
}
