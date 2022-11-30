#! /usr/bin/python

import yaml
import subprocess
from pathlib import Path

# Edit the path from /content
targetName = 'thesium'
contentPath = 'prose/thesium'
ymlFile = "/home/hughie/sites/hugle.uk/data/{}.yml".format(targetName)
mdFilePath = "/home/hughie/sites/hugle.uk/content/{}/".format(contentPath)
outputCollectionTmp = '/home/hughie/sites/hugle.uk/static/media/tmp/'
outputCollection = '/home/hughie/sites/hugle.uk/static/media/' + targetName + '.pdf'
imgmagickList = ''

with open(ymlFile, 'r') as file:
    ymlFile = yaml.safe_load(file)

for rec in ymlFile['menu']:
    title = rec['title']
    url = rec['url']
    fileName = Path(url).stem 

    # if fileName == 'intro':
    #     continue

    mdFile = mdFilePath + fileName + '.md'
    outputFile = outputCollectionTmp + fileName + '.pdf'

    # The 'ms' bit refers to a groff template which I've tweaked and
    # put in ~/.local/share/pandoc/templates/default.ms.
    cmd = "pandoc -s {} -t ms -o {}".format(mdFile, outputFile)
    subprocess.run([cmd], shell=True)

    # imagemagick input list. This is to remember all the files created
    # so as to feed them to imagemagick ('convert') after the loop ends.
    imgmagickList += outputFile + ' '


# Append new pdf to the main output file.
# Create the main output file first.
# cmd = "touch {}".format(outputCollection)
# subprocess.run([cmd], shell=True)

cmd = "convert {} {}".format(imgmagickList, outputCollection)
subprocess.run([cmd], shell=True)
