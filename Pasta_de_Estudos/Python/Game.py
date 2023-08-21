while (True):
    primeiraprova = int(input("\nQual foi a nota da PRIMEIRA PROVA? "))
    if (primeiraprova < 0 or primeiraprova > 100):
        print("Nota recusada, coloque outra!!!")
    else:
        primeiraprova *= 0.2
        break

while (True):
    segundaprova = int(input("\nQual foi a nota da SEGUNDA PROVA? "))
    if (segundaprova < 0 or segundaprova > 100):
        print("Nota recusada, coloque outra!!!")
    else:
        segundaprova *= 0.3
        break

while (True):    
    provaobjetiva = int(input("\nQual foi a nota da PROVA OBJETIVA? "))
    if (provaobjetiva < 0 or provaobjetiva > 100):
        print("Nota recusada, coloque outra!!!")
    else:
        provaobjetiva *= 0.5
        break

media = (primeiraprova+segundaprova+provaobjetiva)

if(media < 30):
    print("Reprovado!!!")
elif(media < 70 and media > 30):
    print("Precisará fazer o exame!!!")
else:
    print("Aprovado!!!")