# myprojects-http
This is the frontend for the myprojects project. Visit the backend repository [here](https://github.com/deejcoder/myprojects-api).

## deployment
First, build the nodejs project using yarn or npm. Transfer the contents of ./build to the remote server.
```bash
yarn build
```

For the remote server execute the following bash commands;
```bash
// move the built React project
mkdir -p /home/apps/myprojects/www
mv /path/to/build/* ./www

// install nginx & configure
apt-get install nginx
cd /etc/nginx/sites-available
touch ./{domain}
nano ./{domain}
// paste content provided in ./scripts/nginx
chmod +x /home/apps/myprojects/www && chown -R $USER:www-data /home/apps/myprojects/www

cd /etc/nginx/sites-enabled
ln -s ../sites-available/{domain} .
mkdir -p /home/apps/myprojects/logs/www
/etc/init.d/nginx restart
```

You should now be able to visit the web server by visiting http://{domain}:80

NOTE: before running yarn build, yarn install, yarn upgrade, then
$env:NODE_OPTIONS="--openssl-legacy-provider"
yarn build

