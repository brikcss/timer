/** ------------------------------------------------------------------------------------------------
 *  @filename  timer.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  Manage timers with start, stop, duration, and clear methods.
 ** --------------------------------------------------------------------------------------------- */

/**
 *  Timer constructor.
 */
function Timer() {
	const timer = this || {};

	// Dictionary of all timers.
	timer.all = {};

	// Start the timer.
	timer.start = (id) => {
		timer.all[id] = timer.all[id] || {};
		timer.all[id].start = Date.now();
		return timer.all[id];
	};

	// Stop the timer.
	timer.stop = (id) => {
		if (!timer.all[id]) return;
		timer.all[id].stop = Date.now();
		return timer.duration(id);
	};

	// Delete a timer.
	timer.clear = (id) => {
		if (!timer.all[id]) return;
		delete timer.all[id];
	};

	// Get the duration of a timer. Returns the duration from start to now if stop does not exist.
	timer.duration = (id) => {
		if (!timer.all[id]) return;
		const duration = (timer.all[id].stop || Date.now()) - timer.all[id].start;
		return duration > 999 ? duration / 1000 + 's' : duration + 'ms';
	};

	// Return the timer.
	return timer;
}

// -----------------
// Export the Timer.
//
export default Timer();
