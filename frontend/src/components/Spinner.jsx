import React from "react";

function Spinner({ pos, top }) {
	return (
		<i
			style={{
				position: pos ? pos : "absolute",
				left: pos ? 0 : "50%",
				top,
				fontSize: "xx-large",
				color: "cornflowerblue",
			}}
			className='fa-solid fa-circle-notch fa-spin'
		></i>
	);
}

export function Loading({ pos }) {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				position: pos ? pos : "absolute",
				top: "calc(40vh)",
				fontSize: "xx-large",
				color: "cornflowerblue",
			}}
		>
			<i className='fa-solid fa-l fa-flip' />
			<i className='fa-solid fa-o fa-flip' />
			<i className='fa-solid fa-a fa-flip' />
			<i className='fa-solid fa-d fa-flip' />
			<i className='fa-solid fa-i fa-flip' />
			<i className='fa-solid fa-n fa-flip' />
			<i className='fa-solid fa-g fa-flip' />
		</div>
	);
}

export default Spinner;
