#!/bin/bash
# bundle & watch client modules

rm -rvf ./client_bundled_modules/*;

source ./shell_scripts/local-machine-development-environment-variables.sh &&
webpack \
--watch \
--progress \
--mode development \
--config ./task_modules/client-modules-bundling-configuration.js;
