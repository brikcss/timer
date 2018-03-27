/* eslint-env mocha */
const assert = require('assert');
const timer = require('../dist/lib/timer.js');

describe('{timer}', () => {
	it('runs a timer with start, stop, duration, and clear methods', function(done) {
		const name = 'test';
		timer.start(name);
		setTimeout(() => {
			timer.stop(name);
			const duration = timer.duration(name);
			assert.ok(timer.all[name].start, 'start time should exist');
			assert.ok(timer.all[name].stop, 'stop time should exist');
			assert.ok(
				parseInt(duration, 10) >= 100 && parseInt(duration, 10) < 110,
				`duration should be between 100ms and 110ms (${duration}).`
			);
			assert.equal(typeof timer.all[name], 'object', 'timer should be an object');
			timer.clear(name);
			assert.equal(timer.all[name], undefined, 'cleared timer should be undefined');
			done();
		}, 100);
	});
});
