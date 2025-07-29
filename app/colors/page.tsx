'use client';

import { useEffect, useState } from 'react';

const colorVariables = ['A', 'B', 'C', 'D', 'E'];

const Colors = () => {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	const getCSSVariable = (name: string) => {
		if (!isClient) return;
		const root = document.documentElement;
		const styles = getComputedStyle(root);
		const value = styles.getPropertyValue(name);
		return value;
	};

	const setCSSVariable = (name: string, value: string) => {
		if (!isClient) return;
		const root = document.documentElement;
		root.style.setProperty(name, value);
	};

	return (
		<section id='colors'>
			<button onClick={() => setCSSVariable('--A-hue', '220')}>Click</button>
			{colorVariables.map((color, idx) => (
				<ul key={`${color}-colors`}>
					<li className={`bg-${color}`}>
						<span className='text-white font-bold text-lg underline underline-offset-4'>Color {idx + 1}</span>
						<span>Variable: --{color}-hue</span>
						<span>Value: {getCSSVariable(`--${color}-hue`)}</span>
					</li>
					<li className={`bg-${color}-50`}>
						<span className='text-black'>bg-{color}-50</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-100`}>
						<span className='text-black'>bg-{color}-100</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-200`}>
						<span className='text-black'>bg-{color}-200</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-300`}>
						<span className='text-black'>bg-{color}-300</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-400`}>
						<span className='text-black'>bg-{color}-400</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-500`}>
						<span className='text-white'>bg-{color}-500</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-600`}>
						<span className='text-white'>bg-{color}-600</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-700`}>
						<span className='text-white'>bg-{color}-700</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-800`}>
						<span className='text-white'>bg-{color}-800</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
					<li className={`bg-${color}-900`}>
						<span className='text-white'>bg-{color}-900</span>
						<span className='text-white'>text-white</span>
						<span className='text-black'>text-black</span>
					</li>
				</ul>
			))}
		</section>
	);
};

export default Colors;
