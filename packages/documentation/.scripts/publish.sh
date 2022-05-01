#!/usr/bin/env bash

self=$(readlink -f "$0")
basedir=$(dirname "$self")

cd ${basedir}/../../..

docker run --rm -it -p 8000:8000 -v ${PWD}:/docs ghcr.io/oliversalzburg/mkdocs-material-ex:main gh-deploy --config-file packages/documentation/mkdocs.yml --force
