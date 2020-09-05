#!/bin/bash
# bundle client modules

webpack \
--mode production \
--config ./task_modules/client-modules-bundling-configuration.js;
