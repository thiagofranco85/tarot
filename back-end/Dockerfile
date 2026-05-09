FROM node:20-alpine

WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (para cache)
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia todo o código fonte
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Define variáveis de ambiente para melhor funcionamento do tsx watch
ENV TSX_TSCONFIG_PATH=./tsconfig.json
ENV CHOKIDAR_USEPOLLING=true

# Comando padrão - vai ser sobrescrito pelo docker-compose
CMD ["npm", "run", "dev"]