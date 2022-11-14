#!/usr/bin/env bash

# for each file in working index or staging area
# add CRLF if not present
# TODO(ace): git stripspace seems to handle this already, but doesn't cover EOF?
for f in $(git grep --cached -Il ''); do tail -c1 "$f" | read -r _ || echo >> "$f"; done
