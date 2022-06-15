# DeepESG Teste

## Descrição

Esse repositório contém o sistema de backend resposável pelas operações CRUD das entidades filial (branchOffice), computador (computer) e ar condicionado (airConditioner).

## Instalação

```bash
$ npm install
```

## Rodando o aplicativo

```bash
# desenvolvimento
$ npm run start

# desenvolvimento no modo 'watch'
$ npm run start:dev

# production mode
$ npm run start:prod
```

## URL

A entrada da aplicação é exposta na porta 3000.

Em todas as rotas é possível a utilização dos métodos: GET, POST, PUT e DELETE.

### Filial (branchOffice):

```bash
# Retorna todos os registros das filiais
- (GET) /branch-office

# Cria uma nova filial
- (POST) /branch-office

# Atulializa uma filial com o id passado
- (PUT) /branch-office/:id

# Deleta uma filial com o id informado
- (DELETE) /branch-office/:id
```

### Computador (computer):

```bash
# Retorna todos os computadores cadastrados
- (GET) /computador

# Cria uma nova computador
- (POST) /computador

# Atulializa uma computador com o id passado
- (PUT) /computador/:id

# Deleta uma computador com o id informado
- (DELETE) /computador/:id
```

### Ar Condicionado (airConditioner):

```bash
# Retorna todos os ares condicionados cadastrados
- (GET) /air-conditioner

# Cria uma nova ar condicionado
- (POST) /air-conditioner

# Atulializa uma ar condicionado com o id passado
- (PUT) /air-conditioner/:id

# Deleta uma ar condicionado com o id informado
- (DELETE) /air-conditioner/:id
```
