export function validateImgWidth(file) {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	const promise = new Promise((resolve, reject) => {
		reader.onload = (e) => {
			const image = new Image();
			image.src = e.target.result;
			image.onload = (e) => {
				const height = e.target.height;
				const width = e.target.width;
				let ratio = width / height;
				if (ratio > 3 || ratio < 2) {
					resolve(false);
				}
				resolve(true);
			};
			image.onerror = reject;
		};
		reader.onerror = reject;
	});
	return promise;
}
