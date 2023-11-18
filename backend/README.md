# API LabIoTech
#### Api analise e cadastro de pH e temperatura de amostrar liquidas em laboratório.

## Recriando o banco
Para reacriar o banco é necessario o postgres de forma local ou em nuvem. Criar tabela com nome padrão `arduino`.
Após rodar os seguintes comandos:

```
npm install
```
```
npx sequelize-cli db:migrate
```

## Start
Criar na raiz um arquivo .env.environment.

```
npm start

npm run dev
```

### Variáveis de ambiente

Descrição das variáveis de ambiente a serem configuradas no projeto.

|Env name      |Tipo   |Valor Padrão |Descricao                          |
|--------------|-------|-------------|-----------------------------------|
|HOST          |`string`|            |Host de preferência ipv4           |
|PORT          |`int`   |            |Porta de exposição da app          |
|JWT_ENABLE    |`string`|true        |Habilita validação JWT             |
|DB_HOST       |`string`|            |Host do banco local ou em nuvem    |
|DB_USERNAME   |`string`|            |Username do banco                  |
|DB_PASSWORD   |`string`|            |Password do banco                  |
|DB_NAME       |`string`|arduino     |Nome do banco                      |
|DB_DIALECT    |`string`|postgres    |Dialeto a ser usado pelo sequelize |

## Apêndice
Para informações de rotas segui a documentação da API no swagger ``--->``

*url padrão*
```
http://´host´:´port´/docs
```

## Licença

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)