cd ./${PROJECT}
WD=$(pwd)
echo 'Pulling down remote repo...'
git pull
npm i --only=production
npm run build
chown -R ${PROJECT}:${PROJECT} ${WD}
sed "s/%{PROJECT}/${PROJECT}/;s/%{PORT}/${PORT}/;s/%{DOMAIN}/${DOMAIN}/" ${WD}/scripts/conf/nginx.conf > /etc/nginx/sites-available/${PROJECT}.conf
# cp -f ${WD}/scripts/conf/nginx.conf /etc/nginx/sites-available/${PROJECT}.conf

ln -f -s /etc/nginx/sites-available/${PROJECT}.conf /etc/nginx/sites-enabled
# cp -f ${WD}/scripts/conf/upstart.conf /etc/init/${PROJECT}.conf
sed "s/%{PROJECT}/${PROJECT}/;s/%{PORT}/${PORT}/;s/%{DOMAIN}/${DOMAIN}/" ${WD}/scripts/conf/upstart.conf > /etc/init/${PROJECT}.conf
service ${PROJECT} restart
service nginx restart
exit
