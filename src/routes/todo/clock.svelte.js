export const clock = $state({
	time: new Date().toLocaleTimeString(),
});

setInterval(() => (clock.time = new Date().toLocaleTimeString()), 1000);
