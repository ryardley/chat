apt-get update
apt-get install -y git
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential

mkdir ~/${PROJECT}
git clone ${REPOSITORY} ~/${PROJECT}
