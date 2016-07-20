apt-get update
apt-get install -y git
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential nginx

rm -rf ~/${PROJECT}
mkdir -p ~/${PROJECT}
git clone ${REPOSITORY} ~/${PROJECT}
