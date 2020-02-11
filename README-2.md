# présentation des plugins
# partie 2 : dév en continue webpack-dev-server + modification d'une page html

# // supprime tous les fichiers du répertoire dist sans pour autant supprimer ce dossier 
npm i -D clean-webpack-plugin

# modifier le fichier de configuration webpack.conf.js pour faire foncionner cleanwepackplugin
lire la doc npm

# Conf et output management
# expliquer les mode de compilation : https://webpack.js.org/configuration/mode/

# installer HtmlWebpackPlugin

npm i -D html-webpack-plugin

# modifier le fichier de configuration webpack.conf.js pour faire foncionner HtmlWebpackPlugin
lire la doc npm

# installer le  webpack-dev-server
npm i -D webpack-dev-server 

# modifier package.json pour rajouter le script start
"start": "webpack-dev-server --config webpack.config.js --open --mode development",

# modifier le fichier html et constater la prise en compte des modif à la volé

# installer manifest plugin 
npm install --save-dev webpack-manifest-plugin
# configurer le plugin manifest
