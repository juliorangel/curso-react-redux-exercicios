
# EXERCICIO 2 #

- insercao de dados


# INSERT() #

db.billingCycles.insert()
- insere dados na collection billingCycles

db.billingCycles.insert({name:"Janeiro/17", month: 1, year: 2017})
- usamos um hash para inserir os dados.
- o banco cria automaticamente a collection e insere os dados, mesmo que a collection nao tenha sido criada antes.


# SAVE() #

db.billingCycles.save({name:"Fevereiro/17", month: 2, year: 2017})
- o save tanto insere como tambem atualiza um objeto existente (precisa passar a chave)
- pode-se usar enter para digitar o array linha por linha.