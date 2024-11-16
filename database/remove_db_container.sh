#!/bin/bash

if ! command -v docker-compose &> /dev/null; then
    echo "Docker is not installed or not in the PATH."
    exit 1
fi

docker stop local_mongodb
docker rm local_mongodb