#!/bin/bash

echo "Stop GIT server container"
docker stop git_server || true && docker rm git_server || true

if [[ "$(docker images -q git_server 2> /dev/null)" == "" ]]; then
    echo "GIT Server image already exists"
    echo "Deleting GIT Server image"
    docker rmi git_server -f 
fi

echo "Build GIT Server image"
docker build -t git_server .