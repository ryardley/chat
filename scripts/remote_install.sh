apt-get update
apt-get install -y git
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential nginx
groupadd ${PROJECT}
useradd -g ${PROJECT} ${PROJECT}

ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts

cd ~
rm -rf /var/www/${PROJECT}
mkdir -p /var/www/${PROJECT}
ln -s /var/www/${PROJECT}

git clone ${REPOSITORY} ~/${PROJECT}
