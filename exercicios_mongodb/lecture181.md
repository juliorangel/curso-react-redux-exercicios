
# EXERCICIO 5 #

- update


# UPDATE() #

db.billingCycles.update()
- atualiza informacoes do banco


db.billingCycles.update(
	{ $and: [{month:1}, {year:2017}] },
	{ $set: {credits:[{name: "Salario", value: 5000}]} }
)
- adiciona em "credits" o campo "Salario"


db.billingCycles.find(
	{ credits: {$exists:true} },
	{ _id: 0, name: 1}
).pretty()
- $exists usado para ver todos os que tem atributos creditos filtrados por name.


- mais sobre update em: http://docs.mongodb.com