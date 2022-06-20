import { useRef, useEffect, useState } from "react";

export const useElementOnScreen = (options) => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(true);

	const callbackFunction = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	};

	useEffect(() => {
		let ref = containerRef.current;
		const observer = new IntersectionObserver(callbackFunction, options);
		if (ref) observer.observe(ref);

		return () => {
			if (ref) observer.unobserve(ref);
		};
	}, [containerRef, options]);

	return [containerRef, isVisible];
};
