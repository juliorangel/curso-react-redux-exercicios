
# EXERCICIO 4 #

- agregacoes


# FIND() #

db.billingCycles.aggregate()
- agrega dados (somas) e projeta um pipeline
- onde:
	$project (projeta os resultados em uma pipeline
	$sum (soma)
	$group (agrupa o resultado)
	_id: null (agrega tudo)


db.billingCycles.aggregate([{
	$project: {
		credit: {$sum: "$credits.value"},
		debt: {$sum: "$debts.value"}
	},
	$group: {
		_id: null,
		credit: {$sum: "$credit"},
		debt: {$sum: "$debt"}
	}
}])



- mais do operator aggregate em: http://docs.mongodb.com