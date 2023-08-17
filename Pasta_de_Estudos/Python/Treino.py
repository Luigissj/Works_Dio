import pandas

x= {'Duração':[35, 34, 26, 32, 37, 28, 27, 33, 36, 32]}
p=pandas.DataFrame(x)
restos = []
for i in x['Duração']:
    restos.insert(10, i-32)

print(restos)
somatodos = 0
for i in restos:
    somatodos += i**2

print (somatodos)

varianciaA = somatodos/(len(x['Duração'])-1)
print(varianciaA)

desviopadraoA = p['Duração'].std()
print(desviopadraoA)
