# Base Template

This is a template for deployment of a basic ES2016 app to an Ubuntu 14.04 VPS.

The app has the following things:

* Node
* ES2016 via Babel
* Express
* Webpack
* React
* React Hot Loader
* Linting with ESLint
* Handy scripts to deploy to vanilla Ubuntu VPS servers.

# *DISCLAIMER*

*I built this as a base template for setting up a simple Node app as I was sick of mucking around with doing this over and over again.*

*I am not a highly trained server admin and there will certainly be faults with my code or things that can be done better or things that make sense for an app with higher scalability concerns. If you have any ideas as to how this template could be included be awesome and let me know or submit a pull request!*

*This however works for my most basic common usecase that I get from my clients which is a node app hosted on a single VPS with basic git hosted scripts for deploying.*

*This may be written in the future with ansible. However for now, and for this usecase, bash scripts work fine.*

# Development

## Prereq: Install ESLint

```bash
npm install -g eslint
```

## Prereq: Use correct Node version
Use [avn](https://github.com/wbyoung/avn) with whatever manager you choose so your terminal will pick the correct version of node to use from the `.node-version` file.

## Install the deps

```bash
npm i
```

## Start the server

```bash
npm run dev
```

This will start watching your code for changes and recompiling and restarting the server for only the bits you change.

# Deploying to a server

### Environment file

Create an `.env` file with your server credentials.

```bash
cat .env.example > .env
```

An example is included:

```bash
DEPLOY_SERVER=123.45.67.89
DEPLOY_USER=root
PORT=3456
PROJECT=myproject
REPOSITORY=git@bitbucket.org:ryardley/myproject.git
DOMAIN=myproject.com
```

### Deployment Keys
Login to your new VPS.

If there are no keys then generate some copy to your clipboard somehow. Eg.

```bash
ssh-keygen -t rsa -b 4096 -C "deployment" && cat ~/.ssh/id_rsa.pub
```

Now add the key as a deployment key in your git host.

### Install

```bash
npm run remote-install
```

This should prepare everything on the server.

### Push your code

Push the code.

```bash
npm run push
```

# TODO

* Make fractal modular
* Make sure a non root deploy user works as it probably currently does not.
* (maybe) Use a specific deploy branch within git.
* Add a pure css launch page
