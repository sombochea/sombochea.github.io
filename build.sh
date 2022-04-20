#!/bin/sh -e

docker build . -t registry.ctdn.net/sombochea-github-io:latest

docker push registry.ctdn.net/sombochea-github-io:latest