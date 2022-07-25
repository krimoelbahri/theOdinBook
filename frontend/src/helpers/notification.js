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
