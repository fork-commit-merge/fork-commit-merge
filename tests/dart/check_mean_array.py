"""Regression check for tasks/dart/easy/mean_array.dart (issue #8563).

Checks that:
  * calculateMean is defined outside comments with the required signature,
  * it does not rely on Dart's built-in collection helpers,
  * the sample in main() is enabled and expects "Mean: 15.0",
  * calculateMean returns the correct mean when actually run with the Dart SDK.
"""
import os
import re
import shutil
import subprocess
import sys
import tempfile

PATH = "tasks/dart/easy/mean_array.dart"

# (input list, expected printed mean)
CASES = [
    ("[5, 10, 15, 20, 25]", "15.0"),
    ("[1, 2]", "1.5"),
    ("[-3, 3, 6]", "2.0"),
    ("[7]", "7.0"),
]


def strip_comments(src: str) -> str:
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    return re.sub(r"//[^\n]*", "", src)


def run_behaviour(function_src: str) -> int:
    dart = shutil.which("dart")
    if not dart:
        print("FAIL: dart SDK not found on PATH; cannot run calculateMean")
        return 1
    calls = "\n".join(
        f"  print('Mean: ' + calculateMean({inp}).toString());" for inp, _ in CASES
    )
    probe = f"{function_src}\n\nvoid main() {{\n{calls}\n}}\n"
    with tempfile.TemporaryDirectory() as tmp:
        probe_path = os.path.join(tmp, "probe.dart")
        with open(probe_path, "w", encoding="utf-8") as f:
            f.write(probe)
        proc = subprocess.run(
            [dart, "run", probe_path], capture_output=True, text=True, timeout=300
        )
    if proc.returncode != 0:
        print(f"FAIL: calculateMean did not run: {proc.stderr.strip()[-300:]}")
        return 1
    lines = [ln.strip() for ln in proc.stdout.splitlines() if ln.strip()]
    expected = [f"Mean: {exp}" for _, exp in CASES]
    if lines != expected:
        print(f"FAIL: calculateMean wrong output: got {lines}, expected {expected}")
        return 1
    return 0


def main() -> int:
    with open(PATH, encoding="utf-8") as f:
        raw = f.read()
    code = strip_comments(raw)

    sig = re.search(
        r"double\s+calculateMean\s*\(\s*List<int>\s+(\w+)\s*\)\s*\{", code
    )
    if not sig:
        print("FAIL: calculateMean not implemented as 'double calculateMean(List<int> name)'")
        return 1

    # Extract the function body by brace matching.
    start = sig.end()
    depth, i = 1, start
    while i < len(code) and depth:
        if code[i] == "{":
            depth += 1
        elif code[i] == "}":
            depth -= 1
        i += 1
    body = code[start:i]
    function_src = code[sig.start():i]

    banned = re.search(r"\.(reduce|fold|sum|average)\b|\bfold\(|\breduce\(", body)
    if banned:
        print(f"FAIL: calculateMean uses a built-in helper: {banned.group(0)}")
        return 1

    main_call = re.search(r"List<int>\s+data\s*=\s*\[5,\s*10,\s*15,\s*20,\s*25\];", raw)
    if not main_call or not re.search(r"^\s*print\('Mean: \$mean'\);", raw, re.M):
        print("FAIL: sample in main() is not enabled (expected Mean: 15.0 example)")
        return 1

    if run_behaviour(function_src) != 0:
        return 1

    print("OK: calculateMean is defined, returns correct means, and main() sample is enabled")
    return 0


if __name__ == "__main__":
    sys.exit(main())
