import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComponentsData } from '../database/mongodb.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function componentDetailsDisplay() {
	const [isLoading, setIsLoading] = useState(true);
	const [componentData, setComponentData] = useState({});
	const [componentCode, setComponentCode] = useState('');
	// const [extraComponent, setExtraComponent] = useState('');
	// TODO pass data from ComponentsGrid.jsx to ComponentDetails.jsx via router, still load from db if no data passe

	const { id } = useParams();
	useEffect(() => {
		getComponentsData(id).then((data) => {
			// Not found error handling
			if (!data) return (window.location.href = '/NotFound');
			getCodeFromFile(data);
			setComponentData(data);
			setIsLoading(!isLoading);
		});
	}, []);

	async function getCodeFromFile(data) {
		const response = await fetch(`..${data.code_path}`);
		const code = await response.text();
		setComponentCode(code);
	}

	return (
		<div className="container mx-auto px-2">
			{isLoading ? (
				<div className="flex justify-center items-center my-14">
					<div className="animate-spin rounded-full h-32 w-32 border-b-4 border-react-blue"></div>
				</div>
			) : (
				<main className="my-14">
					<h1 className="font-bold text-red-600">
						{componentData.name}
					</h1>
					<img
						src={window.location.origin + componentData.thumbnail}
						alt={componentData.name}
					></img>
					<p className="font-bold text-blue-600">
						Description:
						<span className="font-thin text-gray-900">
							{componentData.description}
						</span>
					</p>
					{componentCode ? (
						<div>
							<p>Source Code</p>
							<SyntaxHighlighter
								language="jsx"
								className="my-5"
								style={docco}
							>
								{componentCode}
							</SyntaxHighlighter>
							<CopyToClipboard text={componentCode}>
								<button
									type="copy"
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								>
									Copy Code
								</button>
							</CopyToClipboard>
						</div>
					) : (
						<div className="flex flex-col w-full justify-center items-center my-14">
							<div className="animate-spin rounded-full h-32 w-32 border-b-4 border-react-blue"></div>
							<p className="mt-4 text-lg font-bold animate-pulse">
								Loading Code
							</p>
						</div>
					)}
				</main>
			)}
		</div>
	);
}
