import React from "react";

function Spinner({ pos }) {
	return (
		<i
			style={{
				position: pos ? pos : "absolute",
				left: pos ? 0 : "50%",
				fontSize: "xx-large",
				color: "cornflowerblue",
			}}
			className='fa-solid fa-circle-notch fa-spin'
		></i>
	);
}

export default Spinner;
