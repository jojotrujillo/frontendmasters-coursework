FROM mcr.microsoft.com/devcontainers/typescript-node:18
# Uncomment the following commands if you're using at work
# COPY certs/ca-bundle.crt /usr/local/share/ca-certificates/ca-bundle.crt
# RUN update-ca-certificates
# RUN npm config set cafile=/usr/local/share/ca-certificates/ca-bundle.crt --global
RUN apt update && apt upgrade -y
RUN curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | bash
