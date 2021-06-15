## Bem vindo ao synvia-back-end!

Backend Synvia.
[Documentação](https://documenter.getpostman.com/view/2898019/TWDTLyE8)

### Instruções
Para executar a aplicação é necessário os seguintes passos:
- Criar um arquivo `.env` no mesmo padrão do `example.env` do projeto.
- Executar o `npm install` ou `yarn` para instalar as dependências do projeto.
- Executar o comando `docker-compose up -d` para subir os containers docker da aplicação.
- Após subir o database no docker. Executar o comando `yarn dev`. Para execução local.
- Sistema pronto para ser usado via docker.

#### Comandos
comandos utlizados no serviço. Executar com `yarn` ou `npm run`
- `yarn start` ou `npm run start` - Inicia o servidor em modo distribuição.
- `yarn dev` ou `npm run dev` - inicia o servidor em desenvolvimento.
- `yarn build` ou `npm run build` - cria o build do projeto.
- `yarn build:local` ou `npm run build:local` - cria o build do projeto local. Necessita do `.env`.
- `yarn test` ou `npm run test` - Executar os testes da aplicação.

#### Tecnologias utilizadas
- [nodejs](https://nodejs.org/en/)
- [mongodb](https://www.mongodb.com/)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

#### Frameworks utilizados
- [mongoose](https://mongoosejs.com/)
- [express](https://www.npmjs.com/package/express)
- [jest](https://jestjs.io/docs/en/getting-started)

#### Observações
- Verificar se o `.env` está correto no arquivo.
- Verificar se a porta 3000 e 27017 estão livres para execução. Pois a 3000 é a porta da aplicação e a 27017 é a base de dados. Caso deseje mudar. Alterar no arquivo `.env`