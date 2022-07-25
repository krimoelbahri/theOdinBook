import React from "react";

function Spinner() {
	return (
		<i
			style={{
				position: "absolute",
				left: "50%",
				fontSize: "xx-large",
				color: "cornflowerblue",
			}}
			className='fa-solid fa-circle-notch fa-spin'
		></i>
	);
}

export default Spinner;
