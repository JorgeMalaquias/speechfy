<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Endpoints

### GET '/api/user/:userId'

Este endpoint retorna os dados de um usuário, dado o 'userId' via params na requisição. Os dados são retornados no seguinte formato:

```json
{
  "id": "someStringAsTheUserId",
  "name": "someStringAsTheUserName",
  "photoUrl": "someStringAsThePhotoUrl"
}
```

Nenhum usuário é retornado caso o id passado não pertença à nenhum usuário.

### POST '/api/user'

Este endpoint faz a criação de um usuário no banco de dados. É necessário enviar na requisição os seguintes atributos, conforme exemplo:

```json
{
  "id": "someStringAsTheNewUserId",
  "name": "someStringAsTheNewUserName",
  "photoUrl": "someStringAsTheNewPhotoUrl"
}
```

Caso já exista um usuário cadastrado com o id informado, a api retorna erro ou caso o body da requisição não siga o formato de exemplo é retornado erro.

### GET '/api/tts/:userId'

Este endpoint retorna um array com dados de registros de um usuário específico, de acordo com o 'userId' informado via params na requisição. Estes registros associam textos com a url de seus respectivos áudios, e seguem o seguinte formato:

```json
{
  "id": 4,
  "text": "content of text",
  "audioUrl": "stringInUrlFormat",
  "userId": "someRandomString",
  "createdAt": "dateFormatString"
}
```

Caso não existam registros associados ao 'userId' informado, é retornado um array vazio.

### POST '/api/tts'

Este endpoint realiza a criação de um registro dados os seguintes atributos, via body:

```json
{
  "text": "content of text",
  "audioUrl": "stringInUrlFormat",
  "userId": "someRandomString"
}
```

Caso o body da requisição não siga o formato de exemplo é retornado erro.
