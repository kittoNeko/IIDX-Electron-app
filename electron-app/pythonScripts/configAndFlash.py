import json
# import subprocess
# import sys
# from notifypy import Notify
    
# def install(package):
#     subprocess.check_call([sys.executable, "-m", "pip", "install", package])
# install("notify-py")
# notification = Notify()
# notification.title = "Cool Title"
# notification.message = "Even cooler message."
# notification.send()
keys = []
rotation = []
with open("config.json") as json_data:
    d = json.load(json_data)
    for i in range(9):
        keys.append(d['keys'][i].get(str(i+1)))
    rotation.append(d['rotation'][0].get("up"))
    rotation.append(d['rotation'][1].get("down"))
lineNumber = 4
data = []
with open("./iidx-controller/config.h","r") as fp:
    for l_no, line in enumerate(fp):
        if 'buttons[]' in line:
            print('string found in a file')
            print('Line Number:', l_no)
            lineNumber = l_no
            break
    fp.close()
with open("./iidx-controller/config.h","r") as fp:
    data=fp.readlines()
if(lineNumber != 0):
    data[lineNumber]=f"const char button_keys[] = ['{keys[0]}','{keys[1]}','{keys[2]}','{keys[3]}','{keys[4]}','{keys[5]}','{keys[6]}','{keys[7]}','{keys[8]}'];\npyt"
    with open("./iidx-controller/config.h","w") as fp:
        fp.writelines(data)
        fp.close()