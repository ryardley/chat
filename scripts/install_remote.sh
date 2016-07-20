echo 'Update apt cache...'
apt-get update

echo 'Installing prerequisites...'
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y git ufw nodejs build-essential nginx

echo 'Setting up firewall...'
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw --force enable

echo 'Setup groups...'
groupadd ${PROJECT}
useradd -g ${PROJECT} ${PROJECT}

echo 'Setup hosts...'
ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts
ssh-keyscan github.com >> ~/.ssh/known_hosts

echo 'Creating project folders...'
cd ~
rm -rf /var/www/${PROJECT}
mkdir -p /var/www/${PROJECT}
ln -s /var/www/${PROJECT}

echo 'Cloning repository...'
git clone ${REPOSITORY} ~/${PROJECT}

