## 01/-init 
# présenter webpack , webpack.config.js, entry/output,script de cmd ,  import ...
# création du fichier package.json
npm init -y

# installer le package webpack
npm install -save-dev webpack  webpack-cli

# créer le fichier index.js sous le répertoire src
mkdir src
type NUL > ./src/index.js

# Dans le fichier index.js ,rajouter ce qui suit :
console.log('tutorial');

# Dans le fichier package.json , rajouter dans la section script , la clé valeur "webpack":"wepack"
npm run webpack

# noter les alertes de sortie de la commande exécuter

# rajouter les mode de compilation
# Dans le fichier packgae.json , rajouter dans le section script, les clés/valeurs 

 "dev":"webpack --mode development",
 "prod":"webpack --mode production"

 # remarquer le contenu du fichiers main.js dans le repertoire main.js

 # Integration continue
 # Dans le fichier packgae.json , rajouter dans le section script, les clés/valeurs 
 "dev:debug":"webpack --mode development --watch"

 # modifier le fichier index.js , constater le chagement en utilisant la commande :

 node ./dist/main.js

 # présenter les modules : import /require etc..
 
