#!/bin/bash
# requires npm
exec < /dev/tty && npx cz --hook || true
