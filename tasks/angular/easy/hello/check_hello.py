from pathlib import Path
import re

html = Path("tasks/angular/easy/hello/src/app/app.component.html").read_text(encoding="utf-8")
match = re.search(r"<h1\b[^>]*>(.*?)</h1\s*>", html, re.IGNORECASE | re.DOTALL)
assert match and re.sub(r"\s+", " ", match.group(1)).strip() == "Hello, Angular!", (
    'Expected an <h1> containing "Hello, Angular!"'
)
print('Found <h1>Hello, Angular!</h1> in the Angular app template.')
