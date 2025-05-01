# Descarregar e instalar a nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# Em vez de reiniciar a concha ou shell
\. "$HOME/.nvm/nvm.sh"

# Descarregar e instalar a Node.js:
nvm install 22

# Consultar a versão da Node.js:
node -v # Deveria imprimir "v22.15.0".
nvm current # Deveria imprimir "v22.15.0".

# Consultar a versão da npm:
npm -v # Deveria imprimir "10.9.2".


npm install
npm run build

