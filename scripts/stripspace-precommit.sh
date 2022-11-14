#!/usr/bin/env bash

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If there are whitespace errors, print the offending file names and fail.
# Find files with trailing whitespace
for FILE in `exec git diff-index --check --cached $against -- | sed '/^[+-]/d' | sed -r 's/:[0-9]+:.*//' | uniq` ; do
    # Fix them!
    git stripspace < "$FILE" | sponge "$FILE"
	git add "$FILE"
done
