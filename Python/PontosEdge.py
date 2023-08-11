def contadordias (tenho, quero, receber):
    global dias;
    while True:
        tenho += receber;
        dias += 1;
        if (tenho >= quero):
            print("Acabou!!!\n\n");
            break;

dias = 0;
pontos = int(input("Quanto pontos você possui? "));
pontostotal = int(input("Quanto pontos você quer obter? "));
pontosreceb = int(input("Quantos pontos faz por dia? "));
contadordias(pontos, pontostotal, pontosreceb);
print("Para obter {} pontos, você deve ganhar, por dia, {} pontos em menos de {} dias".format(pontostotal, pontosreceb, dias));