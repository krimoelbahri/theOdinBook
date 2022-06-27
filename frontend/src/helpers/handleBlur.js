function handleBlur(e, onBlur) {
	const currentTarget = e.currentTarget;
	setTimeout(() => {
		if (!currentTarget.contains(document.activeElement)) {
			onBlur();
		}
	}, 0);
}

export default handleBlur;
