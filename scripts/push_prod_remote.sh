cd ./${PROJECT}
WORKING_DIR=$(pwd)
echo 'Pulling down remote repo...'
git pull

echo 'Building app...'
npm i --only=production
npm run build

echo 'Applying preferances...'
chown -R ${PROJECT}:${PROJECT} ${WORKING_DIR}

echo 'Updating server config...'
sed "s/%{PROJECT}/${PROJECT}/;s/%{PORT}/${PORT}/;s/%{DOMAIN}/${DOMAIN}/" ${WORKING_DIR}/scripts/conf/nginx.conf > /etc/nginx/sites-available/${PROJECT}.conf

ln -f -s /etc/nginx/sites-available/${PROJECT}.conf /etc/nginx/sites-enabled
sed "s/%{PROJECT}/${PROJECT}/;s/%{PORT}/${PORT}/;s/%{DOMAIN}/${DOMAIN}/" ${WORKING_DIR}/scripts/conf/upstart.conf > /etc/init/${PROJECT}.conf

echo 'Restarting project...'
service ${PROJECT} restart
service nginx restart

echo 'Deployment complete'
exit
