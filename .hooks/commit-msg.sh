#!/bin/bash

COMMIT_MESSAGE_CONTENT=$(cat $1)

if ! [[ $COMMIT_MESSAGE_CONTENT =~ ^(feat|fix|docs|style|refact|perf|test|chore)\(([a-z/\-_#]+)\):\ (.*) ]] ; then
    echo "does not match \"<type>(<scope>): <subject>\" ! was: ${COMMIT_MESSAGE_CONTENT}"
    exit 1
fi
