
# deploy a new server these steps need to be done
ssh-keygen -t rsa -b 4096 -C "deployment server" && cat ~/.ssh/id_rsa.pub
# now copy the ssh key from the terminal and paste into your deploy keys window on your git host


# to setup dev env you need to do this
npm install -g eslint
