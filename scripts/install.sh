#!/bin/bash
source ./scripts/ensure_remote_consistant.sh

SSH_ENV_VARS="PROJECT=${PROJECT} REPOSITORY=${REPOSITORY} PORT=${PORT} DOMAIN=${DOMAIN}"

echo 'Logging into server...'
ssh $DEPLOY_USER@$DEPLOY_SERVER "${SSH_ENV_VARS} bash -s" < ${DIR}/install_remote.sh
