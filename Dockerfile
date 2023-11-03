FROM adeo-docker.jfrog.io/eslm/eslm-infragcp/lmes-adeo-docker-base-images/node-16:1.2.0

WORKDIR /usr/src/app

COPY dist/ ./dist/
COPY node_modules/ ./node_modules/
COPY package.json ./package.json

ENTRYPOINT ["sh", "-c", ". /opt/vault_secrets/secrets.env && npm run launch"]
