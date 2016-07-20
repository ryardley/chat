#!/bin/bash
source './ensure_remote_consistant.sh'

echo 'Logging into server...'
ssh $DEPLOY_USER@$DEPLOY_SERVER "PROJECT=${PROJECT} REPOSITORY=${REPOSITORY} bash -s" < ${DIR}/remote_install.sh
