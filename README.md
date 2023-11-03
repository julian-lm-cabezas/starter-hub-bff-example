# starter-hub-bff-example

![version](https://badgen.net/badge/version/1.0.0/cyan)
![licence](https://badgen.net/badge/licence/ISC/gray)

NodeJS BFF REST api for Ping authentication

## Frameworks

![nestjs](https://badgen.net/badge/nestjs/10.0.0/gray)
![jest](https://badgen.net/badge/jest/29.5.0/red)

<a href="https://docs.nestjs.com/" title="Vue3"><img src="https://docs.nestjs.com/assets/logo-small.svg" width="120" height="60"/></a>
<a href="https://jestjs.io/es-ES/" title="Jest"><img src="https://camo.githubusercontent.com/25e63e3a805b70ec042ed7109f576df0f4cfacee682bb7193c65b11151c86bdd/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f74657374696e672d72656163742d776974682d6a6573742f6c6f676f2e706e67" width="50" height="50"/></a>

##### Table of Contents  
- [Functions](#functions)
- [Requirements](#requirements)
- [Common Setup](#common-setup)
  - [Instalation](#instalation)
  - [Run app](#run-app)
- [Configuration](#configuration)
  - [Environment variables](#enviroment-variables)
- [Tests](#tests)
  - [Unit tests](#unit-test)

## Functions

- validate user authentication & redirection through PingID
- Determine user role
- Proxy request calls to Backend API

## Requirements

- Node 18
- Git

## Common Setup

### Instalation

- Clone the repo and install dependencies

```bash
npm install
```

### Run app
```
npm start
```
- API serviced on http://localhost:3000

## Configuration

- proyect dependencies found in package.json
- Docker configuration for kubernetes deploy found in DockerFile
- enviroment variables found in /config/environment.js

### Enviroment variables

| Variable             |     Definition                       |
| :------------------- | :----------------------------------- |
| NODE_ENV             | Enviroment definition                |
| PORT                 | port used to expose this app         |
| LOG_LEVEL            | log level priority                   |
| HOST                 | Endpoit to this API                  |
| API_URL              | Endpoit to backend API               |
| WEB_URL              | Endpoit to frontend                  |
| PING_URL             | Endpoint to PingID                   |
| PING_CLIENT_ID       | PingID client id                     |
| JWT_SECRET           | JWT signature for cookie             |
| REDIRECT_PATH        | path for PingID callback             |
| COOKIE_NAME          | cookie name definition               |
| COOKIE_DOMAIN        | Cookie domain                        |
| COOKIE_EXP           | Cookie expiracy in miliseconds       |
| NO_CACHE             | Ping Redirect flag to clear session  |

## Tests

### Unit tests

Unit tests done with [Jest](https://jestjs.io/). 
Run your unit tests

```
npm test
```
* test reports generated in **lcov** format for sonar integration
* coverage generated locally in **/tests/coverage** folder

