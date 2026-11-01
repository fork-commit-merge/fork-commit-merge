const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const script = fs.readFileSync(require('node:path').join(__dirname, 'script.js'), 'utf8');
let displayed = '';
let tick;
let intervalCleared = false;

vm.runInNewContext(script, {
  document: { getElementById: () => ({ set textContent(value) { displayed = value; } }) },
  setInterval: (callback, delay) => {
    assert.equal(delay, 1000);
    tick = callback;
    return 1;
  },
  clearInterval: () => { intervalCleared = true; },
});

assert.equal(displayed, '00:10', 'timer should display 00:10 immediately when countdown starts');
for (let seconds = 9; seconds >= 1; seconds -= 1) {
  tick();
  assert.equal(displayed, `00:${String(seconds).padStart(2, '0')}`);
}
tick();
assert.equal(displayed, "Time's up!");
assert.equal(intervalCleared, true);
