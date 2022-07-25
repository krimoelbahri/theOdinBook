import { showNotification } from "@mantine/notifications";
export function errorNotification(error, id) {
	showNotification({
		id,
		disallowClose: false,
		title: "ERROR",
		message: error,
		color: "red",
		icon: <i className='fa-solid fa-xmark' />,
		radius: "md",
	});
}
export function successNotification(message, id) {
	showNotification({
		id,
		disallowClose: false,
		title: "Success",
		message,
		icon: <i className='fa-solid fa-check' />,
		radius: "md",
	});
}
