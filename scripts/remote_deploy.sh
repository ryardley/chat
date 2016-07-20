cd ./${PROJECT}
WD=$(pwd)
echo 'Pulling down remote repo...'
git pull
npm i
npm build
chown -R ${PROJECT}:${PROJECT} ${WD}/*
cp -f ${WD}/scripts/conf/nginx.conf /etc/nginx/sites-available/${PROJECT}.conf
ln -f -s /etc/nginx/sites-available/${PROJECT}.conf /etc/nginx/sites-enabled
cp -f ${WD}/scripts/conf/upstart.conf /etc/init/${PROJECT}.conf
service ${PROJECT} restart
service nginx restart
exit
