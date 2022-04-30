#!/usr/bin/env bash

self=$(readlink -f "$0")
basedir=$(dirname "$self")

docker run --rm -it -p 8000:8000 -v ${basedir}:/docs ghcr.io/oliversalzburg/mkdocs-material-ex:main build --site-dir=public
