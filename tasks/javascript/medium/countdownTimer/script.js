document.addEventListener('DOMContentLoaded', function () {
	const timerEl = document.getElementById('timer');
	if (!timerEl) return;

	let totalSeconds = 10;

	function formatTime(seconds) {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
	}

	timerEl.textContent = formatTime(totalSeconds);

	const intervalId = setInterval(() => {
		totalSeconds -= 1;
		if (totalSeconds > 0) {
			timerEl.textContent = formatTime(totalSeconds);
		} else {
			timerEl.textContent = "Time's up!";
			clearInterval(intervalId);
		}
	}, 1000);
});
