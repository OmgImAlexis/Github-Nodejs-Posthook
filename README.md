Github Node.js Posthook
=============

Install
------------

``git clone https://github.com/OmgImAlexis/Github-Nodejs-Posthook.git post-hook/``

``cd post-hook``

``npm install``

``forever start /usr/local/bin/nodemon --exitcrash app.js``

Make sure to add your secret to the app.js file and change the repo lines to match your repo.
You'll need to add ``http://wvvw.me:3420/github/callback`` as a webhook for your repo with your secret in the secret section, content type should be ``application/json`` and you just need ``Just the push event`` selected under ``Which events would you like to trigger this webhook?``
