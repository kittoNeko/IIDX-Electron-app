import sys
import json
import os
import subprocess
if len(sys.argv) < 3:
    print("Usage: python flash_iidx.py <json_path> <port>", file=sys.stderr, flush=True)
    sys.exit(1)
json_path = sys.argv[1]
port = "COM3"
try:
    with open(json_path, encoding="utf-8") as f:
        keys = json.load(f)
    print(f"[INFO] Loaded keys: {keys}", file=sys.stderr, flush=True)
except Exception as e:
    print(f"[ERROR] Failed to load JSON: {e}", file=sys.stderr, flush=True)
    sys.exit(1)
config_path = "./pythonScripts/iidx-controller/config.h"
if not os.path.exists(config_path):
    print(f"[ERROR] Config file not found at {config_path}", file=sys.stderr, flush=True)
    sys.exit(1)
try:
    with open(config_path, "r", encoding="utf-8") as fp:
        lines = fp.readlines()
except Exception as e:
    print(f"[ERROR] Failed to read config.h: {e}", file=sys.stderr, flush=True)
    sys.exit(1)
lineNumber = None
for idx, line in enumerate(lines):
    if 'buttons[]' in line:
        lineNumber = idx
        print(f"[INFO] Found buttons[] at line {lineNumber}", file=sys.stderr, flush=True)
        break
if lineNumber is None:
    print("[ERROR] buttons[] line not found in config.h", file=sys.stderr, flush=True)
    sys.exit(1)
buttons_line = "const char button_keys[] = ["
buttons_line += ",".join([f"'{k}'" for k in keys[:9]])
buttons_line += "];\n"
lines[lineNumber] = buttons_line
try:
    with open(config_path, "w", encoding="utf-8") as fp:
        fp.writelines(lines)
    print("[INFO] Updated config.h successfully", file=sys.stderr, flush=True)
except Exception as e:
    print(f"[ERROR] Failed to write config.h: {e}", file=sys.stderr, flush=True)
    sys.exit(1)
sketch_path = "./pythonScripts/iidx-controller/iidx-controller.ino"
fqbn = "arduino:mbed_rp2040:rpipico"
try:
    print("[INFO] Compiling sketch...", file=sys.stderr, flush=True)
    subprocess.run([
        "arduino-cli", "compile", "--fqbn", fqbn, sketch_path
    ], check=True)
    print("[INFO] Compilation successful", file=sys.stderr, flush=True)
except subprocess.CalledProcessError as e:
    print(f"[ERROR] Compilation failed {e}", file=sys.stderr, flush=True)
    sys.exit(1)
try:
    print(f"[INFO] Flashing to {port} ...", file=sys.stderr, flush=True)
    subprocess.run([
        "arduino-cli", "upload", "-p", port, "--fqbn", fqbn, sketch_path
    ], check=True)
    print("[INFO] Upload successful", file=sys.stderr, flush=True)
except subprocess.CalledProcessError as e:
    print(f"[ERROR] Upload failed {e}", file=sys.stderr, flush=True)
    sys.exit(1)
output = {
    "status": "ok",
    "message": "Keys updated, sketch compiled and flashed successfully",
    "keys": keys
}
print(json.dumps(output), flush=True)
