#!/bin/bash

# This script will sync local and remote git repositories
# TODO: use a depoyment branch maybe?

set -e

# hold the folder containing this particular file in the DIR var
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# load the environment
source ${DIR}/import_env.sh
source ${DIR}/check_env.sh

# Ensure git consitency
echo 'Checking out local master...'
git checkout master

LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})

# push remote if not consistent
if [ "${LOCAL}" != "${REMOTE}" ]; then
  git push
fi
