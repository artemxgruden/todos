#!/bin/bash
# run provider on local machine

source ./shell_scripts/local-machine-development-environment-variables.sh &&
nodemon \
./server_unbundled_modules/main.js;
