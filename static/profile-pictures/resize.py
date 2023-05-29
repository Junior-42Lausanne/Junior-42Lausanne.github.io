from PIL import Image
import os, sys

# get all pictures in the folder
paths = os.listdir("./")

for path in paths:
    if path.endswith(".png"):
        print(path)
        im = Image.open(path)
        width, height = im.size
        if width == 200 and height == 200:
            continue
        newsize = (200, 200)
        im1 = im.resize(newsize)
        im1.save(path)
