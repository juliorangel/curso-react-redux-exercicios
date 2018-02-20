
# EXERCICIO 3 #

- consultas
- as funcoes podem ser usadas de forma concatenada:
	db.meuBanco.find().pretty()


# FIND() #

db.billingCycles.find()
- mostra todos os dados no banco

db.billingCycles.find().pretty()
- mostra todos os dados no banco em forma de documento (hashes)

db.billingCycles.findOne()
- mostra o primeiro registro

db.billingCycles.findOne({month: 2})
- mostra o primeiro registro com filtro "month:2"

db.billingCycles.find({$or: [ {month: 1}, {month: 2} ]})
- mostra o primeiro registro com filtros cujo criterio seja "month:1" OU "month:1"
- pode-se usar
	$or: ou
	$and: e

db.billingCycles.find({year: 2017}).skip(1)
- pula o primeiro registro

db.billingCycles.find({year: 2017}).skip(1).limit(2)
- pula o primeiro registro e limita os resultados a 2 mostras