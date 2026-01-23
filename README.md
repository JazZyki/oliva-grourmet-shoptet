# Gulp task runner

It compiles SCSS, minifies JS files and uploads them FTPs server, on whitch runs Shoptet instalation. It ensure better work with scss and Vanilla JS on Shoptet templates.


**Steps to go:**
 - 1 clone the repo
 - 2 in project folder run `npm install` to install all packages needed to compile files
 - 3 create .env file which include:
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            pass: process.env.FTP_PASS,
            remotePath: process.env.FTP_PATH || '/',
    and fill FTP_HOST, FTP_USER, FTP_PASS and the FTP_PATH to your template files
 - 4 run the gulp process with 'npm gulp watchDeploy'
 - 5 Happy coding