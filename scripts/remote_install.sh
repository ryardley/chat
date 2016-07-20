apt-get update
apt-get install -y git
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential nginx
groupadd ${PROJECT}
useradd -G ${PROJECT} ${PROJECT}

ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts

rm -rf ~/${PROJECT}
mkdir -p ~/${PROJECT}

git clone ${REPOSITORY} ~/${PROJECT}
