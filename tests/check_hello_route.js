// Static regression check for the Django "Hello, World!" task.
// Reads the task files as text, so it runs without Python/Django installed.
// Usage: node tests/check_hello_route.js [repo-root]

const fs = require('fs');
const path = require('path');

const root = process.argv[2] || '.';
const base = path.join(root, 'tasks', 'django', 'easy', 'hello_world');
const urlsFile = path.join(base, 'hello_world', 'urls.py');
const viewsFile = path.join(base, 'hello_world_app', 'views.py');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function check(name, ok, detail) {
  if (!ok) {
    console.error(`FAIL: ${name}: ${detail}`);
    process.exit(1);
  }
}

const urls = read(urlsFile);
const views = read(viewsFile);

check(
  'hello route',
  /path\(\s*['"]hello\/['"]\s*,\s*hello_world\s*\)/.test(urls),
  `expected path('hello/', hello_world) in ${urlsFile}`
);

check(
  'hello view',
  /return\s+HttpResponse\(\s*['"]Hello, World!['"]\s*\)/.test(views),
  `expected return HttpResponse("Hello, World!") in ${viewsFile}`
);

console.log("PASS: /hello route and hello_world view return 'Hello, World!'");
