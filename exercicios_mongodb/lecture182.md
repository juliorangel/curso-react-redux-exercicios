
# EXERCICIO 5 #

- contador e remocoes


# COUNT() #

db.billingCycles.count()
- conta os dados do banco

# REMOVE() #

db.billingCycles.remove({month:2})
- remove o dado cujo month seja 2.

db.billingCycles.remove({year:2017}, 1)
- remove apenas 1 registro que contenha year: 2017

db.dropDatabase()
- remove o banco atual