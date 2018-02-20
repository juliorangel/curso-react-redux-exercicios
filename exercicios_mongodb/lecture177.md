
# EXERCICIO 1 #

- terminal 1 - inicialize o banco: 
$ mongod

- terminal 2 - inicialize o console shell: 
$ mongo


# COMANDOS BASICOS #

cls
- limpa o console

show dbs
- mostra as bases disponiveis

use db_finance
- muda para a base "db_finance" 
- (pode ser usado ainda que a base nao exista)
- (neste caso a base nao foi criada fisicamente)

db.createCollection('billingCycles')
- cria uma nova coleção chamada 'billingCycles'
- aceita minusculas e maiusculas (case sensitive)

db.billingCycles.drop()
- elimina a collection criada